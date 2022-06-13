import {RecipeStep} from './index';

export default class RecipeModel {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  images: string[] | undefined;
  rating: number | undefined;
  totalTime: string | undefined;
  preparationTime: string | undefined;
  chillTime: string | undefined;
  difficulty: string | undefined;
  cookTime: string | undefined;
  people: number | undefined;
  cost: number | undefined;
  cookingTime: string | undefined;
  steps: RecipeStep[] | undefined;
}
