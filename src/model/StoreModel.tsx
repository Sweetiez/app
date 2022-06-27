import {ProductCard, Cart, User, Order, Recipe, RewardModel} from './index';

export default class State {
  cart: {
    cart: Cart[];
    rewards: RewardModel[];
    availableRewards: RewardModel[];
    currentFidelityPoints: number | undefined;
  };
  shop: {
    sweets?: ProductCard[];
    trays?: ProductCard[];
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
