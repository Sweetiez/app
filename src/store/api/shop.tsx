import {PRODUCT_ERROR} from '../constants';
import {getUrl} from '../../utils/api';

export function getPublishedProducts() {
  return fetch(getUrl('/sweets/published'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return PRODUCT_ERROR;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
export function getProduct(id: string) {
  return fetch(getUrl('/sweets/') + id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return PRODUCT_ERROR;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
