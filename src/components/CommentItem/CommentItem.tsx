import {
  selectUser,
  selectUserById,
  selectUsersStatus
} from '../../redux/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { getUsers } from '../../redux/user/getUsers';
import { Status } from '../../types/status';
import { Loader } from '../Loader/Loader';
import { CommentCar } from '../../types/comments';
import { deleteComment } from '../../redux/comments/deleteComment';

import styles from './CommentItem.module.sass';
import classNames from 'classnames';

interface CommentItemProps {
  id: string;
  userId: string;
  date: string;
  text: string;
  carId: string;
  addCommentItem: ({ id, userId, text, date }: CommentCar) => void;
  changeEditForm: () => void;
  addDeleteId: (id: string) => void;
}

export const CommentItem = ({
  id,
  userId,
  date,
  text,
  changeEditForm,
  addCommentItem,
  addDeleteId,
  carId
}: CommentItemProps) => {
  const dispatch = useAppDispatch();
  const statusUsers = useAppSelector(selectUsersStatus);
  const user = useAppSelector((state) => selectUserById(state, userId));
  const authUser = useAppSelector(selectUser);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (statusUsers === Status.PENDING) {
    return <Loader />;
  }

  return (
    <li className={styles.commentItem}>
      <div className={styles.userInfo}>
        <div className={styles.userName}>
          {user
            ? `${user.name[0].toUpperCase()}${user.name.slice(1).toLowerCase()}`
            : 'Неизвестный'}
        </div>
        <div className={styles.commentDate}>{date}</div>
      </div>
      <div className={styles.userComment}>{text}</div>
      <div className={styles.btnWrapper}>
        {authUser && user && authUser.id === user.id && (
          <button
            className={styles.btn}
            onClick={() => {
              addCommentItem({
                id,
                userId,
                date,
                text
              });
              changeEditForm();
            }}
          >
            Редактировать
          </button>
        )}
        {authUser && user && authUser.id === user.id && (
          <button
            className={classNames(styles.btn, styles.deleteBtn)}
            onClick={() => {
              dispatch(deleteComment({ carId, commentId: id }));
              addDeleteId(id);
            }}
          >
            Удалить
          </button>
        )}
      </div>
    </li>
  );
};
