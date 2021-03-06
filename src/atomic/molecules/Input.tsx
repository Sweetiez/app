import * as React from 'react';
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
  multiline?: boolean;
  numberOfLines?: number;
  initialValue?: string;
}

const StyledInput = styled.TextInput<{numberOfLines}>`
  flex-direction: row;
  padding: 5px 15px;
  border: solid 1px ${colors.yellow};
  border-radius: 15px;
  margin-bottom: 10px;
  ${({numberOfLines}) =>
    numberOfLines ? 'height:' + numberOfLines * 10 + 'px' : null};
`;

const StyledIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 5px;
`;
const Input: React.FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  secureTextEntry = false,
  rightIconName,
  rightIconOnPress,
  multiline = false,
  numberOfLines = undefined,
  initialValue,
}) => {
  return (
    <View>
      <StyledInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        defaultValue={initialValue}
        autoCapitalize="none"
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
