import {PRODUCT_ERROR} from '../constants';
import {buildRequest} from '../../utils/api';

export function getPublishedProducts() {
  return buildRequest(
    'GET',
    '/sweets/published',
    undefined,
    () => {
      return PRODUCT_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}
export function getProduct(id: string) {
  return buildRequest(
    'GET',
    '/sweets/' + id,
    undefined,
    () => {
      return PRODUCT_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}
