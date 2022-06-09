import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Back, Error, Title} from '../../../atomic/atoms';
import styled from 'styled-components';
import {Button, Input} from '../../../atomic/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {tokenSelector, userSelector} from '../../../store/selectors/user';
import getIcons from '../../../utils/icons';
import colors from '../../../assets/colors';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../../utils/validator';
import {getUserRequest, updateMeRequest} from '../../../store/api/user';
import {GET_USER_ERROR, UPDATE_OK} from '../../../store/constants';
import {setUser} from '../../../store/actions/user';

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

function EditAccountScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>(user.firstName);
  const [lastname, setLastname] = useState<string>(user.lastName);
  const [email, setEmail] = useState<string>(user.email);
  const [phone, setPhone] = useState<string>(user.phone);
  const [error, setError] = useState<string>(undefined);

  const validate = () => {
    if (email === '' || firstname === '' || lastname === '') {
      setError(t('form.blankInputs'));
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
    }
    if (phone !== '' && !validatePhone(phone)) {
      setError(t('form.incorrectPhone'));
      return false;
    }
    setError(null);
    return true;
  };

  const handleSave = () => {
    if (validate()) {
      setLoading(true);
      const data = {
        id: user.id,
        firstName: firstname,
        lastName: lastname,
        email,
        phone,
      };
      updateMeRequest(data, token).then(result => {
        if (result === UPDATE_OK) {
          getUserRequest(token).then(updatedData => {
            setLoading(false);
            if (updatedData === GET_USER_ERROR) {
              setError(t('editAccount.error'));
            } else {
              dispatch(setUser(updatedData));
              navigation.navigate('Account');
            }
          });
        } else {
          setError(t('editAccount.error'));
        }
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('editAccount.title')} />
        <Back navigation={navigation} color={colors.black} />
        <Icon>{getIcons('edit', colors.yellow, 100)}</Icon>
        <MainContainer>
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
            onChangeText={setPhone}
            value={phone}
            placeholder={t('form.phonePlaceholder')}
            keyboardType="phone-pad"
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

export default EditAccountScreen;
