import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  size?: number;
}

const StyledText = styled.Text<{size}>`
  font-size: ${({size}) => size}px;
  text-align: center;
  font-family: Pompiere-Regular;
  color: black;
`;

const Title: React.FC<Props> = ({title, size = 32}) => (
  <StyledText size={size}>{title}</StyledText>
);

export default Title;
