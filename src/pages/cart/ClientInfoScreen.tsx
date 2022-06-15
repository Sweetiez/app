import React from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import {Back, Button, Title} from '../../atomic/atoms';

import colors from '../../assets/colors';

const CartRecapContainer = styled.View`
  flex: 1;
`;
const StyledTitle = styled(Title)`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const Arrow = styled.View`
  z-index: 10;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

function ClientInfoScreen({navigation}) {
  const {t} = useTranslation();

  const handleContinue = () => {
    navigation.navigate('Payment');
  };

  return (
    <StyledSafeAreaView>
      <Arrow>
        <Back navigation={navigation} color={colors.black} />
      </Arrow>
      <StyledTitle title={t('clientInfo.title')} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <CartRecapContainer>{/*TODO client infos*/}</CartRecapContainer>
      </ScrollView>
      <CheckoutButtonView>
        <CheckoutButton text={t('common.continue')} onPress={handleContinue} />
      </CheckoutButtonView>
    </StyledSafeAreaView>
  );
}

export default ClientInfoScreen;
