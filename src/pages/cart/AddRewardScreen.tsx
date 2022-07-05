import * as React from 'react';

import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from '../../atomic/atoms';

import {userSelector} from '../../store/selectors/user';
import Rewards from '../../atomic/organisms/Rewards';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {useEffect} from 'react';
import {setFidelityPoints} from '../../store/actions/cart';
import {
  availableRewardsSelector,
  fidelityPointsSelector,
  rewardsSelector,
} from '../../store/selectors/cart';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const CheckoutButton = styled(Button)``;
const CheckoutButtonView = styled.View`
  margin: 5px;
`;
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
const CenteredText = styled.Text`
  text-align: center;
`;
const Icon = styled.View`
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
const Space = styled.View`
  margin-top: 30px;
`;

function AddRewardScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const availableRewards = useSelector(availableRewardsSelector);
  const rewards = useSelector(rewardsSelector);
  const fidelityPoints = useSelector(fidelityPointsSelector);

  useEffect(() => {
    if (rewards.length === 0) {
      dispatch(setFidelityPoints(user.loyaltyPoints));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rewards]);

  return (
    <StyledSafeAreaView>
      <Icon>{getIcons('reward', colors.yellow, 100)}</Icon>
      <Space />
      <SubTitle>{t('rewards.titleAdd')}</SubTitle>
      <CenteredText>{t('rewards.loyalty', {fidelityPoints})}</CenteredText>
      <Space />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Rewards
            rewards={availableRewards}
            loyaltyPoints={fidelityPoints}
            selectedReward={rewards && rewards[0]}
          />
        </Container>
      </ScrollView>
      <CheckoutButtonView>
        <CheckoutButton
          text={t('common.continue')}
          onPress={() => navigation.navigate('ClientInfo')}
        />
      </CheckoutButtonView>
    </StyledSafeAreaView>
  );
}

export default AddRewardScreen;
