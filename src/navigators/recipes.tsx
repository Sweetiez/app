import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../pages';

const RecipesStack = createNativeStackNavigator();

function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator screenOptions={{headerShown: false}}>
      <RecipesStack.Screen name="Account" component={AccountScreen} />
    </RecipesStack.Navigator>
  );
}

export default RecipesStackScreen;
