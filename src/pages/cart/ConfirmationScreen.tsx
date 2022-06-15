import React from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

import {Back, Button, Title} from '../../atomic/atoms';

import colors from '../../assets/colors';

const SubContainer = styled.View`
  flex: 1;
`;
const StyledTitle = styled(Title)`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const Arrow = styled.View`
  z-index: 10;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

function ConfirmationScreen({navigation}) {
  const {t} = useTranslation();

  const handleContinue = () => {};

  return (
    <StyledSafeAreaView>
      <Arrow>
        <Back navigation={navigation} color={colors.black} />
      </Arrow>
      <StyledTitle title={t('confirmation.title')} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <SubContainer>{/*TODO confirmation*/}</SubContainer>
      </ScrollView>
      <CheckoutButtonView>
        <CheckoutButton text={t('common.continue')} onPress={handleContinue} />
      </CheckoutButtonView>
    </StyledSafeAreaView>
  );
}

export default ConfirmationScreen;
