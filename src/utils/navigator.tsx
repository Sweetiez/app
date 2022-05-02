import React from 'react';
import Home from './../assets/icons/home.svg';
import Account from '../assets/icons/account.svg';

const getTabIcon = (route, focused, color, size, t) => {
  // TODO manage right icons
  switch (route.name) {
    case t('tabBar.sweets'):
      return <Home size={size} width={24} height={24} color={color} />;
    case t('tabBar.recipes'):
      return <Account size={size} width={24} height={24} color={color} />;
    case t('tabBar.events'):
      return <Account size={size} width={24} height={24} color={color} />;
  }
};

export default getTabIcon;
