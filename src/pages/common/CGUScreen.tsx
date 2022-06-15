import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import {Back, Title} from '../../atomic/atoms';
import colors from '../../assets/colors';

const Content = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

const Bold = styled.Text`
  font-weight: bold;
`;

function CGUScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('cgu.title')} />
        <Back navigation={navigation} color={colors.black} />
        <Content>
          <Bold>{t('cgu.cgv.title')}</Bold>
          <Text>{t('cgu.cgv.content')}</Text>
          <Bold>{t('cgu.cgv.accept.title')}</Bold>
          <Text>{t('cgu.cgv.accept.content')}</Text>
          <Bold>{t('cgu.cgv.serviceAccess.title')}</Bold>
          <Text>{t('cgu.cgv.serviceAccess.content')}</Text>
          <Bold>{t('cgu.cgv.customerService.title')}</Bold>
          <Text>{t('cgu.cgv.customerService.content')}</Text>
          <Bold>{t('cgu.cgv.products.title')}</Bold>
          <Text>{t('cgu.cgv.products.content')}</Text>
          <Bold>{t('cgu.cgv.orders.title')}</Bold>
          <Text>{t('cgu.cgv.orders.content')}</Text>
          <Bold>{t('cgu.cgv.orderControl.title')}</Bold>
          <Text>{t('cgu.cgv.orderControl.content')}</Text>
          <Bold>{t('cgu.cgv.prices.title')}</Bold>
          <Text>{t('cgu.cgv.prices.content')}</Text>
          <Bold>{t('cgu.cgv.payment.title')}</Bold>
          <Text>{t('cgu.cgv.payment.content')}</Text>
          <Bold>{t('cgu.cgv.discounts.title')}</Bold>
          <Text>{t('cgu.cgv.discounts.content')}</Text>
          <Bold>{t('cgu.cgv.complianceOnDelivery.title')}</Bold>
          <Text>{t('cgu.cgv.complianceOnDelivery.content')}</Text>
          <Bold>{t('cgu.cgv.sponsorship.title')}</Bold>
          <Text>{t('cgu.cgv.sponsorship.content')}</Text>
          <Bold>{t('cgu.cgv.rightOfWithdrawal.title')}</Bold>
          <Text>{t('cgu.cgv.rightOfWithdrawal.content')}</Text>
          <Bold>{t('cgu.cgv.guarantee.title')}</Bold>
          <Text>{t('cgu.cgv.guarantee.content')}</Text>
          <Bold>{t('cgu.cgv.personalData.title')}</Bold>
          <Text>{t('cgu.cgv.personalData.content')}</Text>
          <Bold>{t('cgu.cgv.properties.title')}</Bold>
          <Text>{t('cgu.cgv.properties.content')}</Text>
          <Bold>{t('cgu.cgv.applicableLaw.title')}</Bold>
          <Text>{t('cgu.cgv.applicableLaw.content')}</Text>
          <Bold>{t('cgu.cgv.nullity.title')}</Bold>
          <Text>{t('cgu.cgv.nullity.content')}</Text>
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CGUScreen;
