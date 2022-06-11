import {COMMENT_ERROR, COMMENT_OK, REPORT_ERROR, REPORT_OK} from '../constants';
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

export function reportRequest(data, token) {
  return buildRequest(
    'POST',
    '/reports',
    data,
    () => {
      return REPORT_ERROR;
    },
    () => {
      return REPORT_OK;
    },
    token,
  );
}
