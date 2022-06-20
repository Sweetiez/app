import {PRODUCT_ERROR, TRAY_ERROR} from '../constants';
import {buildRequest} from '../../utils/api';

export function getPublishedSweets() {
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
export function getProduct(id: string, isTray: boolean) {
  return buildRequest(
    'GET',
    isTray ? '/trays/' + id : '/sweets/' + id,
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
export function getPublishedTrays() {
  return buildRequest(
    'GET',
    '/trays/published',
    undefined,
    () => {
      return TRAY_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
}
export function getTray(id: string) {
  return buildRequest(
    'GET',
    '/trays/' + id,
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
