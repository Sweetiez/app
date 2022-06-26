import State from '../../model/StoreModel';

export default function recipesSelector(state: State) {
  return state.recipes.recipes;
}
