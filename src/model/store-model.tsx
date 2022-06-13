import {ProductCard, Cart, User, Order, Recipe} from './index';

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
  orders: {
    orders: Order[];
  };
  recipes: {
    recipes: Recipe[];
  };
}
