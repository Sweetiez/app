import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import colors from '../../assets/colors';

interface Props {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  color?: string;
}
const StyledButton = styled.TouchableOpacity<{color}>`
  background-color: ${({color}) => color};
  padding: 10px;
  border-radius: 15px;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${colors.white};
`;

const Button: React.FC<Props> = ({
  text,
  color = colors.yellow,
  onPress,
  isLoading = false,
}) => (
  <StyledButton color={color} onPress={onPress}>
    {isLoading ? (
      <ActivityIndicator animating={isLoading} />
    ) : (
      <StyledText>{text}</StyledText>
    )}
  </StyledButton>
);

export default Button;
