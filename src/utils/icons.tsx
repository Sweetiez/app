// @ts-nocheck
import React from 'react';
import Pen from './../assets/icons/pen.svg';
import Minus from './../assets/icons/minus.svg';
import Plus from './../assets/icons/plus.svg';
import Add from './../assets/icons/add.svg';
import Back from './../assets/icons/arrow-back.svg';
import CookBook from './../assets/icons/cook-book.svg';
import Cake from './../assets/icons/cake.svg';
import Event from './../assets/icons/event.svg';
import Account from './../assets/icons/account.svg';
import colors from '../assets/colors';

const defaultOnPress = () => {};

const getIcons = (
  iconName,
  color = colors.white,
  onPress = defaultOnPress,
  size = 18,
) => {
  const props = {
    width: size,
    height: size,
    color: color,
    onPress: onPress,
  };
  switch (iconName) {
    case 'pen':
      return <Pen {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'add':
      return <Add {...props} />;
    case 'back':
      return <Back {...props} />;
    case 'cake':
      return <Cake {...props} />;
    case 'event':
      return <Event {...props} />;
    case 'cookBook':
      return <CookBook {...props} />;
    case 'account':
      return <Account {...props} />;
  }
};

export default getIcons;
