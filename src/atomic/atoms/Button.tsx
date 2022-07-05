import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import colors from '../../assets/colors';

interface Props {
  onPress: () => void;
  text: string;
  isLoading?: boolean;
  color?: string;
  disabled?: boolean;
}
const StyledButton = styled.TouchableOpacity<{color}>`
  background-color: ${({color}) => color};
  padding: 10px;
  border-radius: 15px;
  align-items: center;
  min-width: 80px;
`;

const StyledText = styled.Text`
  color: ${colors.white};
`;

const Button: React.FC<Props> = ({
  text,
  color,
  onPress,
  isLoading = false,
  disabled = false,
}) => (
  <StyledButton
    color={color ? color : isLoading || disabled ? colors.grey : colors.yellow}
    onPress={onPress}
    disabled={isLoading || disabled}>
    {isLoading ? (
      <ActivityIndicator animating={isLoading} color={colors.white} />
    ) : (
      <StyledText>{text}</StyledText>
    )}
  </StyledButton>
);

export default Button;
