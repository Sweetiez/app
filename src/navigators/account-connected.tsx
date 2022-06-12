import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountScreen,
  EditAccountScreen,
  EditPasswordScreen,
  OrdersScreen,
} from '../pages';

const AccountConnectedStack = createNativeStackNavigator();

function AccountConnectedStackScreen() {
  return (
    <AccountConnectedStack.Navigator screenOptions={{headerShown: false}}>
      <AccountConnectedStack.Screen name="Account" component={AccountScreen} />
      <AccountConnectedStack.Screen
        name="EditAccount"
        component={EditAccountScreen}
      />
      <AccountConnectedStack.Screen
        name="EditPassword"
        component={EditPasswordScreen}
      />
      <AccountConnectedStack.Screen name="Orders" component={OrdersScreen} />
    </AccountConnectedStack.Navigator>
  );
}

export default AccountConnectedStackScreen;
