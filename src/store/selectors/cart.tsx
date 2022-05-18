import State from '../../model/store-model';

export function cartSelector(state: State) {
  return state.cart.cart;
}
export function itemsQuantityIntoCartSelector(state: State) {
  if (state.cart.cart.length === 0) {
    return 0;
  }
  let counter = 0;
  state.cart.cart.forEach(cartItem => {
    counter += cartItem.quantity;
  });
  return counter;
}
export function totalPriceSelector(state: State) {
  let totalPrice = 0;

  state.cart.cart.forEach(
    cartItem => (totalPrice += cartItem.item.price * cartItem.quantity),
  );

  return totalPrice;
}
