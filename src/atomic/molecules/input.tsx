import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

interface Props {
  onChangeText: (value) => void;
  value: string;
  placeholder: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const StyledInput = styled.TextInput`
  flex-direction: row;
  padding: 10px 15px;
  border: solid 1px ${colors.yellow};
  border-radius: 15px;
  margin-bottom: 10px;
`;
const Input: React.FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  secureTextEntry = false,
}) => {
  return (
    <StyledInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
