import {UPDATE_RECIPES} from '../constants';

export function updateRecipes(recipes) {
  return {
    type: UPDATE_RECIPES,
    payload: recipes,
  };
}
