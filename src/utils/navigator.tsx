import React from 'react';
import getIcons from './icons';

const getTabIcon = (route, focused, color, size, t) => {
  switch (route.name) {
    case t('tabBar.sweets'):
      return getIcons('cake', color, () => {}, 24);
    case t('tabBar.recipes'):
      return getIcons('cookBook', color, () => {}, 24);
    case t('tabBar.events'):
      return getIcons('event', color, () => {}, 24);
    case t('tabBar.account'):
      return getIcons('account', color, () => {}, 24);
  }
};

export default getTabIcon;
