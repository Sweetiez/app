import ProductCardModel from './product-card-model';

export default class State {
  cart: {
    cart: any[];
  };
  shop: {
    products: ProductCardModel[];
  };
}
