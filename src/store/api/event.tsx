import {EVENTS_ERROR, SUBSCRIBE_ERROR, SUBSCRIBE_SUCCESS} from '../constants';
import {buildRequest} from '../../utils/api';

export function getPublishedEvents() {
  return buildRequest(
    'GET',
    '/events/face-to-face',
    undefined,
    () => {
      return EVENTS_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}
export function registerToEvents(data, token) {
  return buildRequest(
    'PUT',
    '/events/face-to-face/subscribe',
    data,
    () => {
      return SUBSCRIBE_ERROR;
    },
    () => {
      return SUBSCRIBE_SUCCESS;
    },
    token,
  );
}
