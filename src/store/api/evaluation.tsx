import {COMMENT_ERROR, COMMENT_OK} from '../constants';
import {buildRequest} from '../../utils/api';

export function commentRequest(data, token) {
  return buildRequest(
    'POST',
    '/evaluations',
    data,
    () => {
      return COMMENT_ERROR;
    },
    () => {
      return COMMENT_OK;
    },
    token,
  );
}
