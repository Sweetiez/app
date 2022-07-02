import * as React from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

import {Loader, Text} from '../../atomic/atoms';
import {Item, ErrorModal, FiltersModal} from '../../atomic/organisms';
import {Filters} from '../../atomic/molecules';

import {updateSweetShop} from '../../store/actions/shop';
import {updateTrayShop} from '../../store/actions/shop';
import {sweetsSelector, traysSelector} from '../../store/selectors/shop';
import {getPublishedSweets, getPublishedTrays} from '../../store/api/shop';
import {
  GET_USER_ERROR,
  PRODUCT_ERROR,
  TOKEN_EXPIRED,
  TRAY_ERROR,
} from '../../store/constants';
import {getUserRequest} from '../../store/api/user';
import {logout, setUser} from '../../store/actions/user';
import {tokenSelector, userSelector} from '../../store/selectors/user';
import {checkConnectivity} from '../../utils/connectivity';
import {FilterModel} from '../../model';

const CenteredText = styled.View`
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

function ShopScreen({navigation, route}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const sweets = useSelector(sweetsSelector);
  const trays = useSelector(traysSelector);
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterModel>({});
  const isTrays = route.params.isTrays;

  const minRating = 0;
  const maxRating = 5;
  const minPrice = 0;
  const maxPrice = 50;

  const filteredProducts = useMemo(() => {
    const data = isTrays ? trays : sweets;
    if (!data) {
      return [];
    }
    let newData = [...data];
    if (filters.ratings) {
      if (
        minRating === filters.ratings[0] &&
        maxRating === filters.ratings[1]
      ) {
        delete filters.ratings;
      } else {
        newData = newData.filter(product => {
          return !!(
            product.rating &&
            filters.ratings &&
            product.rating >= filters.ratings[0] &&
            product.rating <= filters.ratings[1]
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
  }, [
    isTrays,
    trays,
    sweets,
    filters.ratings,
    filters.price,
    filters.category,
  ]);

  const getUserData = useCallback(() => {
    if (!user && token) {
      getUserRequest(token).then(data => {
        setLoading(false);
        if (data === GET_USER_ERROR && !showErrorModal) {
          setShowErrorModal(true);
        } else if (data === TOKEN_EXPIRED) {
          dispatch(logout());
        } else if (data !== GET_USER_ERROR) {
          dispatch(setUser(data));
        }
      });
    }
  }, [dispatch, showErrorModal, token, user]);

  const getSweetData = useCallback(() => {
    setLoading(true);
    getPublishedSweets().then(products => {
      setLoading(false);
      if (products === PRODUCT_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(updateSweetShop(products));
      }
    });
  }, [dispatch]);

  const getTrayData = useCallback(() => {
    setLoading(true);
    getPublishedTrays().then(traysData => {
      setLoading(false);
      if (traysData === TRAY_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(updateTrayShop(traysData));
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
        getSweetData();
        getTrayData();
      }
    });
  }, [getSweetData, getTrayData, getUserData, showErrorModal]);

  useEffect(() => {
    getUserData();
  }, [getUserData, dispatch, token, user]);

  useEffect(() => {
    getSweetData();
  }, [dispatch, getSweetData]);

  useEffect(() => {
    getTrayData();
  }, [dispatch, getTrayData]);

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

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
      <FiltersModal
        show={showFiltersModal}
        setShow={setShowFiltersModal}
        setFilters={setFilters}
        filters={filters}
      />
      <Filters
        length={filterLength}
        onPress={() => setShowFiltersModal(true)}
      />
      <Items>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Item
              key={product.id}
              product={product}
              navigation={navigation}
              isTray={isTrays}
            />
          ))
        ) : (
          <CenteredText>
            <Text content={t('shop.noProducts')} size={44} />
          </CenteredText>
        )}
      </Items>
    </ScrollView>
  );
}

export default ShopScreen;
