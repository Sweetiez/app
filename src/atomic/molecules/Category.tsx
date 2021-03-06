import * as React from 'react';
import {Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components';

interface Props {
  isChecked: boolean;
  label: string;
  setChecked: () => void;
}

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;
const Space = styled.View`
  width: 10px;
`;

const Category: React.FC<Props> = ({isChecked, setChecked, label}) => {
  return (
    <Container>
      {/*@ts-ignore because the lib hasn't properly typed his component*/}
      <CheckBox value={isChecked} onValueChange={setChecked} />
      <Space />
      <Text>{label}</Text>
    </Container>
  );
};

export default Category;
