import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';
import {Back, Title} from '../../atomic/atoms';
import colors from '../../assets/colors';

const Content = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

function PaymentScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('payment.title')} />
        <Back navigation={navigation} color={colors.black} />
        <Content>{/*TODO content*/}</Content>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentScreen;
