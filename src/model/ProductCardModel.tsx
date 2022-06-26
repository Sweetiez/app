import {Evaluation} from './index';

export default class ProductCardModel {
  id: string | undefined;
  name: string | undefined;
  shortDescription: string | undefined;
  description: string | undefined;
  price: number | undefined;
  rating: number | undefined;
  packagedPrice: number | undefined;
  unitPerPackage: number | undefined;
  images: string[] | undefined;
  ingredients: string[] | undefined;
  diets: string[] | undefined;
  allergens: string[] | undefined;
  flavor: string | undefined;
  valuation: Evaluation | undefined;
  sweets: SweetsModel[];
  type: 'SWEET' | 'TRAY';
}

class SweetsModel {
  sweet: ProductCardModel;
  quantity: number | undefined;
}
