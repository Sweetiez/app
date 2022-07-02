import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  ADD_REWARD,
  REMOVE_REWARD,
  SET_FIDELITY_POINTS,
  SET_AVAILABLE_REWARDS,
} from '../constants';

export function addItemToCart(item, quantity) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: {item, quantity},
  };
}
export function removeItemFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
}
export function addReward(item) {
  return {
    type: ADD_REWARD,
    payload: item,
  };
}
export function setAvailableRewards(data) {
  return {
    type: SET_AVAILABLE_REWARDS,
    payload: data,
  };
}
export function setFidelityPoints(points) {
  return {
    type: SET_FIDELITY_POINTS,
    payload: points,
  };
}
export function removeReward(item) {
  return {
    type: REMOVE_REWARD,
    payload: item,
  };
}
export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
