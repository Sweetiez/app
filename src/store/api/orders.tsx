import {
  CREATE_AN_ORDER_ERROR,
  CREATE_PAYMENT_INTENT_ERROR,
  GET_ORDERS_ERROR,
} from '../constants';
import {User} from '../../model';
import {buildRequest} from '../../utils/api';
import CreateOrderRequestModel from '../../model/CreateOrderRequestModel';

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

export const createAnOrdersRequest = async (
  request: CreateOrderRequestModel,
): Promise<{orderId: string} | typeof CREATE_AN_ORDER_ERROR> => {
  return buildRequest(
    'POST',
    '/order',
    request,
    () => {
      return CREATE_AN_ORDER_ERROR;
    },
    response => {
      console.log(request, response);
      return response.json();
    },
    undefined,
  );
};

export const createPayementIntentRequest = async (
  orderId: string,
): Promise<{clientSecret: string} | typeof CREATE_PAYMENT_INTENT_ERROR> => {
  return buildRequest(
    'POST',
    `/payment/intent/${orderId}`,
    undefined,
    () => {
      return CREATE_PAYMENT_INTENT_ERROR;
    },
    response => {
      return response.json();
    },
    undefined,
  );
};
