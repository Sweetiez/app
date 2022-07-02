import {UPDATE_EVENTS} from '../constants';
const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  const item = action.payload;
  switch (action.type) {
    case UPDATE_EVENTS:
      return {
        ...state,
        events: item,
      };
    default:
      return state;
  }
};
export default eventReducer;
