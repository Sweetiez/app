import ProductCardModel from './ProductCardModel';

export default class CartModel {
  item: ProductCardModel | undefined;
  quantity: number | undefined;
}
