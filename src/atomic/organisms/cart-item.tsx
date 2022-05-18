import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {Text as SpecialText} from '../atoms';
import CartItemModel from '../../model/cart-item-model';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../store/actions/cart';
import {useTranslation} from 'react-i18next';

interface Props {
  cartItem: CartItemModel;
}

const Content = styled.View`
  flex: 1;
`;
const Container = styled.View`
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
  align-items: center;
`;
const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-right: 10px;
`;
const Trash = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 0;
  z-index: 1000;
`;

const Bold = styled.Text`
  font-weight: bold;
`;
const Space = styled.View`
  height: 10px;
`;

const CartItem: React.FC<Props> = ({cartItem}) => {
  const {quantity, item} = cartItem;
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const removeItem = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <Container>
      <StyledImage source={{uri: item.images[0]}} />
      <Content>
        <SpecialText content={item.name} size={22} />
        <Space />
        <Text>
          {t('cart.quantity')}
          {quantity}
        </Text>
        <Space />
        <Bold>
          {item.price * quantity}
          {t('common.euros')}
        </Bold>
        <Trash onPress={removeItem}>{getIcons('trash', colors.red, 20)}</Trash>
      </Content>
    </Container>
  );
};

export default CartItem;
