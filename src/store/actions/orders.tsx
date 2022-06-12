import {SET_ORDERS} from '../constants';

export function setOrders(orders) {
  return {
    type: SET_ORDERS,
    payload: orders,
  };
}
