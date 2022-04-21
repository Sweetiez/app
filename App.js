/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './src/i18n/index'

import {DetailsScreen, HomeScreen} from "./src/pages";

const App: () => Node = () => {

  const Stack = createNativeStackNavigator();

  return (
      <React.StrictMode>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </React.StrictMode>
  );
};

export default App;
