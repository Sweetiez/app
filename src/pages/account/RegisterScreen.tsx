import * as React from 'react';
import {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Error, Button, Link} from '../../atomic/atoms';
import {Input} from '../../atomic/molecules';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../../utils/validator';
import {registerRequest} from '../../store/api/user';
import {REGISTER_OK} from '../../store/constants';
import {RegisterRequest} from '../../model';

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
  const [phone, setPhone] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSecureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isSecureTextEntryConfirm, setSecureTextEntryConfirm] =
    useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {t} = useTranslation();

  const register = () => {
    if (validate()) {
      setLoading(true);
      const data: RegisterRequest = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        phone: phone,
      };
      registerRequest(data).then(result => {
        setLoading(false);
        if (result === REGISTER_OK) {
          navigation.navigate('Login');
        } else {
          setError(t('register.registerError'));
        }
      });
    }
  };

  const validate = () => {
    if (
      email === '' ||
      password === '' ||
      passwordConfirm === '' ||
      firstname === '' ||
      lastname === ''
    ) {
      setError(t('form.blankInputsWithPassword'));
      return false;
    } else if (!validateName(firstname)) {
      setError(t('form.incorrectFirstname'));
      return false;
    } else if (!validateName(lastname)) {
      setError(t('form.incorrectLastname'));
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
    if (phone !== '' && !validatePhone(phone)) {
      setError(t('form.incorrectPhone'));
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
          <Input
            onChangeText={setPhone}
            value={phone}
            placeholder={t('form.phonePlaceholder')}
            keyboardType="phone-pad"
          />
          {error && <Error content={error} />}
          <Button
            text={t('register.register')}
            onPress={register}
            isLoading={isLoading}
          />
        </Form>
        <Register>
          {t('register.alreadyHaveAccount')}
          <Link
            onPress={() => navigation.navigate('Login')}
            content={t('register.login')}
          />
        </Register>
        <Link
          content={t('cgu.title')}
          onPress={() => navigation.navigate('Common', {screen: 'CGU'})}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
