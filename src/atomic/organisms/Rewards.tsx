import * as React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {RewardModel} from '../../model';
import {Reward} from '../molecules';

interface Props {
  rewards: RewardModel[];
  loyaltyPoints: number;
  selectedReward: RewardModel;
}

const RewardsContent = styled.View`
  width: 100%;
`;
const NoItem = styled.Text`
  font-style: italic;
`;
const Space = styled.View`
  height: 10px;
`;
const Container = styled.View`
  margin: 5px;
  padding: 5px;
  align-items: center;
  width: 97%;
`;

const Rewards: React.FC<Props> = ({loyaltyPoints, rewards, selectedReward}) => {
  const {t} = useTranslation();
  return (
    <Container>
      {rewards.length > 0 ? (
        <RewardsContent>
          {rewards.map(r => {
            let disabled = false;
            if (selectedReward && selectedReward.id !== r.id) {
              disabled = true;
            } else if (selectedReward && selectedReward.id === r.id) {
              disabled = false;
            } else if (r.cost > loyaltyPoints) {
              disabled = true;
            }

            return <Reward reward={r} key={r.id} disabled={disabled} />;
          })}
        </RewardsContent>
      ) : (
        <>
          <NoItem>{t('rewards.noReward')}</NoItem>
          <Space />
        </>
      )}
      <Space />
    </Container>
  );
};

export default Rewards;
