import React, {useCallback, useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {SliderBox} from 'react-native-image-slider-box';

import {Text, Title, Back, Loader} from '../../atomic/atoms';
import {Stars, Button} from '../../atomic/molecules';
import {Comment, AddToBasket} from '../../atomic/organisms';

import {addItemToCart} from '../../store/actions/cart';
import {getProduct} from '../../store/api/shop';
import {tokenSelector} from '../../store/selectors/user';
import {PRODUCT_ERROR} from '../../store/constants';

import {ProductCard} from '../../model';
import colors from '../../assets/colors';
import getIcons from '../../utils/icons';
import {checkConnectivity} from '../../utils/connectivity';

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
const MainContainer = styled.View`
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
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0 10px;
`;
const StarsContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
const NoImage = styled.View`
  margin: auto;
`;
const Container = styled.View`
  margin-top: 10px;
`;
const ItemList = styled.View`
  flex-direction: row;
`;

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const id = route.params.productId;
  const isTray = route.params.isTray;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const [quantity, setQuantity] = useState<number>(0);
  const [product, setProduct] = useState<ProductCard>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getData = useCallback(() => {
    setLoading(true);
    getProduct(id, isTray).then(data => {
      setLoading(false);
      if (data !== PRODUCT_ERROR) {
        setProduct(data);
      } else if (!showErrorModal) {
        setShowErrorModal(true);
      }
    });
  }, [id, isTray, showErrorModal]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        getData();
      }
    });
  }, [getData, showErrorModal]);

  useEffect(() => {
    getData();
  }, [getData, id]);

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
        <MainContainer>
          <Title title={product.name} size={30} />
          {product.valuation.mark >= 1 ? (
            <StarsContainer>
              <Stars rating={product.valuation.mark} itemId={id} />
            </StarsContainer>
          ) : (
            <></>
          )}

          {isTray ? (
            <Price>
              <Text content={product.price + '€'} size={22} />
            </Price>
          ) : (
            <Price>
              <Text content={product.packagedPrice + '€'} size={22} />
              <Text
                content={t('details.info', {
                  quantity: product.unitPerPackage,
                  price: product.price,
                })}
                size={16}
              />
            </Price>
          )}
          <AddToBasket
            addToBasket={addToBasket}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Description content={product.description} size={20} />
          {isTray ? (
            <Container>
              <Text
                content={t('details.sweets')}
                size={24}
                textDecoration={'underline'}
              />
              {product.sweets &&
                product.sweets.map(sweet => (
                  <Text
                    content={sweet.sweet.name + ' x ' + sweet.quantity}
                    size={18}
                  />
                ))}
            </Container>
          ) : (
            <>
              <Container>
                <Text
                  content={t('details.ingredients')}
                  size={24}
                  textDecoration={'underline'}
                />
                <ItemList>
                  {product.ingredients &&
                    product.ingredients.map((ingredient, index) => (
                      <Text
                        content={(index ? ', ' : '') + ingredient}
                        size={18}
                        textTransform={'capitalize'}
                      />
                    ))}
                </ItemList>
              </Container>
            </>
          )}
          <Container>
            <Text
              content={t('details.diets')}
              size={24}
              textDecoration={'underline'}
            />
            <ItemList>
              {product.diets &&
                product.diets.map((diet, index) => (
                  <Text
                    content={(index ? ', ' : '') + diet}
                    size={18}
                    textTransform={'capitalize'}
                  />
                ))}
            </ItemList>
          </Container>
          <Container>
            <Text
              content={t('details.allergens')}
              size={24}
              textDecoration={'underline'}
            />
            <ItemList>
              {product.allergens &&
                product.allergens.map((allergen, index) => (
                  <Text
                    content={(index ? ', ' : '') + allergen}
                    size={18}
                    textTransform={'capitalize'}
                  />
                ))}
            </ItemList>
          </Container>
        </MainContainer>
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

          {product.comments &&
            product.comments.map(comment => <Comment comment={comment} />)}
        </Comments>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
