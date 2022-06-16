import ProductOrderRequestModel from './product-order-request-model';

export default class CreateOrderRequestModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDate: string;
  products: ProductOrderRequestModel[];
}
