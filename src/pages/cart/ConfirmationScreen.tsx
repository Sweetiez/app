import * as React from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';

import {Button} from '../../atomic/atoms';

const SubContainer = styled.View`
  flex: 1;
`;
const CheckoutButton = styled(Button)`
  flex: 1;
`;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

function ConfirmationScreen() {
  const {t} = useTranslation();

  const handleContinue = () => {};

  return (
    <StyledSafeAreaView>
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
