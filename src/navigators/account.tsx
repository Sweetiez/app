import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, LoginScreen} from '../pages';
import RegisterScreen from '../pages/RegisterScreen';

const AccountStack = createNativeStackNavigator();

function EventsStackScreen() {
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

export default EventsStackScreen;
