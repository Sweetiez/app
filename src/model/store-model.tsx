import {ProductCard, Cart, User} from './index';

export default class State {
  cart: {
    cart: Cart[];
  };
  shop: {
    products: ProductCard[];
  };
  user: {
    token?: string;
    refreshToken?: string;
    user?: User;
  };
}
