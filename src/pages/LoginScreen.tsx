import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from './../atomic/atoms';
import {Input} from './../atomic/molecules';
import styled from 'styled-components';
import getIcons from '../utils/icons';
import colors from '../assets/colors';
import {Button} from '../atomic/atoms';
import {validateEmail, validatePassword} from '../utils/validator';
import {loginRequest} from '../store/api/user';
import {useDispatch} from 'react-redux';
import {login} from '../store/actions/user';
import {LOGIN_ERROR} from '../store/constants';

const Form = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;
const Error = styled.Text`
  color: ${colors.red};
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;
const Icon = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;
const Link = styled.Text`
  text-decoration: underline;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;
const Register = styled.Text`
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

function LoginScreen({navigation}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSecureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const signIn = () => {
    if (validate()) {
      setLoading(true);
      loginRequest({username: email, password}).then(result => {
        setLoading(false);
        if (result === LOGIN_ERROR) {
          setError(t('login.loginError'));
        } else {
          dispatch(login(result));
          navigation.reset({
            index: 1,
            routes: [{name: 'Home'}],
          });
        }
      });
    }
  };

  const validate = () => {
    if (email === '' || password === '') {
      setError(t('form.blankInputs'));
      return false;
    } else if (!validateEmail(email)) {
      setError(t('form.incorrectEmail'));
      return false;
    } else if (!validatePassword(password)) {
      setError(t('form.incorrectPassword'));
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('login.title')} />
        <Form>
          <Icon>{getIcons('account', colors.yellow, 100)}</Icon>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder={t('form.emailPlaceholder')}
            keyboardType="email-address"
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder={t('form.passwordPlaceholder')}
            secureTextEntry={isSecureTextEntry}
            rightIconName="eye"
            rightIconOnPress={() => setSecureTextEntry(!isSecureTextEntry)}
          />
          {error && <Error>{error}</Error>}
          <Button
            text={t('login.signIn')}
            onPress={signIn}
            isLoading={isLoading}
          />
        </Form>
        <Link onPress={() => navigation.navigate('ForgotPassword')}>
          {t('login.forgotPassword')}
        </Link>
        <Register>
          {t('login.dontHaveAccount')}
          <Link onPress={() => navigation.navigate('Register')}>
            {t('login.register')}
          </Link>
        </Register>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
