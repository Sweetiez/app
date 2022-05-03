import React from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
  numberOfLines: number;
  size: string;
}

const StyledText = styled.Text<{size}>`
  font-family: Pompiere-Regular;
  color: black;
  font-size: ${({size}) => size}px;
`;

const Text: React.FC<Props> = ({
  content,
  numberOfLines = undefined,
  size = 12,
}) => (
  <StyledText numberOfLines={numberOfLines} size={size}>
    {content}
  </StyledText>
);

export default Text;
