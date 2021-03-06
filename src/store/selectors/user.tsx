import State from '../../model/StoreModel';

export function tokenSelector(state: State) {
  return state.user.token;
}

export function userSelector(state: State) {
  return state.user.user;
}

export function myEventsSelector(state: State) {
  return state.user.myEvents;
}
