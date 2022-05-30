import {RecipeStep} from './index';

export default class RecipeModel {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  images: string[] | undefined;
  rating: number | undefined;
  totalTime: string | undefined;
  preparationTime: string | undefined;
  sleepTime: string | undefined;
  cookingTime: string | undefined;
  portions: number | undefined;
  cost: number | undefined;
  level: string | undefined;
  steps: RecipeStep[] | undefined;
}
