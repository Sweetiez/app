import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import styled from 'styled-components';

import {Cooking, Steps} from '../../atomic/organisms';
import {Title, Back, Loader} from '../../atomic/atoms';

import {RECIPE_ERROR} from '../../store/constants';
import {getRecipe} from '../../store/api/recipes';

import {Recipe} from '../../model';
import colors from '../../assets/colors';
import {checkConnectivity} from '../../utils/connectivity';
import getIcons from '../../utils/icons';

const StyledSliderBox = styled(SliderBox)`
  width: 100%;
  height: 200px;
`;
const NoImage = styled.View`
  margin: auto;
`;

interface Props {
  recipeId: string;
}

const RecipeScreen: React.FC<Props> = ({route, navigation}) => {
  const id = route.params.recipeId;
  const [recipe, setRecipe] = useState<Recipe>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  const getData = useCallback(() => {
    setLoading(true);
    getRecipe(id).then(data => {
      setLoading(false);
      if (data !== RECIPE_ERROR) {
        setRecipe(data);
      } else if (!showErrorModal) {
        setShowErrorModal(true);
      }
    });
  }, [id, showErrorModal]);

  useEffect(() => {
    checkConnectivity().then(isConnected => {
      if (!isConnected && !showErrorModal) {
        setShowErrorModal(true);
      } else {
        getData();
      }
    });
  }, [getData, showErrorModal]);

  useEffect(() => {
    getData();
  }, [getData, id]);

  if (!recipe || isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
        <Title title={recipe.name} />
        {recipe.images &&
        recipe.images.length > 0 &&
        recipe.images[0] !== '' ? (
          <StyledSliderBox images={recipe.images} />
        ) : (
          <NoImage>{getIcons('noImage', colors.yellow, 100)}</NoImage>
        )}
        <Cooking
          preparation={recipe.preparationTime}
          cook={recipe.cookTime}
          chill={recipe.chillTime}
          totalTime={recipe.totalTime}
          rating={recipe.rating}
          cost={recipe.cost}
          level={recipe.difficulty}
          portions={recipe.people}
        />
        <Steps steps={recipe.steps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
