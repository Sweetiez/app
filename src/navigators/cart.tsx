import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartRecapScreen, CartScreen, PaymentScreen, ShipScreen} from '../pages';

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{headerShown: false}}>
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="CartRecap" component={CartRecapScreen} />
      <CartStack.Screen name="Ship" component={ShipScreen} />
      <CartStack.Screen name="Payment" component={PaymentScreen} />
    </CartStack.Navigator>
  );
}

export default CartStackScreen;
