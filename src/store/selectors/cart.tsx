import State from '../../model/StoreModel';

export function cartSelector(state: State) {
  return state.cart.cart;
}

export function rewardsSelector(state: State) {
  return state.cart.rewards;
}
export function fidelityPointsSelector(state: State) {
  return state.cart.currentFidelityPoints;
}
export function availableRewardsSelector(state: State) {
  return state.cart.availableRewards;
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
    cartItem =>
      (totalPrice += cartItem.item.packagedPrice
        ? cartItem.item.packagedPrice * cartItem.quantity
        : cartItem.item.price * cartItem.quantity),
  );

  return Math.round(totalPrice * 100) / 100;
}
