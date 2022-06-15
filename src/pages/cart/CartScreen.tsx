import React from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {Title} from '../../atomic/atoms';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {cartSelector, totalPriceSelector} from '../../store/selectors/cart';
import {CartItem} from '../../atomic/organisms';
import {Button} from '../../atomic/atoms';

const CartContainer = styled.View`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled(Title)`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

function CartScreen({navigation}) {
  const {t} = useTranslation();
  const cart = useSelector(cartSelector);
  const totalPrice = useSelector(totalPriceSelector);

  const checkout = () => {
    navigation.navigate('CartRecap');
  };

  if (cart.length === 0) {
    return (
      <>
        <Container>
          <Title title={t('cart.empty')} size={40} />
        </Container>
      </>
    );
  }

  return (
    <StyledSafeAreaView>
      <StyledTitle title={t('cart.title')} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <CartContainer>
          {cart.map(cartItem => (
            <CartItem cartItem={cartItem} key={cartItem.item.id} />
          ))}
        </CartContainer>
      </ScrollView>
      <CheckoutButtonView>
        <CheckoutButton
          text={t('cart.checkout') + totalPrice + t('common.euros')}
          onPress={checkout}
        />
      </CheckoutButtonView>
    </StyledSafeAreaView>
  );
}

export default CartScreen;
