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

import HomeStackScreen from './src/navigators/home';
import AccountStackScreen from './src/navigators/account';
import getTabIcon from './src/utils/navigator';
import './src/i18n/index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App: () => Node = () => {
  const Tab = createBottomTabNavigator();

  return (
    <React.StrictMode>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return getTabIcon(route, focused, color, size);
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
          <Tab.Screen name="AccountStack" component={AccountStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
};

export default App;
