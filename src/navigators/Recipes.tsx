import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesScreen, RecipeScreen} from '../pages';
import colors from '../assets/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from '../atomic/atoms';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';

const RecipesStack = createNativeStackNavigator();

function RecipesStackScreen() {
  const headerStyle = {
    backgroundColor: colors.yellow,
    shadowColor: colors.white,
    elevation: 10,
  };
  const headerOptions = (title: string): StackNavigationOptions => ({
    headerStyle,
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerLeft: () => null,
    headerTitle: (): React.ReactNode => (
      <Text content={title} size={30} color={colors.white} />
    ),
    headerTitleAlign: 'center',
  });
  const {t} = useTranslation();
  return (
    <RecipesStack.Navigator
      screenOptions={{
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
      }}>
      <RecipesStack.Screen
        name="Recipes"
        component={RecipesScreen}
        options={headerOptions(t('recipes.title'))}
      />
      <RecipesStack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={headerOptions(t('recipe.title'))}
      />
    </RecipesStack.Navigator>
  );
}

export default RecipesStackScreen;
