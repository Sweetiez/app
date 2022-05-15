import React from 'react';
import Event from '../assets/icons/event.svg';
import CookBook from '../assets/icons/cook-book.svg';
import Cake from '../assets/icons/cake.svg';

const getTabIcon = (route, focused, color, size, t) => {
  switch (route.name) {
    case t('tabBar.sweets'):
      return <Cake size={size} width={24} height={24} color={color} />;
    case t('tabBar.recipes'):
      return <CookBook size={size} width={24} height={24} color={color} />;
    case t('tabBar.events'):
      return <Event size={size} width={24} height={24} color={color} />;
  }
};

export default getTabIcon;
