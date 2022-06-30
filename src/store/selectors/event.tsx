import State from '../../model/StoreModel';

export function eventsSelector(state: State) {
  return state.event.events;
}
