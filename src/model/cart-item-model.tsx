import ProductCardModel from './product-card-model';

export default class CartModel {
  item: ProductCardModel | undefined;
  quantity: number | undefined;
}
