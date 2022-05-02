import React from 'react';
import Home from './../assets/icons/home.svg';
import Account from '../assets/icons/account.svg';

const getTabIcon = (route, focused, color, size) => {
  switch (route.name) {
    case 'HomeStack':
      return <Home size={size} width={24} height={24} color={color} />;
    case 'AccountStack':
      return <Account size={size} width={24} height={24} color={color} />;
  }
};

export default getTabIcon;
