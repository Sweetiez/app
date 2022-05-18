import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import getIcons from '../../utils/icons';
import {View} from 'react-native';

interface Props {
  onChangeText: (value) => void;
  value: string;
  placeholder: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
  rightIconName?: string;
  rightIconOnPress?: () => void;
}

const StyledInput = styled.TextInput`
  flex-direction: row;
  padding: 10px 15px;
  border: solid 1px ${colors.yellow};
  border-radius: 15px;
  margin-bottom: 10px;
`;

const StyledIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const Input: React.FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  secureTextEntry = false,
  rightIconName,
  rightIconOnPress,
}) => {
  return (
    <View>
      <StyledInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {rightIconName && (
        <StyledIcon onPress={rightIconOnPress}>
          {getIcons(rightIconName, colors.yellow, 20)}
        </StyledIcon>
      )}
    </View>
  );
};

export default Input;
