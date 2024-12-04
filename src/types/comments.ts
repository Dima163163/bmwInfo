import { Status } from './status';

export type CommentCar = {
  id: string,
  date: string,
  userId: string,
  text: string
}

export type CommentsCar = CommentCar[];

export interface CommentsState {
  status: Status;
  comments: CommentsCar;
  comment: CommentCar | null;
  deleteCommentText: string;
  error: string | null;
}