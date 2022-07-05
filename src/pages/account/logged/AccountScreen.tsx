import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {ErrorModal} from '../../../atomic/organisms';
import {Loader, Text, Link} from '../../../atomic/atoms';
import {Button} from '../../../atomic/molecules';

import {logout, setUser} from '../../../store/actions/user';
import {getUserRequest} from '../../../store/api/user';
import {tokenSelector, userSelector} from '../../../store/selectors/user';
import {GET_USER_ERROR, TOKEN_EXPIRED} from '../../../store/constants';

import getIcons from '../../../utils/icons';
import colors from '../../../assets/colors';
import {checkConnectivity} from '../../../utils/connectivity';

const Container = styled.View`
  margin-top: 30px;
`;
const CardContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
`;

const SpaceBorder = styled.View`
  background-color: ${colors.grey};
  width: 100%;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const HorizontalSpace = styled.View`
  margin-right: 10px;
`;
const Space = styled.View`
  margin-top: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.View`
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
const MainContainer = styled.View`
  margin-top: 30px;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

function AccountScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getData = useCallback(() => {
    setLoading(true);
    getUserRequest(token).then(data => {
      setLoading(false);
      if (data === GET_USER_ERROR) {
        setShowErrorModal(true);
      } else if (data === TOKEN_EXPIRED) {
        dispatch(logout());
      } else {
        dispatch(setUser(data));
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

  const handleEdit = () => {
    navigation.navigate('EditAccount');
  };

  const handleOrders = () => {
    navigation.navigate('Orders');
  };

  const handleMyEvents = () => {
    navigation.navigate('MyEvents');
  };

  const handleEditPassword = () => {
    navigation.navigate('EditPassword');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}],
    });
  };

  if (isLoading || !user) {
    return <Loader />;
  }

  const fidelityPoints =
    (user.loyaltyPoints ? user.loyaltyPoints.toString() : '0') +
    t('account.fidelity');

  const phone = user.phone ? user.phone : t('account.unknown');

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
        <Icon>{getIcons('account', colors.yellow, 100)}</Icon>
        <MainContainer>
          <CardContainer>
            <Text content={user.firstName + ' ' + user.lastName} size={20} />
            <Row>
              {getIcons('email', colors.grey, 18)}
              <HorizontalSpace />
              <Text content={user.email} size={20} />
            </Row>
            <Row>
              {getIcons('phone', colors.grey, 18)}
              <HorizontalSpace />
              <Text content={phone} size={20} />
            </Row>
            <SpaceBorder />
            <Row>
              {getIcons('crown', colors.yellow, 22)}
              <HorizontalSpace />
              <Text content={fidelityPoints} size={20} />
            </Row>
          </CardContainer>
          <Container>
            <Button text={t('account.orders')} onPress={handleOrders} />
            <Space />
            <Button text={t('account.myEvents')} onPress={handleMyEvents} />
            <Space />
            <Button
              text={t('account.editPassword')}
              onPress={handleEditPassword}
            />
            <Space />
            <Button text={t('account.edit')} onPress={handleEdit} />
            <Space />
            <Button text={t('account.logout')} onPress={handleLogout} />
          </Container>
        </MainContainer>
        <Link
          onPress={() => navigation.navigate('Common', {screen: 'CGU'})}
          content={t('cgu.title')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccountScreen;
