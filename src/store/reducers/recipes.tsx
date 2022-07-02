import {UPDATE_RECIPES} from '../constants';

const initialState = {
  recipes: [],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
