import * as React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';

import {Back, Title, Text} from '../../atomic/atoms';

import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';

const Icon = styled.View`
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
const Space = styled.View`
  margin-top: 50px;
`;
const Arrow = styled.View`
  z-index: 10;
`;
const Content = styled.View`
  align-items: center;
`;
const StyledText = styled(Text)`
  z-index: 10;
`;

const PaymentNotAvailableScreen: React.FC = ({}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <Arrow>
        <Back navigation={navigation} />
      </Arrow>
      <Title title={t('payment.title')} />
      <Icon>{getIcons('payment', colors.yellow, 100)}</Icon>
      <Space />
      <Content>
        <StyledText content={t('payment.notAvailable')} size={50} center />
      </Content>
    </SafeAreaView>
  );
};

export default PaymentNotAvailableScreen;
