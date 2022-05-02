import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

const Title: React.FC<Props> = ({title}) => <StyledText>{title}</StyledText>;

export default Title;
