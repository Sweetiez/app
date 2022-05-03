import React from 'react';

// @ts-ignore
import ArrowBack from './../assets/icons/arrow-back.svg';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {SliderBox} from 'react-native-image-slider-box';
import {Text, Title} from './../atomic/atoms';
import ProductCardModel from '../model/product-card-model';
import {Stars} from '../atomic/molecules';

interface Props {
  product: ProductCardModel;
}
const StyledSliderBox = styled(SliderBox)`
  width: 100%;
  height: 200px;
`;
const Description = styled(Text)``;
const Container = styled.View`
  padding-right: 5px;
  padding-left: 5px;
`;
const Price = styled(Text)``;
const StarsContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
const Back = styled(ArrowBack)`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 10;
`;

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {name, description, images, rating, price} = route.params.product;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back color={'#fff'} onPress={() => navigation.goBack()} />
        <StyledSliderBox images={images} />
        <Container>
          <Title title={name} size={30} />
          <StarsContainer>
            <Stars rating={rating} />
          </StarsContainer>
          <Description content={description} size={20} />
          <Price content={price + '€'} size={15} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
