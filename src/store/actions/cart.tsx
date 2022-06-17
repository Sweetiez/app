import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
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
export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
