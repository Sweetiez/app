import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

interface Props {
  content: string;
  numberOfLines: number;
  size: string;
  color?: string;
}

const StyledText = styled.Text<{size; color}>`
  font-family: Pompiere-Regular;
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
`;

const Text: React.FC<Props> = ({
  content,
  numberOfLines = undefined,
  size = 12,
  color = colors.black,
}) => (
  <StyledText numberOfLines={numberOfLines} size={size} color={color}>
    {content}
  </StyledText>
);

export default Text;
