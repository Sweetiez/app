import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import SweetsStackScreen from './Sweets';
import RecipesStackScreen from './Recipes';
import CartStackScreen from './Cart';
import EventsStackScreen from './Events';
import AccountConnectedStackScreen from './AccountConnected';
import AccountNotConnectedStackScreen from './AccountNotConnected';

import {itemsQuantityIntoCartSelector} from '../store/selectors/cart';
import {tokenSelector} from '../store/selectors/user';
import {getUserRequest} from '../store/api/user';
import {
  EVENTS_ERROR,
  GET_USER_ERROR,
  REWARD_ERROR,
  TOKEN_EXPIRED,
} from '../store/constants';
import {logout, setUser} from '../store/actions/user';
import {getRewards} from '../store/api/rewards';
import {setAvailableRewards} from '../store/actions/cart';

import getTabIcon from '../utils/navigator';
import colors from '../assets/colors';
import {getPublishedEvents} from '../store/api/event';
import {updateEvents} from '../store/actions/event';

function TabStackScreen() {
  const Tab = createBottomTabNavigator();
  const {t} = useTranslation();
  const itemsIntoCart = useSelector(itemsQuantityIntoCartSelector);
  const hasToken = useSelector(tokenSelector);
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          return getTabIcon(route, focused, color, size, t);
        },
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={t('tabBar.shop')} component={SweetsStackScreen} />
      <Tab.Screen name={t('tabBar.recipes')} component={RecipesStackScreen} />
      <Tab.Screen
        name={t('tabBar.events')}
        component={EventsStackScreen}
        listeners={{
          tabPress: () => {
            getPublishedEvents().then(result => {
              if (result !== EVENTS_ERROR) {
                dispatch(updateEvents(result));
              }
            });
          },
        }}
      />
      <Tab.Screen
        name={t('tabBar.cart')}
        component={CartStackScreen}
        options={itemsIntoCart > 0 ? {tabBarBadge: itemsIntoCart} : null}
        listeners={{
          tabPress: () => {
            getRewards().then(result => {
              if (result !== REWARD_ERROR) {
                dispatch(setAvailableRewards(result));
              }
            });
          },
        }}
      />
      {hasToken ? (
        <Tab.Screen
          listeners={{
            tabPress: () => {
              getUserRequest(hasToken).then(updatedUser => {
                if (
                  updatedUser !== GET_USER_ERROR &&
                  updatedUser !== TOKEN_EXPIRED
                ) {
                  dispatch(setUser(updatedUser));
                } else if (updatedUser === TOKEN_EXPIRED) {
                  dispatch(logout());
                } else {
                }
              });
            },
          }}
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
