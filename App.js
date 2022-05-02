/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SweetsStackScreen from './src/navigators/sweets';
import RecipesStackScreen from './src/navigators/recipes';
import EventsStackScreen from './src/navigators/events';
import getTabIcon from './src/utils/navigator';
import './src/i18n/index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from "react-i18next";

const App: () => Node = () => {
  const Tab = createBottomTabNavigator();
    const {t} = useTranslation();

  return (
    <React.StrictMode>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return getTabIcon(route, focused, color, size, t);
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name={t('tabBar.recipes')} component={RecipesStackScreen} />
          <Tab.Screen name={t('tabBar.sweets')} component={SweetsStackScreen} />
          <Tab.Screen name={t('tabBar.events')} component={EventsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
};

export default App;
