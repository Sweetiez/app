import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesScreen, RecipeScreen} from '../pages';

const RecipesStack = createNativeStackNavigator();

function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator screenOptions={{headerShown: false}}>
      <RecipesStack.Screen name="Recipes" component={RecipesScreen} />
      <RecipesStack.Screen name="Recipe" component={RecipeScreen} />
    </RecipesStack.Navigator>
  );
}

export default RecipesStackScreen;
