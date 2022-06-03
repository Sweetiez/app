import State from '../../model/store-model';

export function tokenSelector(state: State) {
  return state.user.token;
}

export function userSelector(state: State) {
  return state.user.user;
}
