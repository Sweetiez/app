import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';

import {Loader, Title, Text} from '../../atomic/atoms';
import {ErrorModal, Recipe} from '../../atomic/organisms';

import {checkConnectivity} from '../../utils/connectivity';
import {getRecipes} from '../../store/api/recipes';
import {RECIPES_ERROR} from '../../store/constants';
import {updateRecipes} from '../../store/actions/recipes';
import recipesSelector from '../../store/selectors/recipes';

const Recipes = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CenteredText = styled.View`
  text-align: center;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

function RecipesScreen({navigation}) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getRecipesData = useCallback(() => {
    setLoading(true);
    getRecipes().then(data => {
      setLoading(false);
      if (data === RECIPES_ERROR) {
        setShowErrorModal(true);
      } else {
        dispatch(updateRecipes(data));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        // reload data if connectivity is retrieved
        getRecipesData();
      }
    });
  }, [getRecipesData, showErrorModal]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ErrorModal show={showErrorModal} setShow={setShowErrorModal} />
        <Title title={t('recipes.title')} />
        {recipes && recipes.length > 0 ? (
          <Recipes>
            {recipes.map(recipe => (
              <Recipe key={recipe.id} recipe={recipe} navigation={navigation} />
            ))}
          </Recipes>
        ) : (
          <CenteredText>
            <Text content={t('recipes.noRecipes')} size={44} />
          </CenteredText>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipesScreen;
