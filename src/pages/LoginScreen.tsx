import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from './../atomic/atoms';
import {Input} from './../atomic/molecules';
import styled from 'styled-components';
import getIcons from '../utils/icons';
import colors from '../assets/colors';
import {Button} from '../atomic/atoms';

const Form = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;
const Icon = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

function LoginScreen({navigation}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {t} = useTranslation();

  const signIn = () => {
    // todo validate then call if no error
    setisLoading(!isLoading);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('login.title')} />
        <Form>
          <Icon>{getIcons('account', colors.yellow, () => {}, 100)}</Icon>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder={t('login.emailPlaceholder')}
            keyboardType="email-address"
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder={t('login.passwordPlaceholder')}
            secureTextEntry={true}
          />
          <Button
            text={t('login.signIn')}
            onPress={signIn}
            isLoading={isLoading}
          />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
