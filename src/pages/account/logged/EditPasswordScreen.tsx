import * as React from 'react';
import {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Error, Button} from '../../../atomic/atoms';
import styled from 'styled-components';
import {Input} from '../../../atomic/molecules';
import {useSelector} from 'react-redux';
import {tokenSelector, userSelector} from '../../../store/selectors/user';
import getIcons from '../../../utils/icons';
import colors from '../../../assets/colors';
import {validatePassword} from '../../../utils/validator';
import {updatePasswordRequest} from '../../../store/api/user';
import {UPDATE_PASSWORD_OK} from '../../../store/constants';

const Container = styled.View`
  margin-top: 30px;
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

function EditPasswordScreen({navigation}) {
  const {t} = useTranslation();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isSecureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isSecureTextEntryCurrent, setSecureTextEntryCurrent] =
    useState<boolean>(true);
  const [isSecureTextEntryConfirm, setSecureTextEntryConfirm] =
    useState<boolean>(true);

  const [error, setError] = useState<string>(undefined);

  const validate = () => {
    if (password === '' || passwordConfirm === '' || currentPassword === '') {
      setError(t('form.fillPasswords'));
      return false;
    } else if (
      !validatePassword(currentPassword) ||
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

  const handleSave = () => {
    if (validate()) {
      setLoading(true);
      const data = {
        email: user.email,
        currentPassword: currentPassword,
        newPassword: password,
      };
      updatePasswordRequest(data, token).then(result => {
        if (result === UPDATE_PASSWORD_OK) {
          navigation.navigate('Account');
        } else {
          setError(t('editAccount.error'));
        }
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Icon>{getIcons('edit', colors.yellow, 100)}</Icon>
        <MainContainer>
          <Input
            onChangeText={setCurrentPassword}
            value={currentPassword}
            placeholder={t('form.currentPasswordPlaceholder')}
            secureTextEntry={isSecureTextEntryCurrent}
            rightIconName="eye"
            rightIconOnPress={() =>
              setSecureTextEntryCurrent(!isSecureTextEntryCurrent)
            }
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder={t('form.newPasswordPlaceholder')}
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

          {error && <Error content={error} />}
          <Container>
            <Button
              text={t('editAccount.save')}
              onPress={handleSave}
              isLoading={isLoading}
            />
          </Container>
        </MainContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditPasswordScreen;
