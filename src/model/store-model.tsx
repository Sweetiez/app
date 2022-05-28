import ProductCardModel from './product-card-model';
import CartModel from './cart-item-model';

export default class State {
  cart: {
    cart: CartModel[];
  };
  shop: {
    products: ProductCardModel[];
  };
  user: {
    token?: string;
    refreshToken?: string;
  };
}
