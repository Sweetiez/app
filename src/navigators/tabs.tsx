import React from 'react';
import getTabIcon from '../utils/navigator';
import SweetsStackScreen from './sweets';
import RecipesStackScreen from './recipes';
import EventsStackScreen from './events';
import CartStackScreen from './cart';
import AccountNotConnectedStackScreen from './account-not-connected';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {itemsQuantityIntoCartSelector} from '../store/selectors/cart';
import {tokenSelector} from '../store/selectors/user';
import AccountConnectedStackScreen from './account-connected';

function TabStackScreen() {
  const Tab = createBottomTabNavigator();
  const {t} = useTranslation();
  const itemsIntoCart = useSelector(itemsQuantityIntoCartSelector);
  const hasToken = useSelector(tokenSelector);

  return (
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
      <Tab.Screen
        name={t('tabBar.cart')}
        component={CartStackScreen}
        options={itemsIntoCart > 0 ? {tabBarBadge: itemsIntoCart} : null}
      />
      {hasToken ? (
        <Tab.Screen
          name={t('tabBar.account')}
          component={AccountConnectedStackScreen}
        />
      ) : (
        <Tab.Screen
          name={t('tabBar.account')}
          component={AccountNotConnectedStackScreen}
        />
      )}
    </Tab.Navigator>
  );
}

export default TabStackScreen;
