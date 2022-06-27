import * as React from 'react';
import styled from 'styled-components';

import {RewardModel} from '../../model';
import getIcons from '../../utils/icons';
import colors from '../../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {rewardsSelector} from '../../store/selectors/cart';
import {addReward, removeReward} from '../../store/actions/cart';
import {Text as SpecialText} from '../atoms';

interface Props {
  reward: RewardModel;
  disabled?: boolean;
}
const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const Container = styled.View<{disabled}>`
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  margin: 5px;
  align-items: center;
  background-color: white;
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;
const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-right: 10px;
`;
const Space = styled.View`
  width: 4px;
`;

const Icon = styled.TouchableOpacity`
  margin-right: 5px;
`;
const Reward: React.FC<Props> = ({reward, disabled}) => {
  const dispatch = useDispatch();

  const isSelected = useSelector(rewardsSelector).find(
    item => item.id === reward.id,
  );

  const iconColor = isSelected ? colors.red : colors.yellow;

  const manageReward = () => {
    if (isSelected) {
      dispatch(removeReward(reward));
    } else {
      dispatch(addReward(reward));
    }
  };

  return (
    <Container disabled={disabled}>
      <StyledImage source={{uri: reward.productImage}} />
      <Content>
        <SpecialText
          content={reward.name + ' (' + reward.cost + ')'}
          size={22}
        />
        <Space />
        <Icon onPress={() => !disabled && manageReward()} disabled={disabled}>
          {getIcons(isSelected ? 'trash' : 'plus', iconColor, 20)}
        </Icon>
      </Content>
    </Container>
  );
};

export default Reward;
