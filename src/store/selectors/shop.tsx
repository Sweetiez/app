import State from '../../model/store-model';

export default function productSelector(state: State) {
  return state.shop.products;
}
