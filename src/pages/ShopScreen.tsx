import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';

import {fakeProducts} from '../data/items';
import {Title} from './../atomic/atoms';
import {Item} from './../atomic/organisms';
import styled from 'styled-components';
import {updateShop} from '../store/actions/shop';
import productSelector from '../store/selectors/shop';

const Items = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
function ShopScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const shop = useSelector(productSelector);

  useEffect(() => {
    dispatch(updateShop(fakeProducts)); // todo call api
  }, [dispatch]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Title title={t('shop.title')} />
      <Items>
        {shop.map(product => (
          <Item key={product.id} product={product} navigation={navigation} />
        ))}
      </Items>
    </ScrollView>
  );
}

export default ShopScreen;
