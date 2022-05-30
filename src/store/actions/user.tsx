import {LOGIN, LOGOUT, GET_USER} from '../constants';
import {User} from '../../model';

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
export function setUser(user: User) {
  return {
    type: GET_USER,
    payload: user,
  };
}
