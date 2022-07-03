import {LOGIN, LOGOUT, SET_MY_EVENTS, SET_USER} from '../constants';
const initialState = {
  token: undefined,
  refreshToken: undefined,
  user: undefined,
  myEvents: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
        token: undefined,
        refreshToken: undefined,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_MY_EVENTS:
      return {
        ...state,
        myEvents: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
