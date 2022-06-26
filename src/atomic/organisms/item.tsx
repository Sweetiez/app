import * as React from 'react';
import styled from 'styled-components';
import {Title, Text} from '../atoms';
import {Stars} from '../molecules';
import {ProductCard} from '../../model';
import {useTranslation} from 'react-i18next';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import Badge from '../atoms/badge';

interface Props {
  product: ProductCard;
  navigation: any;
  isTray: boolean;
}

const Content = styled.View`
  padding: 5px;
  height: 80px;
`;
const NoImage = styled.View`
  margin: auto;
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
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Item: React.FC<Props> = ({product, navigation, isTray}) => {
  const {name, description, images, rating, price, id, unitPerPackage} =
    product;
  const {t} = useTranslation();
  return (
    <Container
      onPress={() =>
        navigation.navigate('Details', {productId: product.id, isTray: isTray})
      }>
      {images && images.length > 0 && images[0] !== '' ? (
        <StyledImage source={{uri: images[0]}} />
      ) : (
        <NoImage>{getIcons('noImage', colors.yellow, 100)}</NoImage>
      )}
      <Content>
        <Row>
          <Title title={name} size={22} />
          {isTray && unitPerPackage ? (
            <></>
          ) : (
            <Badge text={unitPerPackage.toString()} />
          )}
        </Row>

        <Description numberOfLines={3} content={description} />
      </Content>
      <Bottom>
        <Price content={price + t('common.euros')} size={15} />
        <Stars rating={rating} size={20} itemId={id} />
      </Bottom>
    </Container>
  );
};

export default Item;
