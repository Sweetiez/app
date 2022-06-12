import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {Title, Back, Loader} from '../../../atomic/atoms';
import {Order} from '../../../atomic/organisms';

import {ProductCard} from '../../../model';
import colors from '../../../assets/colors';
import getIcons from '../../../utils/icons';
import {checkConnectivity} from '../../../utils/connectivity';

import {tokenSelector} from '../../../store/selectors/user';
import {GET_ORDERS_ERROR} from '../../../store/constants';
import {setOrders} from '../../../store/actions/orders';
import {ordersSelector} from '../../../store/selectors/orders';
import {getOrdersRequest} from '../../../store/api/orders';

interface Props {
  product: ProductCard;
}
const Content = styled.View`
  padding: 5px;
  margin-top: 30px;
`;
const Icon = styled.View`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const OrdersScreen: React.FC<Props> = ({navigation}) => {
  const {t} = useTranslation();
  const token = useSelector(tokenSelector);
  const orders = useSelector(ordersSelector);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getData = useCallback(() => {
    setLoading(true);
    getOrdersRequest(token).then(data => {
      setLoading(false);
      if (data === GET_ORDERS_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(setOrders(data));
      }
    });
  }, [dispatch, token]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        getData();
      }
    });
  }, [getData, showErrorModal]);

  useEffect(() => {
    getData();
  }, [getData, dispatch, token]);

  if (isLoading || !orders) {
    return <Loader />;
  }

  let content;

  if (orders.length === 0) {
    content = (
      <Container>
        <Title title={t('orders.empty')} size={40} />
      </Container>
    );
  } else {
    content = (
      <Content>
        {orders.map(order => (
          <Order order={order} />
        ))}
      </Content>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
        <Title title={t('orders.title')} />
        <Icon>{getIcons('orders', colors.yellow, 80)}</Icon>
        {content}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
