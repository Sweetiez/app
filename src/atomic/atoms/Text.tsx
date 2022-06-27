import * as React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

interface Props {
  content: string;
  numberOfLines?: number;
  size?: number;
  color?: string;
  textDecoration?: string;
  textTransform?: string;
  center?: boolean;
}

const StyledText = styled.Text<{
  size;
  color;
  textTransform;
  textDecoration;
  center;
}>`
  font-family: Pompiere-Regular;
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
  text-decoration: ${({textDecoration}) => textDecoration};
  text-transform: ${({textTransform}) => textTransform};
  text-align: ${({center}) => (center ? 'center' : 'left')};
`;

const Text: React.FC<Props> = ({
  content,
  numberOfLines = undefined,
  size = 12,
  color = colors.black,
  textDecoration = 'none',
  textTransform = 'none',
  center = false,
}) => (
  <StyledText
    numberOfLines={numberOfLines}
    size={size}
    color={color}
    textDecoration={textDecoration}
    center={center}
    textTransform={textTransform}>
    {content}
  </StyledText>
);

export default Text;
