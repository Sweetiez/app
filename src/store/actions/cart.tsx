import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../constants';

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
}
export function removeItemFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
}
