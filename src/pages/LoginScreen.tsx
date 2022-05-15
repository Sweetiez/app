import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {Title} from './../atomic/atoms';

function LoginScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('login.title')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
