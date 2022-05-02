import CommentCardModel from './comment-card-model';

export default class ProductCardModel {
  id: string | undefined;
  name: string | undefined;
  shortDescription: string | undefined;
  description: string | undefined;
  price: number | undefined;
  images: string[] | undefined;
  rating: number | undefined;
  comments: CommentCardModel[] | undefined;
}
