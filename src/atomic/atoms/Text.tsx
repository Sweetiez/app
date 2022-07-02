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
  textAlign?: string;
}

const StyledText = styled.Text<{
  size;
  color;
  textTransform;
  textDecoration;
  textAlign;
}>`
  font-family: Pompiere-Regular;
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
  text-decoration: ${({textDecoration}) => textDecoration};
  text-transform: ${({textTransform}) => textTransform};
  text-align: ${({textAlign}) => textAlign};
`;

const Text: React.FC<Props> = ({
  content,
  numberOfLines = undefined,
  size = 12,
  color = colors.black,
  textDecoration = 'none',
  textTransform = 'none',
  textAlign = 'left',
}) => (
  <StyledText
    numberOfLines={numberOfLines}
    size={size}
    color={color}
    textDecoration={textDecoration}
    textAlign={textAlign}
    textTransform={textTransform}>
    {content}
  </StyledText>
);

export default Text;
