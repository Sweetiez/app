import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import ArrowBack from '../../assets/icons/arrow-back.svg';
import colors from '../../assets/colors';

interface Props {
  navigation: any;
  color: string;
}
const Arrow = styled(ArrowBack)`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 10;
`;
const Back: React.FC<Props> = ({navigation, color = colors.white}) => (
  <Arrow color={color} onPress={() => navigation.goBack()} />
);

export default Back;
