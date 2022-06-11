import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title, Loader, Text, Link} from '../../../atomic/atoms';
import styled from 'styled-components';
import {Button} from '../../../atomic/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {logout, setUser} from '../../../store/actions/user';
import {getUserRequest} from '../../../store/api/user';
import {tokenSelector, userSelector} from '../../../store/selectors/user';
import {GET_USER_ERROR} from '../../../store/constants';
import getIcons from '../../../utils/icons';
import colors from '../../../assets/colors';

const Container = styled.View`
  margin-top: 30px;
`;
const Space = styled.View`
  margin-top: 10px;
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

  const handleEdit = () => {
    navigation.navigate('EditAccount');
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

  // TODO insert fidelity points

  const phone = user.phone ? user.phone : t('account.unknown');

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('account.title') + user.firstName} />
        <Icon>{getIcons('account', colors.yellow, 100)}</Icon>
        <MainContainer>
          <Text content={t('account.firstname') + user.firstName} size={20} />
          <Text content={t('account.lastname') + user.lastName} size={20} />
          <Text content={t('account.email') + user.email} size={20} />
          <Text content={t('account.phone') + phone} size={20} />

          <Container>
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
