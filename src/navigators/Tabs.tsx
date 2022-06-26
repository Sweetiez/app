import * as React from 'react';
import getTabIcon from '../utils/navigator';
import SweetsStackScreen from './Sweets';
import RecipesStackScreen from './Recipes';
import CartStackScreen from './Cart';
import AccountNotConnectedStackScreen from './AccountNotConnected';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {itemsQuantityIntoCartSelector} from '../store/selectors/cart';
import {tokenSelector} from '../store/selectors/user';
import AccountConnectedStackScreen from './AccountConnected';
import colors from '../assets/colors';
import {getUserRequest} from '../store/api/user';
import {GET_USER_ERROR, TOKEN_EXPIRED} from '../store/constants';
import {logout, setUser} from '../store/actions/user';

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
      {/*<Tab.Screen name={t('tabBar.events')} component={EventsStackScreen} />*/}
      <Tab.Screen
        name={t('tabBar.cart')}
        component={CartStackScreen}
        options={itemsIntoCart > 0 ? {tabBarBadge: itemsIntoCart} : null}
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
