import {UPDATE_SWEET_SHOP, UPDATE_TRAY_SHOP} from '../constants';

export function updateSweetShop(sweets) {
  return {
    type: UPDATE_SWEET_SHOP,
    payload: sweets,
  };
}

export function updateTrayShop(trays) {
  return {
    type: UPDATE_TRAY_SHOP,
    payload: trays,
  };
}
