import {CommentCard, Evaluation} from './index';

export default class ProductCardModel {
  id: string | undefined;
  name: string | undefined;
  shortDescription: string | undefined;
  description: string | undefined;
  price: number | undefined;
  packagedPrice: number | undefined;
  unitPerPackage: number | undefined;
  images: string[] | undefined;
  ingredients: string[] | undefined;
  diets: string[] | undefined;
  allergens: string[] | undefined;
  flavor: string | undefined;
  valuation: Evaluation | undefined;
  comments: CommentCard[] | undefined;
}
