import {UPDATE_SHOP} from '../constants';

export function updateShop(products) {
  return {
    type: UPDATE_SHOP,
    payload: products,
  };
}
