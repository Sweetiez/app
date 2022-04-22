import React from 'react';

import {useTranslation} from 'react-i18next';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';
// @ts-ignore
import Home from '../assets/icons/home.svg';

function HomeScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{t('welcome')}</Text>
        <Home width={120} height={40} color={'blue'} />
        <Button
          title={t('details')}
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
