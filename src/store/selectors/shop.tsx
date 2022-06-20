import State from '../../model/store-model';

export function sweetsSelector(state: State) {
  return state.shop.sweets;
}

export function traysSelector(state: State) {
  return state.shop.trays;
}
