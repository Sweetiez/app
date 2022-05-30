import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';

import {Title} from './../atomic/atoms';
import {Item} from './../atomic/organisms';
import styled from 'styled-components';
import {updateShop} from '../store/actions/shop';
import productSelector from '../store/selectors/shop';
import {getPublishedProducts} from '../store/api/shop';
import {PRODUCT_ERROR} from '../store/constants';
import Loader from '../atomic/atoms/loader';

const Items = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
function ShopScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const shop = useSelector(productSelector);
  const [isLoading, setLoading] = useState<boolean>(false);

  // TODO loader !

  useEffect(() => {
    setLoading(true);
    getPublishedProducts().then(products => {
      setLoading(false);
      if (products === PRODUCT_ERROR) {
        // TODO display error modal
      } else {
        dispatch(updateShop(products));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
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
