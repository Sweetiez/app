import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CGUScreen} from '../pages';

const CommonStack = createNativeStackNavigator();

function CommonStackScreen() {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen name="CGU" component={CGUScreen} />
    </CommonStack.Navigator>
  );
}

export default CommonStackScreen;
