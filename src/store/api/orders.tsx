import {GET_ORDERS_ERROR} from '../constants';
import {User} from '../../model';
import {buildRequest} from '../../utils/api';

export const getOrdersRequest = async (
  token: string,
): Promise<User | typeof GET_ORDERS_ERROR> => {
  return buildRequest(
    'GET',
    '/order/me',
    undefined,
    () => {
      return GET_ORDERS_ERROR;
    },
    response => {
      return response.json();
    },
    token,
  );
};
