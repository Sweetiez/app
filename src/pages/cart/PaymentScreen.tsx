import React, {useCallback, useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import {
  Address,
  BillingDetails,
  confirmPaymentSheetPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import styled from 'styled-components';

import {
  createPayementIntentRequest,
  getOrdersRequest,
} from '../../store/api/orders';
import {
  CREATE_PAYMENT_INTENT_ERROR,
  GET_ORDERS_ERROR,
} from '../../store/constants';

import {Back, Error, Loader, Title} from '../../atomic/atoms';

import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../store/actions/cart';
import {setOrders} from '../../store/actions/orders';
import {tokenSelector, userSelector} from '../../store/selectors/user';

interface PaymentScreenProps {
  orderId: string;
  email: string;
}

const Icon = styled.View`
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
const Space = styled.View`
  margin-top: 50px;
`;
const Arrow = styled.View`
  z-index: 10;
`;

const PaymentScreen: React.FC<PaymentScreenProps> = ({orderId, email}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errorMsg, setError] = useState<string | null>(null);

  const fetchPaymentSheetParams = useCallback((): Promise<string> => {
    return createPayementIntentRequest(orderId).then(response => {
      let res;
      if (response !== CREATE_PAYMENT_INTENT_ERROR) {
        res = response.clientSecret;
      } else {
        setError(t('payment.error'));
        res = '';
      }
      return res;
    });
  }, [orderId, t]);

  const initializePaymentSheet = useCallback(() => {
    fetchPaymentSheetParams().then(paymentIntent => {
      const address: Address = {
        country: 'FR',
      };
      const billingDetails: BillingDetails = {
        email: email,
        address: address,
      };

      initPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        customFlow: true,
        merchantDisplayName: 'FI-Sweets',
        merchantCountryCode: 'FR',
        defaultBillingDetails: billingDetails,
      }).then(data => {
        if (data.error) {
          setError(t(data.error.message));
        }
        setLoading(false);
      });
    });
  }, [email, fetchPaymentSheetParams, initPaymentSheet, t]);

  const handelConfirmPayment = useCallback(() => {
    setLoading(true);
    confirmPaymentSheetPayment().then(data => {
      if (data.error) {
        setError(t(data.error.message));
      } else {
        setError(undefined);
        dispatch(clearCart());
        if (user) {
          getOrdersRequest(token).then(cartData => {
            setLoading(false);
            if (data !== GET_ORDERS_ERROR) {
              dispatch(setOrders(cartData));
            }
          });
        }
        navigation.goBack();
        navigation.goBack();
      }
    });
  }, [dispatch, navigation, t, token, user]);

  const openPaymentSheet = useCallback(() => {
    presentPaymentSheet().then(data => {
      if (data.error) {
        setError(t(data.error.message));
      } else {
        handelConfirmPayment();
      }
    });
  }, [handelConfirmPayment, presentPaymentSheet, t]);

  useEffect(() => {
    initializePaymentSheet();
  }, [email, initializePaymentSheet]);

  useEffect(() => {
    if (!isLoading) {
      openPaymentSheet();
    }
  }, [isLoading, openPaymentSheet]);

  return (
    <SafeAreaView>
      <Arrow>
        <Back navigation={navigation} color={colors.black} />
      </Arrow>
      <Title title={t('payment.title')} />
      <Icon>{getIcons('payment', colors.yellow, 100)}</Icon>
      <Space />
      {errorMsg && <Error content={errorMsg} />}
      {isLoading && <Loader />}
    </SafeAreaView>
  );
};

export default PaymentScreen;
