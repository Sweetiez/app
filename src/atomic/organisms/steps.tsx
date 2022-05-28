import React from 'react';
import styled from 'styled-components';
import {Step} from '../molecules';
import {RecipeStep} from '../../model';
import {Text} from '../atoms';
import {useTranslation} from 'react-i18next';
import colors from '../../assets/colors';

interface Props {
  steps: RecipeStep[];
}

const Container = styled.View`
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 0 10px 10px;
  padding: 10px 0 10px 20px;
`;

const Space = styled.View`
  margin-bottom: 10px;
`;

const Steps: React.FC<Props> = ({steps}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Text content={t('recipe.steps')} size={28} color={colors.yellow} />
      <Space />
      {steps.map(step => (
        <Step text={step.description} count={step.number} key={step.number} />
      ))}
    </Container>
  );
};

export default Steps;
