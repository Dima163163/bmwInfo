import React, {
  FormEvent,
  ForwardRefRenderFunction,
  useEffect,
  useState
} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../redux/user/userSlice';
import { postComment } from '../../redux/comments/postComment';
import { formatDate } from '../../utils/formatDate';
import styles from './CommentForm.module.sass';
import { CommentCar } from '../../types/comments';
import { patchComment } from '../../redux/comments/patchComment';

interface CommentFormProps {
  carId: string;
  editForm: boolean;
  changeEditForm: () => void;
  commentEditItem: CommentCar | null;
}

export const CommentForm = ({
  carId,
  editForm,
  changeEditForm,
  commentEditItem
}: CommentFormProps) => {
  const [comment, setComment] = useState('');
  const user = useAppSelector(selectUser);
  const { id: userId } = user;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editForm && commentEditItem) {
      setComment(commentEditItem.text);
    } else {
      setComment('');
    }
  }, [commentEditItem]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (comment.trim().length > 0) {
      if (!editForm) {
        const date = formatDate(new Date());
        dispatch(postComment({ carId, date, userId, text: comment }));
        setComment('');
      }
      if (editForm && commentEditItem) {
        dispatch(
          patchComment({ commentId: commentEditItem.id, text: comment })
        );
        setComment('');
        changeEditForm();
      }
    }
  };

  return (
    <form className={styles.formComment}>
      <textarea
        placeholder='Написать комментарий'
        className={styles.formCommentText}
        name='text'
        id='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className={styles.formCommentBtn} onClick={handleSubmit}>
        Отправить
      </button>
    </form>
  );
};
