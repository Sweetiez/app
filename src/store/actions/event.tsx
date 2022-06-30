import {UPDATE_EVENTS} from '../constants';

export function updateEvents(events) {
  return {
    type: UPDATE_EVENTS,
    payload: events,
  };
}
