import React from 'react';
import colors from '../../assets/colors';
import styled from 'styled-components';

const Content = styled.Text`
  color: ${colors.red};
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;

interface Props {
  content: string;
}

const Error: React.FC<Props> = ({content}) => <Content>{content}</Content>;

export default Error;
