import * as React from 'react';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

interface Props {
  iconName?: string;
  text: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
}

const Title = styled.Text`
  color: white;
  font-size: 13px;
  margin-right: 5px;
  font-weight: bold;
`;
const Container = styled.TouchableOpacity<{color}>`
  flex-direction: row;
  background-color: ${({color}) => color || colors.yellow};
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  justify-content: center;
`;
const Button: React.FC<Props> = ({
  text,
  iconName,
  onPress,
  disabled = false,
  color,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled} color={color}>
      <Title>{text}</Title>
      {iconName && getIcons(iconName)}
    </Container>
  );
};

export default Button;
