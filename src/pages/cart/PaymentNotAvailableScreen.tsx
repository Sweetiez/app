import * as React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';

import {Text} from '../../atomic/atoms';

import getIcons from '../../utils/icons';
import colors from '../../assets/colors';

const Icon = styled.View`
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
const Space = styled.View`
  margin-top: 50px;
`;
const Content = styled.View`
  align-items: center;
`;
const StyledText = styled(Text)`
  z-index: 10;
`;

const PaymentNotAvailableScreen: React.FC = ({}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <Icon>{getIcons('payment', colors.yellow, 100)}</Icon>
      <Space />
      <Content>
        <StyledText
          content={t('payment.notAvailable')}
          size={50}
          textAlign={'center'}
        />
      </Content>
    </SafeAreaView>
  );
};

export default PaymentNotAvailableScreen;
