import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import colors from '../../assets/colors';

interface Props {
  text: string;
}

const StyledText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-family: Pompiere-Regular;
`;
const Container = styled.View`
  background-color: ${colors.yellow};
  text-align: center;
  border-radius: 100px;
  margin: auto;
  padding: 2px 8px 2px 8px;
`;
const Badge: React.FC<Props> = ({text}) => (
  <Container>
    <StyledText>{'x' + text}</StyledText>
  </Container>
);

export default Badge;
