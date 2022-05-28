import React from 'react';
import styled from 'styled-components';
import {Title, Text} from '../atoms';
import {Stars} from '../molecules';
import {Recipe as RecipeModel} from '../../model';

interface Props {
  recipe: RecipeModel;
  navigation: any;
}

const Content = styled.View`
  padding: 5px;
  margin-bottom: 20px;
`;
const Bottom = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 5px;
`;
const Space = styled.View`
  margin-top: 5px;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 120px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const Container = styled.TouchableOpacity`
  border-radius: 10px;
  width: 47%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
  background-color: white;
  margin: 5px;
`;

const Recipe: React.FC<Props> = ({recipe, navigation}) => {
  const {name, description, images, rating} = recipe;

  return (
    <Container onPress={() => navigation.navigate('Recipe', {recipe: recipe})}>
      <StyledImage source={{uri: images[0]}} />
      <Content>
        <Title title={name} size={24} />
        <Space />
        <Text numberOfLines={10} content={description} size={14} />
      </Content>
      <Bottom>
        <Stars rating={rating} size={20} itemId={name + rating} />
      </Bottom>
    </Container>
  );
};

export default Recipe;
