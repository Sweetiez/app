import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from '../constants';
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
      const newData = [];
      state.cart.forEach(cartItem => {
        if (cartItem !== item) {
          newData.push(cartItem);
        }
      });
      return {
        ...state,
        cart: newData,
      };
    default:
      return state;
  }
};
export default cartReducer;
