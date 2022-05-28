import {LOGIN, LOGOUT} from '../constants';

export function login(tokens) {
  return {
    type: LOGIN,
    payload: tokens,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
