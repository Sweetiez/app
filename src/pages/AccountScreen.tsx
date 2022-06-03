import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title, Loader} from './../atomic/atoms';
import styled from 'styled-components';
import {Button} from '../atomic/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {logout, setUser} from '../store/actions/user';
import {getUserRequest} from '../store/api/user';
import {tokenSelector, userSelector} from '../store/selectors/user';
import {GET_USER_ERROR} from '../store/constants';
import {Text} from '../atomic/atoms';

const Container = styled.View``;

function AccountScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getUserRequest(token).then(data => {
      setLoading(false);
      if (data === GET_USER_ERROR) {
        // todo display error modal
      } else {
        dispatch(setUser(data));
      }
    });
  }, [dispatch, token]);

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

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('account.title')} />
        <Text content={user.firstName} size={12} />
        <Text content={user.lastName} size={12} />
        <Text content={user.email} size={12} />
        <Container>
          <Button text={t('account.logout')} onPress={handleLogout} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccountScreen;
