import React from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
  numberOfLines: number;
}

const StyledText = styled.Text`
  font-family: Pompiere-Regular;
  color: black;
`;

const Title: React.FC<Props> = ({content, numberOfLines}) => (
  <StyledText numberOfLines={numberOfLines}>{content}</StyledText>
);

export default Title;
