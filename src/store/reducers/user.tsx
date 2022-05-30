import {LOGIN, LOGOUT} from '../constants';
const initialState = {
  token: undefined,
  refreshToken: undefined,
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
        token: undefined,
        refreshToken: undefined,
      };
    default:
      return state;
  }
};
export default userReducer;
