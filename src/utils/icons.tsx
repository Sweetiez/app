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
import Eye from './../assets/icons/eye.svg';
import Interrogation from './../assets/icons/interrogation.svg';
import Cart from './../assets/icons/cart.svg';
import Trash from './../assets/icons/trash.svg';
import NoImage from './../assets/icons/no-image.svg';
import Edit from './../assets/icons/edit.svg';
import colors from '../assets/colors';

const getIcons = (iconName, color = colors.white, size = 18) => {
  const props = {
    width: size,
    height: size,
    color: color,
  };
  switch (iconName) {
    case 'pen':
      return <Pen {...props} />;
    case 'eye':
      return <Eye {...props} />;
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
    case 'interrogation':
      return <Interrogation {...props} />;
    case 'cart':
      return <Cart {...props} />;
    case 'trash':
      return <Trash {...props} />;
    case 'noImage':
      return <NoImage {...props} />;
    case 'edit':
      return <Edit {...props} />;
  }
};

export default getIcons;
