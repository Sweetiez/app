import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from './../atomic/atoms';
import styled from 'styled-components';

const CartContainer = styled.View``;

function CartScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('cart.title')} />
        <CartContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default CartScreen;
