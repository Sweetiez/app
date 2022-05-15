import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Title, Back} from '../atomic/atoms';
import styled from 'styled-components';
import RecipeModel from '../model/recipes-model';
import colors from '../assets/colors';

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

const StyledSliderBox = styled(SliderBox)`
  width: 100%;
  height: 200px;
`;

interface Props {
  recipe: RecipeModel;
}

const RecipeScreen: React.FC<Props> = ({route, navigation}) => {
  const {t} = useTranslation();
  const {name, images} = route.params.recipe;
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Back navigation={navigation} color={colors.black} />
        <Title title={name} />
        <StyledSliderBox images={images} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
