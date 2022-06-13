import {CommentCard, Evaluation} from './index';

export default class ProductCardModel {
  id: string | undefined;
  name: string | undefined;
  shortDescription: string | undefined;
  description: string | undefined;
  price: number | undefined;
  images: string[] | undefined;
  flavor: string | undefined;
  evaluation: Evaluation | undefined;
  comments: CommentCard[] | undefined;
}
