// @ts-nocheck
import React from 'react';
import Pen from './../assets/icons/pen.svg';
import Minus from './../assets/icons/minus.svg';
import Plus from './../assets/icons/plus.svg';
import Add from './../assets/icons/add.svg';

const getIcons = (iconName, color = '#ffffff') => {
  switch (iconName) {
    case 'pen':
      return <Pen width={18} height={18} color={color} />;
    case 'minus':
      return <Minus width={18} height={18} color={color} />;
    case 'plus':
      return <Plus width={18} height={18} color={color} />;
    case 'add':
      return <Add width={18} height={18} color={color} />;
  }
};

export default getIcons;
