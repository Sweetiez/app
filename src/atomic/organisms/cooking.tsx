import React from 'react';
import styled from 'styled-components';
import {Stars} from '../molecules';
import {useTranslation} from 'react-i18next';

interface Props {
  preparation: string;
  cook: string;
  chill: string;
  totalTime: string;
  rating: number;
  cost: number;
  portions: number;
  level: string;
}

const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 10px;
  padding: 10px 0 10px 20px;
`;
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const CenteredRow = styled.View`
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;
const Column = styled.View`
  flex-direction: column;
  flex: 1;
`;
const Bold = styled.Text`
  font-weight: bold;
`;
const Time = styled.Text``;

const Cooking: React.FC<Props> = ({
  preparation,
  cook,
  chill,
  totalTime,
  rating,
  level,
  portions,
  cost,
}) => {
  const {t} = useTranslation();
  const min = t('recipe.minutes');

  let difficulty = '';

  switch (level) {
    case 'NOOB':
      difficulty = t('recipe.difficulty.noob');
      break;
    case 'EASY':
      difficulty = t('recipe.difficulty.easy');
      break;
    case 'NORMAL':
      difficulty = t('recipe.difficulty.normal');
      break;
    case 'HARD':
      difficulty = t('recipe.difficulty.hard');
      break;
  }
  return (
    <Container>
      <CenteredRow>
        <Bold>
          {t('recipe.totalTime')}
          {totalTime}
          {min}
        </Bold>
      </CenteredRow>
      <CenteredRow>
        <Stars
          rating={rating}
          size={20}
          itemId={level + cook + chill + totalTime + portions + rating}
        />
      </CenteredRow>
      <Row>
        <Column>
          <Bold>{t('recipe.preparation')}</Bold>
          <Time>
            {preparation}
            {min}
          </Time>
        </Column>
        <Column>
          <Bold>{t('recipe.cook')}</Bold>
          <Time>
            {cook}
            {min}
          </Time>
        </Column>
        <Column>
          <Bold>{t('recipe.chill')}</Bold>
          <Time>
            {chill}
            {min}
          </Time>
        </Column>
      </Row>
      <Row>
        <Column>
          <Bold>{t('recipe.level')}</Bold>
          <Time>{difficulty}</Time>
        </Column>
        <Column>
          <Bold>{t('recipe.cost')}</Bold>
          <Time>
            {cost}
            {'€'}
          </Time>
        </Column>
        <Column>
          <Bold>{t('recipe.portions')}</Bold>
          <Time>{portions}</Time>
        </Column>
      </Row>
    </Container>
  );
};

export default Cooking;
