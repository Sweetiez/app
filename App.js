import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SweetsStackScreen from './src/navigators/sweets';
import RecipesStackScreen from './src/navigators/recipes';
import EventsStackScreen from './src/navigators/events';
import AccountStackScreen from './src/navigators/account';
import CartStackScreen from './src/navigators/cart';
import getTabIcon from './src/utils/navigator';
import './src/i18n/index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {itemsQuantityIntoCartSelector} from "./src/store/selectors/cart";

const App: () => Node = () => {
  const Tab = createBottomTabNavigator();
    const {t} = useTranslation();
    const itemsIntoCart = useSelector(itemsQuantityIntoCartSelector);
    console.log(itemsIntoCart)

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
            <Tab.Screen name={t('tabBar.sweets')} component={SweetsStackScreen} />
            <Tab.Screen name={t('tabBar.recipes')} component={RecipesStackScreen} />
            <Tab.Screen name={t('tabBar.events')} component={EventsStackScreen} />
            <Tab.Screen name={t('tabBar.cart')} component={CartStackScreen}
                        options={itemsIntoCart > 0 ? { tabBarBadge: itemsIntoCart} : null}
            />
            <Tab.Screen name={t('tabBar.account')} component={AccountStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
};

export default App;
