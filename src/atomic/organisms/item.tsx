import React from 'react';
import styled from 'styled-components';
import {Title, Text} from '../atoms';
import {Stars} from '../molecules';
import ProductCardModel from '../../model/product-card-model';

interface Props {
  product: ProductCardModel;
  navigation: any;
}

const Content = styled.View`
  padding: 5px;
  height: 80px;
`;
const Bottom = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Description = styled(Text)``;
const Price = styled(Text)``;
const StyledImage = styled.Image`
  width: 100%;
  height: 150px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const Container = styled.TouchableOpacity`
  border-radius: 10px;
  width: 47%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
`;

const Item: React.FC<Props> = ({product, navigation}) => {
  const {name, description, images, rating, price} = product;

  return (
    <Container
      onPress={() => navigation.navigate('Details', {product: product})}>
      <StyledImage source={{uri: images[0]}} />
      <Content>
        <Title title={name} />
        <Description numberOfLines={3} content={description} />
      </Content>
      <Bottom>
        <Price content={price + '€'} size={15} />
        <Stars rating={rating} />
      </Bottom>
    </Container>
  );
};

export default Item;
