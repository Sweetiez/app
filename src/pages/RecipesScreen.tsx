import React from 'react';

import {useTranslation} from 'react-i18next';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import {Title} from '../atomic/atoms';

function RecipesScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('recipes.title')} />
        <Button
          title={t('welcome')}
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipesScreen;
