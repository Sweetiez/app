import React, {useEffect, useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {SliderBox} from 'react-native-image-slider-box';
import {Text, Title, Back, Loader} from '../../atomic/atoms';
import {ProductCard} from '../../model';
import {Stars, Button} from '../../atomic/molecules';
import {Comment, AddToBasket} from '../../atomic/organisms';
import {useTranslation} from 'react-i18next';
import {addItemToCart} from '../../store/actions/cart';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/api/shop';
import colors from '../../assets/colors';
import getIcons from '../../utils/icons';
import {tokenSelector} from '../../store/selectors/user';

interface Props {
  product: ProductCard;
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

const NoImage = styled.View`
  margin: auto;
`;

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const id = route.params.productId;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const [quantity, setQuantity] = useState<number>(0);
  const [product, setProduct] = useState<ProductCard>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getProduct(id).then(data => {
      setLoading(false);
      setProduct(data);
    });
  }, [id]);

  const onCommentPress = () => {
    navigation.navigate('Comment', {productId: id});
  };

  const addToBasket = () => {
    dispatch(addItemToCart(product, quantity));
    setQuantity(0);
  };

  // TODO paginate or lazy list for comment list. Do an organism 'comments' managing that?

  if (!product || isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} />
        {product.images &&
        product.images.length > 0 &&
        product.images[0] !== '' ? (
          <StyledSliderBox images={product.images} />
        ) : (
          <NoImage>{getIcons('noImage', colors.yellow, 100)}</NoImage>
        )}
        <Container>
          <Title title={product.name} size={30} />
          <StarsContainer>
            <Stars rating={product.rating} itemId={id} />
          </StarsContainer>
          <AddToBasket
            addToBasket={addToBasket}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Description content={product.description} size={20} />
          <Price>
            <Text content={product.price + '€'} size={22} />
          </Price>
        </Container>
        <Comments>
          {!!token && (
            <CommentButton>
              <Button
                text={t('details.comment')}
                onPress={onCommentPress}
                iconName="pen"
              />
            </CommentButton>
          )}

          {product.comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </Comments>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
