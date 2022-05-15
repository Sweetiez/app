import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, LoginScreen} from '../pages';

const AccountStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AccountStack.Navigator>
  );
}

export default EventsStackScreen;
