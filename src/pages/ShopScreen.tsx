import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, Text} from 'react-native';

function ShopScreen() {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{t('shop.title')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ShopScreen;
