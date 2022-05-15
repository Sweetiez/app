// @ts-nocheck
import React from 'react';
import Pen from './../assets/icons/pen.svg';
import Minus from './../assets/icons/minus.svg';
import Plus from './../assets/icons/plus.svg';
import Add from './../assets/icons/add.svg';
import Back from './../assets/icons/arrow-back.svg';
import colors from '../assets/colors';

const defaultOnPress = () => {};

const getIcons = (iconName, color = colors.white, onPress = defaultOnPress) => {
  switch (iconName) {
    case 'pen':
      return <Pen width={18} height={18} color={color} onPress={onPress} />;
    case 'minus':
      return <Minus width={18} height={18} color={color} onPress={onPress} />;
    case 'plus':
      return <Plus width={18} height={18} color={color} onPress={onPress} />;
    case 'add':
      return <Add width={18} height={18} color={color} onPress={onPress} />;
    case 'back':
      return <Back width={18} height={18} color={color} onPress={onPress} />;
  }
};

export default getIcons;
