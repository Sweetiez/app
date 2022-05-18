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

function RegisterScreen({navigation}) {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSecureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isSecureTextEntryConfirm, setSecureTextEntryConfirm] =
    useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {t} = useTranslation();

  const register = () => {
    if (validate()) {
      // TODO api call
      setLoading(!isLoading);
    }
  };

  const validate = () => {
    // TODO
    if (
      email === '' ||
      password === '' ||
      passwordConfirm === '' ||
      firstname === '' ||
      lastname === ''
    ) {
      setError(t('form.blankInputs'));
      return false;
    } else if (!validateEmail(email)) {
      setError(t('form.incorrectEmail'));
      return false;
    } else if (
      !validatePassword(password) ||
      !validatePassword(passwordConfirm) ||
      password !== passwordConfirm
    ) {
      setError(t('form.incorrectPassword'));
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('register.title')} />
        <Form>
          <Icon>{getIcons('account', colors.yellow, 100)}</Icon>
          <Input
            onChangeText={setFirstname}
            value={firstname}
            placeholder={t('form.firstnamePlaceholder')}
          />
          <Input
            onChangeText={setLastname}
            value={lastname}
            placeholder={t('form.lastnamePlaceholder')}
          />
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
          <Input
            onChangeText={setPasswordConfirm}
            value={passwordConfirm}
            placeholder={t('form.passwordConfirmPlaceholder')}
            secureTextEntry={isSecureTextEntryConfirm}
            rightIconName="eye"
            rightIconOnPress={() =>
              setSecureTextEntryConfirm(!isSecureTextEntryConfirm)
            }
          />
          {error && <Error>{error}</Error>}
          <Button
            text={t('register.register')}
            onPress={register}
            isLoading={isLoading}
          />
        </Form>
        <Register>
          {t('register.alreadyHaveAccount')}
          <Link onPress={() => navigation.navigate('Login')}>
            {t('register.login')}
          </Link>
        </Register>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
