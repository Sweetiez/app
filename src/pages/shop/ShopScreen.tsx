import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components';

import {Title, Loader} from '../../atomic/atoms';
import {Item, ErrorModal, FiltersModal} from '../../atomic/organisms';
import {Filters} from '../../atomic/molecules';

import {updateShop} from '../../store/actions/shop';
import productSelector from '../../store/selectors/shop';
import {getPublishedProducts} from '../../store/api/shop';
import {GET_USER_ERROR, PRODUCT_ERROR} from '../../store/constants';
import {getUserRequest} from '../../store/api/user';
import {setUser} from '../../store/actions/user';
import {tokenSelector, userSelector} from '../../store/selectors/user';
import {checkConnectivity} from '../../utils/connectivity';
import {FilterModel} from '../../model';

const CenteredText = styled(Text)`
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

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
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterModel>([]);

  const minRating = 0;
  const maxRating = 5;
  const minPrice = 0;
  const maxPrice = 50;

  const filteredProducts = useMemo(() => {
    if (!shop) {
      return [];
    }
    let newData = [...shop];
    if (filters.ratings) {
      if (
        minRating === filters.ratings[0] &&
        maxRating === filters.ratings[1]
      ) {
        delete filters.ratings;
      } else {
        newData = newData.filter(product => {
          return !!(
            product.evaluation &&
            filters.ratings &&
            product.evaluation.mark >= filters.ratings[0] &&
            product.evaluation.mark <= filters.ratings[1]
          );
        });
      }
    }
    if (filters.price) {
      if (minPrice === filters.price[0] && maxPrice === filters.price[1]) {
        delete filters.price;
      } else {
        newData = newData.filter(product => {
          return !!(
            product.price &&
            filters.price &&
            product.price >= filters.price[0] &&
            product.price <= filters.price[1]
          );
        });
      }
    }
    if (filters.category && filters.category.length > 0) {
      newData = newData.filter(product => {
        return !!(
          product.flavor &&
          filters.category &&
          filters.category.includes(product.flavor)
        );
      });
    } else {
      delete filters.category;
    }
    return newData;
  }, [filters, shop]);

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

  let filterLength = 0;
  if (filters.ratings) {
    filterLength++;
  }
  if (filters.price) {
    filterLength++;
  }
  if (filters.category) {
    filterLength++;
  }
  if (filters.allergen) {
    filterLength++;
  }

  console.log(shop);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
      <FiltersModal
        show={showFiltersModal}
        setShow={setShowFiltersModal}
        setFilters={setFilters}
        filters={filters}
      />
      <Title title={t('shop.title')} />
      <Filters
        length={filterLength}
        onPress={() => setShowFiltersModal(true)}
      />
      <Items>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Item key={product.id} product={product} navigation={navigation} />
          ))
        ) : (
          <CenteredText>{t('shop.noProducts')}</CenteredText>
        )}
      </Items>
    </ScrollView>
  );
}

export default ShopScreen;
