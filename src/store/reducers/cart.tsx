import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../constants';
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: state.cart.push(action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item === action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
