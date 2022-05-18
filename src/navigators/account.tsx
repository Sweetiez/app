import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, LoginScreen, RegisterScreen} from '../pages';

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
      <AccountStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
