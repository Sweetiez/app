import State from '../../model/StoreModel';

export function ordersSelector(state: State) {
  return state.orders.orders;
}
