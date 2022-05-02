import React from 'react';

import {useTranslation} from 'react-i18next';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';

function RecipesScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{t('recipes.title')}</Text>
        <Button
          title={t('welcome')}
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipesScreen;
