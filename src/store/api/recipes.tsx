import {RECIPES_ERROR, RECIPE_ERROR} from '../constants';
import {buildRequest} from '../../utils/api';

export function getRecipes() {
  return buildRequest(
    'GET',
    '/recipes',
    undefined,
    () => {
      return RECIPES_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}

export function getRecipe(id) {
  return buildRequest(
    'GET',
    '/recipes/' + id,
    undefined,
    () => {
      return RECIPE_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}
