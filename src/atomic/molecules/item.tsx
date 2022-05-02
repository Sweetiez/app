import React from 'react';
import styled from 'styled-components';
import {Title, Text} from './../atoms';

interface Props {
  title: string;
  description: string;
  image: string;
}

const Content = styled.View`
  padding: 5px;
`;
const Description = styled(Text)``;
const StyledImage = styled.Image`
  width: 100%;
  height: 100px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const Container = styled.View`
  border-radius: 10px;
  width: 47%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
  height: 250px;
`;

const Item: React.FC<Props> = ({title, description, image}) => {
  return (
    <Container>
      <StyledImage source={{uri: image}} />
      <Content>
        <Title title={title} />
        <Description numberOfLines={5} content={description} />
      </Content>
    </Container>
  );
};

export default Item;
