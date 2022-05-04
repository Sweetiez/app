import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import getIcons from '../../utils/icons';

interface Props {
  iconName?: string;
  text: string;
}

const Title = styled.Text`
  color: white;
  font-size: 15px;
  margin-right: 5px;
  font-weight: bold;
`;
const Container = styled.View`
  flex-direction: row;
  background-color: #dba970;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 40%;
  justify-content: center;
  margin: auto;
`;
const Button: React.FC<Props> = ({text, iconName}) => {
  return (
    <Container>
      <Title>{text}</Title>
      {iconName && getIcons(iconName)}
    </Container>
  );
};

export default Button;
