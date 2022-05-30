import {COMMENT_ERROR} from '../constants';
import {buildRequest} from '../../utils/api';

export function commentRequest(token, data) {
  return buildRequest(
    'POST',
    '/evaluations',
    data,
    () => {
      return COMMENT_ERROR;
    },
    response => {
      return response.json();
    },
    token,
  );
}
