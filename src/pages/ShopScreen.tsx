import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {fakeProducts} from '../data/items';
import {Title} from './../atomic/atoms';
import {Item} from './../atomic/organisms';
import styled from 'styled-components';

const Items = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
function ShopScreen({navigation}) {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('shop.title')} />
        <Items>
          {fakeProducts.map(product => (
            <Item key={product.id} product={product} navigation={navigation} />
          ))}
        </Items>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ShopScreen;
