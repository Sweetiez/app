import {UPDATE_SHOP} from '../constants';
const initialState = {
  products: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHOP:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
