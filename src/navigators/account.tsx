import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../pages';

const AccountStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="Account" component={LoginScreen} />
    </AccountStack.Navigator>
  );
}

export default EventsStackScreen;
