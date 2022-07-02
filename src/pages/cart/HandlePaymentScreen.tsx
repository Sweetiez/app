import * as React from 'react';

import {SafeAreaView} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
import Config from 'react-native-config';

function HandlePaymentScreen({route}) {
  const orderId = route.params.orderId;
  const email = route.params.email;
  const stripePromise = Config.STRIPE_PUBLISHABLE_KEY;

  return (
    <SafeAreaView>
      <StripeProvider publishableKey={stripePromise}>
        <PaymentScreen orderId={orderId} email={email} />
      </StripeProvider>
    </SafeAreaView>
  );
}

export default HandlePaymentScreen;
