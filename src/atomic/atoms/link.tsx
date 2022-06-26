import * as React from 'react';
import styled from 'styled-components';

const Content = styled.Text`
  text-decoration: underline;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

interface Props {
  content: string;
  onPress: () => void;
}

const Error: React.FC<Props> = ({content, onPress}) => (
  <Content onPress={onPress}>{content}</Content>
);

export default Error;
