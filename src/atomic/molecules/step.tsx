import React from 'react';
import styled from 'styled-components';
import {Text} from '../atoms';
import colors from '../../assets/colors';

interface Props {
  count: number;
  text: string;
}

const Container = styled.View`
  flex-direction: row;
  padding-right: 20px;
  margin-bottom: 5px;
`;
const Step: React.FC<Props> = ({text, count}) => {
  return (
    <Container>
      <Text content={count + ' . '} size={16} color={colors.yellow} />
      <Text content={text} size={16} />
    </Container>
  );
};

export default Step;
