import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Title, Back} from '../../atomic/atoms';
import styled from 'styled-components';
import {Recipe} from '../../model';
import colors from '../../assets/colors';
import {Cooking, Steps} from '../../atomic/organisms';

const StyledSliderBox = styled(SliderBox)`
  width: 100%;
  height: 200px;
`;

interface Props {
  recipe: Recipe;
}

const RecipeScreen: React.FC<Props> = ({route, navigation}) => {
  const {
    name,
    images,
    preparationTime,
    cookingTime,
    sleepTime,
    totalTime,
    portions,
    level,
    cost,
    rating,
    steps,
  } = route.params.recipe;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
        <Title title={name} />
        <StyledSliderBox images={images} />
        <Cooking
          preparation={preparationTime}
          cook={cookingTime}
          chill={sleepTime}
          totalTime={totalTime}
          rating={rating}
          cost={cost}
          level={level}
          portions={portions}
        />
        <Steps steps={steps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
