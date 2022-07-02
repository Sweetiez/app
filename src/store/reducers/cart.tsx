import {
  ADD_ITEM_TO_CART,
  ADD_REWARD,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
  REMOVE_REWARD,
  SET_AVAILABLE_REWARDS,
  SET_FIDELITY_POINTS,
} from '../constants';
const initialState = {
  cart: [],
  rewards: [],
  availableRewards: [],
  currentFidelityPoints: undefined,
};
const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  switch (action.type) {
    case ADD_REWARD:
      let newFidelityPointsAdd = state.currentFidelityPoints || 0;
      let newRewards = [...state.rewards];
      const existingReward = newRewards.find(
        rewardItem => item.id === rewardItem.id,
      );
      if (!existingReward) {
        newFidelityPointsAdd = newFidelityPointsAdd - item.cost;
        newRewards.push(item);
      }
      return {
        ...state,
        rewards: newRewards,
        currentFidelityPoints: newFidelityPointsAdd,
      };
    case REMOVE_REWARD:
      let newFidelityPoints = state.currentFidelityPoints || 0;
      const newReward = state.rewards.filter(
        rewardItem => rewardItem.id !== item.id,
      );
      newFidelityPoints = newFidelityPoints + item.cost;
      return {
        ...state,
        rewards: newReward,
        currentFidelityPoints: newFidelityPoints,
      };
    case ADD_ITEM_TO_CART:
      let newCart = [...state.cart];
      const existingItem = newCart.find(
        cartItem => item.item.id === cartItem.item.id,
      );
      if (existingItem) {
        existingItem.quantity = existingItem.quantity += item.quantity;
      } else {
        newCart.push(item);
      }
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_ITEM_FROM_CART:
      const newData = state.cart.filter(cartItem => cartItem !== item);
      return {
        ...state,
        cart: newData,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        rewards: [],
        currentFidelityPoints: undefined,
      };
    case SET_AVAILABLE_REWARDS:
      return {
        ...state,
        availableRewards: item,
      };
    case SET_FIDELITY_POINTS:
      return {
        ...state,
        currentFidelityPoints: item,
      };
    default:
      return state;
  }
};
export default cartReducer;
