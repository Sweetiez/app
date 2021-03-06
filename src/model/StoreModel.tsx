import {
  ProductCard,
  Cart,
  User,
  Order,
  Recipe,
  RewardModel,
  EventModel,
} from './index';

export default class State {
  cart: {
    cart: Cart[];
    rewards: RewardModel[];
    availableRewards: RewardModel[];
    currentFidelityPoints: number | undefined;
  };
  event: {
    events: EventModel[];
  };
  shop: {
    sweets?: ProductCard[];
    trays?: ProductCard[];
  };
  user: {
    token?: string;
    refreshToken?: string;
    user?: User;
    myEvents: EventModel[];
  };
  orders: {
    orders: Order[];
  };
  recipes: {
    recipes: Recipe[];
  };
}
