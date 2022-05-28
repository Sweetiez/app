import Config from 'react-native-config';
import {PRODUCT_ERROR} from '../constants';
import {getUrl} from '../../utils/api';

export function getPublishedProducts() {
  console.log('getPublishedProducts ', Config.API_URL + '/sweets/published');
  return fetch(getUrl('/sweets/published'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('response', response);
      if (response.status === 200) {
        return response.json();
      } else {
        return PRODUCT_ERROR;
      }
    })
    .catch(error => {
      console.log('error : ', error);
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
