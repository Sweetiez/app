import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../pages';

const AccountConnectedStack = createNativeStackNavigator();

function AccountConnectedStackScreen() {
  return (
    <AccountConnectedStack.Navigator screenOptions={{headerShown: false}}>
      <AccountConnectedStack.Screen name="Account" component={AccountScreen} />
    </AccountConnectedStack.Navigator>
  );
}

export default AccountConnectedStackScreen;
