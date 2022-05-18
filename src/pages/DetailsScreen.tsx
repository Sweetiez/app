import React, {useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {SliderBox} from 'react-native-image-slider-box';
import {Text, Title, Back} from './../atomic/atoms';
import ProductCardModel from '../model/product-card-model';
import {Stars, Button} from '../atomic/molecules';
import {Comment, AddToBasket} from '../atomic/organisms';
import {useTranslation} from 'react-i18next';
import {addItemToCart} from '../store/actions/cart';
import {useDispatch} from 'react-redux';

interface Props {
  product: ProductCardModel;
}
const StyledSliderBox = styled(SliderBox)`
  width: 100%;
  height: 200px;
`;
const Description = styled(Text)``;
const Comments = styled.View`
  margin-top: 10px;
`;
const Container = styled.View`
  padding-right: 5px;
  padding-left: 5px;
`;
const CommentButton = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;
const Price = styled.View`
  margin: 10px auto 0;
`;
const StarsContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const {name, description, images, rating, price, comments} =
    route.params.product;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(0);

  const onCommentPress = () => {
    // TODO
  };

  const addToBasket = () => {
    dispatch(addItemToCart(route.params.product, quantity));
    setQuantity(0);
  };

  // TODO paginate or lazy list for comment list. Do an organism 'comments' managing that?

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} />
        <StyledSliderBox images={images} />
        <Container>
          <Title title={name} size={30} />
          <StarsContainer>
            <Stars rating={rating} />
          </StarsContainer>
          <AddToBasket
            addToBasket={addToBasket}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Description content={description} size={20} />
          <Price>
            <Text content={price + '€'} size={22} />
          </Price>
        </Container>
        <Comments>
          <CommentButton>
            <Button
              text={t('details.comment')}
              onPress={onCommentPress}
              iconName="pen"
            />
          </CommentButton>
          {comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </Comments>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
