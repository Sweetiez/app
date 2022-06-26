import * as React from 'react';
import {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from '../../atomic/atoms';
import {Input} from '../../atomic/molecules';
import styled from 'styled-components';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {Back, Button, Error} from '../../atomic/atoms';
import {validateEmail} from '../../utils/validator';

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
  const {t} = useTranslation();

  const forgotPassword = () => {
    if (validate()) {
      // TODO api call
      setLoading(!isLoading);
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
        <Back navigation={navigation} />
        <Title title={t('forgotPassword.title')} />
        <Form>
          <Icon>{getIcons('interrogation', colors.yellow, 100)}</Icon>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder={t('form.emailPlaceholder')}
            keyboardType="email-address"
          />
          {error && <Error content={error} />}
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
