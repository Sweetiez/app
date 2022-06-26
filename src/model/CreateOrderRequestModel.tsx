import ProductOrderRequestModel from './ProductOrderRequestModel';

export default class CreateOrderRequestModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDate: string;
  products: ProductOrderRequestModel[];
}
