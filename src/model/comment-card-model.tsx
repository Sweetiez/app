export default class CommentCardModel {
  id: string | undefined;
  content: string | undefined;
  voter: {
    id: string | undefined;
    name: string | undefined;
  };
  mark: number | undefined;
  date: string | undefined;
}
