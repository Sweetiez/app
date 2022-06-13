import State from '../../model/store-model';

export default function recipesSelector(state: State) {
  return state.recipes.recipes;
}
