import {UPDATE_SWEET_SHOP, UPDATE_TRAY_SHOP} from '../constants';
const initialState = {
  sweets: [],
  trays: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SWEET_SHOP:
      return {
        ...state,
        sweets: action.payload,
      };
    case UPDATE_TRAY_SHOP:
      console.log(action.payload);
      return {
        ...state,
        trays: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
