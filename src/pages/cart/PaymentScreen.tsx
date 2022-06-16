import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {Alert, SafeAreaView, Button} from 'react-native';
import {
  Address,
  BillingDetails,
  confirmPaymentSheetPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import {createPayementIntentRequest} from '../../store/api/orders';
import {CREATE_PAYMENT_INTENT_ERROR} from '../../store/constants';
import {Error} from '../../atomic/atoms';

interface PaymentScreenProps {
  orderId: string;
  email: string;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({orderId, email}) => {
  const {t} = useTranslation();
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMsg, setError] = useState<string | null>(null);

  const fetchPaymentSheetParams = async (): Promise<string> => {
    return createPayementIntentRequest(orderId).then(response => {
      setLoading(false);
      let res;
      if (response !== CREATE_PAYMENT_INTENT_ERROR) {
        res = response.clientSecret;
      } else {
        setError(t('form.apiError')); //TODO
        res = '';
      }
      return res;
    });
  };

  const initializePaymentSheet = async () => {
    const paymentIntent = await fetchPaymentSheetParams();
    const address: Address = {
      country: 'FR',
    };
    const billingDetails: BillingDetails = {
      email: email,
      address: address,
    };

    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customFlow: true,
      merchantDisplayName: 'FI-Sweets',
      merchantCountryCode: 'FR',
      defaultBillingDetails: billingDetails,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const handelConfirmPayment = async () => {
    const {error} = await confirmPaymentSheetPayment();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully!');
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      handelConfirmPayment();
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  });

  return (
    <SafeAreaView>
      {errorMsg && <Error content={errorMsg} />}
      <Button
        variant="primary"
        disabled={!isLoading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
