import React, {useEffect} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from './../atomic/atoms';
import styled from 'styled-components';
import {Button} from '../atomic/molecules';
import {useDispatch} from 'react-redux';
import {logout} from '../store/actions/user';

const Container = styled.View``;

function AccountScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO user fetch data
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}],
    });
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('account.title')} />
        <Container>
          <Button text={t('account.logout')} onPress={handleLogout} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccountScreen;
