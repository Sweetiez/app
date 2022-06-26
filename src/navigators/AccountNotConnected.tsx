import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, LoginScreen, RegisterScreen} from '../pages';

const AccountNotConnectedStack = createNativeStackNavigator();

function AccountNotConnectedStackScreen() {
  return (
    <AccountNotConnectedStack.Navigator screenOptions={{headerShown: false}}>
      <AccountNotConnectedStack.Screen name="Login" component={LoginScreen} />
      <AccountNotConnectedStack.Screen
        name="Register"
        component={RegisterScreen}
      />
      <AccountNotConnectedStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AccountNotConnectedStack.Navigator>
  );
}

export default AccountNotConnectedStackScreen;
