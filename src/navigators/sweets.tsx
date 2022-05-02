import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, ShopScreen} from '../pages';

const SweetsStack = createNativeStackNavigator();

function SweetsStackScreen() {
  return (
    <SweetsStack.Navigator screenOptions={{headerShown: false}}>
      <SweetsStack.Screen name="Home" component={ShopScreen} />
      <SweetsStack.Screen name="Details" component={DetailsScreen} />
    </SweetsStack.Navigator>
  );
}

export default SweetsStackScreen;
