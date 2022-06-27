import {REWARD_ERROR} from '../constants';
import {buildRequest} from '../../utils/api';

export function getRewards() {
  return buildRequest(
    'GET',
    '/rewards',
    undefined,
    () => {
      return REWARD_ERROR;
    },
    data => {
      return data.json();
    },
    undefined,
  );
}
