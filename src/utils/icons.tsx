import React from 'react';
// @ts-ignore
import Pen from './../assets/icons/pen.svg';

const getIcons = iconName => {
  switch (iconName) {
    case 'pen':
      return <Pen width={18} height={18} color="#ffffff" />;
  }
};

export default getIcons;
