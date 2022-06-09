import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {fakeRecipes} from '../../data/recipes';
import {Title} from '../../atomic/atoms';
import {Recipe} from '../../atomic/organisms';
import styled from 'styled-components';

const Recipes = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

function RecipesScreen({navigation}) {
  const {t} = useTranslation();
  // TODO get receipes from api with a loader

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Title title={t('recipes.title')} />
        <Recipes>
          {fakeRecipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} navigation={navigation} />
          ))}
        </Recipes>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipesScreen;
