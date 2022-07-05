import * as React from 'react';
import {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';

import {Input} from '../../atomic/molecules';
import {Button, Error} from '../../atomic/atoms';

import getIcons from '../../utils/icons';
import {validateEmail} from '../../utils/validator';
import colors from '../../assets/colors';

import {RESET_PASSWORD_ERROR} from '../../store/constants';
import {resetPasswordRequest} from '../../store/api/user';

const Success = styled.Text`
  color: ${colors.green};
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;

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
const Link = styled.Text`
  text-decoration: underline;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

function LoginScreen({navigation}) {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const {t} = useTranslation();

  const forgotPassword = () => {
    setSuccess(false);
    if (validate()) {
      setLoading(true);
      resetPasswordRequest({email}).then(result => {
        setLoading(false);
        if (result === RESET_PASSWORD_ERROR) {
          setError(t('forgotPassword.error'));
        } else {
          setSuccess(true);
        }
      });
    }
  };

  const validate = () => {
    if (email === '') {
      setError(t('form.blankInputs'));
      return false;
    } else if (!validateEmail(email)) {
      setError(t('form.incorrectEmail'));
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Form>
          <Icon>{getIcons('interrogation', colors.yellow, 100)}</Icon>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder={t('form.emailPlaceholder')}
            keyboardType="email-address"
          />
          {error && <Error content={error} />}
          {success && <Success>{t('forgotPassword.success')}</Success>}
          <Button
            text={t('forgotPassword.validate')}
            onPress={forgotPassword}
            isLoading={isLoading}
          />
        </Form>
        <Link onPress={() => navigation.navigate('Login')}>
          {t('forgotPassword.login')}
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
