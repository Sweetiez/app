export default class ProductOrderRequestModel {
  productId: string;
  type: string;
  quantity: number;
  constructor(productId: string, type: string, quantity: number) {
    this.productId = productId;
    this.type = type;
    this.quantity = quantity;
  }
}
