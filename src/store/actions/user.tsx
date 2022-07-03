import {LOGIN, LOGOUT, SET_USER, SET_MY_EVENTS} from '../constants';
import {User, EventModel} from '../../model';

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
    type: SET_USER,
    payload: user,
  };
}
export function setMyEvents(events: EventModel[]) {
  return {
    type: SET_MY_EVENTS,
    payload: events,
  };
}
