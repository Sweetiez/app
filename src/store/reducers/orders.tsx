import {LOGOUT, SET_ORDERS} from '../constants';
const initialState = {
  orders: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};
export default orderReducer;
