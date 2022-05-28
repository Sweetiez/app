import Config from 'react-native-config';
import {PRODUCT_ERROR} from '../constants';

export function getPublishedProducts() {
  return fetch(Config.API_URL + '/sweets/published', {
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
  return fetch(Config.API_URL + '/sweets/' + id, {
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
