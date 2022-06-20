import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import getTabIcon from '../utils/navigator';
import {useTranslation} from 'react-i18next';
import {ShopScreen} from '../pages';
import colors from '../assets/colors';

function TabStackScreen() {
  const Tab = createMaterialTopTabNavigator();
  const {t} = useTranslation();

  const options = {
    activeTintColor: colors.yellow,
    indicatorStyle: {backgroundColor: colors.yellow},
    style: {height: 40, shadowOpacity: 0.3, elevation: 2},
    labelStyle: {
      fontSize: 18,
      flex: 1,
      margin: 0,
      lineHeight: 18,
      marginTop: -10,
      textTransform: 'none',
    },
  };

  return (
    <Tab.Navigator
      tabBarOptions={options}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color}) => {
          return getTabIcon(route, focused, color, 20, t);
        },
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.grey,
        tabBarPressColor: colors.yellow,
      })}>
      <Tab.Screen
        name={t('shopTabBar.trays')}
        component={ShopScreen}
        initialParams={{isTrays: true}}
      />
      <Tab.Screen
        name={t('shopTabBar.sweets')}
        component={ShopScreen}
        initialParams={{isTrays: false}}
      />
    </Tab.Navigator>
  );
}

export default TabStackScreen;
