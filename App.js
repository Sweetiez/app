import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SweetsStackScreen from './src/navigators/sweets';
import RecipesStackScreen from './src/navigators/recipes';
import EventsStackScreen from './src/navigators/events';
import CartStackScreen from './src/navigators/cart';
import AccountNotConnectedStackScreen from "./src/navigators/account-not-connected";
import AccountConnectedStackScreen from "./src/navigators/account-connected";
import getTabIcon from './src/utils/navigator';
import './src/i18n/index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {itemsQuantityIntoCartSelector} from "./src/store/selectors/cart";
import {tokenSelector} from "./src/store/selectors/user";

const App: () => Node = () => {
  const Tab = createBottomTabNavigator();
    const {t} = useTranslation();
    const itemsIntoCart = useSelector(itemsQuantityIntoCartSelector);
    const hasToken = useSelector(tokenSelector)

    console.log(hasToken)

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
            {
                hasToken ?
                    <Tab.Screen name={t('tabBar.account')} component={AccountConnectedStackScreen} />
                    :
                    <Tab.Screen name={t('tabBar.account')} component={AccountNotConnectedStackScreen} />
            }
        </Tab.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
};

export default App;
