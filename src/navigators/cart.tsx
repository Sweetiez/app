import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CartScreen,
  PaymentScreen,
  ConfirmationScreen,
  ClientInfoScreen,
} from '../pages';

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{headerShown: false}}>
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="Confirmation" component={ConfirmationScreen} />
      <CartStack.Screen name="Payment" component={PaymentScreen} />
      <CartStack.Screen name="ClientInfo" component={ClientInfoScreen} />
    </CartStack.Navigator>
  );
}

export default CartStackScreen;
