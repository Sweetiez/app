import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

import {Title, Loader} from '../../atomic/atoms';
import {Item, ErrorModal} from '../../atomic/organisms';

import {updateShop} from '../../store/actions/shop';
import productSelector from '../../store/selectors/shop';
import {getPublishedProducts} from '../../store/api/shop';
import {GET_USER_ERROR, PRODUCT_ERROR} from '../../store/constants';
import {getUserRequest} from '../../store/api/user';
import {setUser} from '../../store/actions/user';
import {tokenSelector, userSelector} from '../../store/selectors/user';
import {checkConnectivity} from '../../utils/connectivity';

const Items = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
function ShopScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const shop = useSelector(productSelector);
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getUserData = useCallback(() => {
    if (!user && token) {
      getUserRequest(token).then(data => {
        setLoading(false);
        if (data === GET_USER_ERROR && !showErrorModal) {
          setShowErrorModal(true);
        } else if (data !== GET_USER_ERROR) {
          dispatch(setUser(data));
        }
      });
    }
  }, [dispatch, showErrorModal, token, user]);

  const getProductData = useCallback(() => {
    setLoading(true);
    getPublishedProducts().then(products => {
      setLoading(false);
      if (products === PRODUCT_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(updateShop(products));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        // reload data if connectivity is retrieved
        getUserData();
        getProductData();
      }
    });
  }, [getProductData, getUserData, showErrorModal]);

  useEffect(() => {
    getUserData();
  }, [getUserData, dispatch, token, user]);

  useEffect(() => {
    getProductData();
  }, [dispatch, getProductData]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
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
