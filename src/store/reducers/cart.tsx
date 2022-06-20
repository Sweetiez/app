import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
} from '../constants';
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  const item = action.payload;
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let newCart = [...state.cart];
      const existingItem = newCart.find(
        cartItem => item.item === cartItem.item,
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
      };
    default:
      return state;
  }
};
export default cartReducer;
