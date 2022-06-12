import {ProductCard, Cart, User, Order} from './index';

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
}
