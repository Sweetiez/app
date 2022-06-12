import State from '../../model/store-model';

export function ordersSelector(state: State) {
  return state.orders.orders;
}
