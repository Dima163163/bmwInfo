import {
  clearComment,
  selectComment,
  selectComments,
  selectCommentsStatus
} from '../../redux/comments/commentsSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCarComments } from '../../redux/comments/getCarComments';

import styles from './CommentsList.module.sass';
import { Status } from '../../types/status';
import { Loader } from '../Loader/Loader';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentCar } from '../../types/comments';

interface ComentsListProps {
  carId: string;
  addCommentItem: ({ id, userId, text, date }: CommentCar) => void;
  changeEditForm: () => void;
}

export const CommentsList = ({
  carId,
  addCommentItem,
  changeEditForm
}: ComentsListProps) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const statusComments = useAppSelector(selectCommentsStatus);
  const comment = useAppSelector(selectComment);
  const [arrComments, setArrComments] = useState<CommentCar[]>([]);
  const [deleteCommentId, setDeleteCommentId] = useState('');

  const addDeleteId = (id: string) => {
    setDeleteCommentId(id);
  };

  useEffect(() => {
    if (comments.length > 0) {
      setArrComments([...comments]);
    }
  }, [comments]);

  useEffect(() => {
    if (deleteCommentId) {
      setArrComments(arrComments.filter((item) => item.id !== deleteCommentId));
      addDeleteId('');
    }
    if (comment) {
      const commentItem = arrComments.find((item) => item.id === comment.id);
      if (!commentItem) {
        setArrComments([...arrComments, comment]);
      }
      if (commentItem) {
        setArrComments(
          arrComments.map((commentUser) => {
            if (commentUser.id === comment.id) {
              return {
                ...commentUser,
                text: comment.text
              };
            } else {
              return commentUser;
            }
          })
        );
      }
      dispatch(clearComment());
    }
  }, [comment, deleteCommentId]);

  useEffect(() => {
    dispatch(getCarComments(carId));
  }, [carId]);

  if (statusComments === Status.PENDING) {
    return <Loader />;
  }

  if (arrComments.length < 0) {
    return null;
  }

  return (
    <ul className={styles.commentsList}>
      {arrComments.map((comment) => (
        <CommentItem
          key={comment.id}
          text={comment.text}
          userId={comment.userId}
          date={comment.date}
          id={comment.id}
          addCommentItem={addCommentItem}
          changeEditForm={changeEditForm}
          addDeleteId={addDeleteId}
          carId={carId}
        />
      ))}
    </ul>
  );
};
