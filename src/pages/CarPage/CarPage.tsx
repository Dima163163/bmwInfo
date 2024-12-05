import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectCar, selectCarsStatus } from '../../redux/cars/carsSlice';
import { useEffect, useState } from 'react';
import { getCar } from '../../redux/cars/getCar';
import { Status } from '../../types/status';
import { Loader } from '../../components/Loader/Loader';
import { Slider } from '../../components/Slider/Slider';
import styles from './CarPage.module.sass';
import classNames from 'classnames';
import { CommentsList } from '../../components/CommentsList/CommentsList';
import { selectUser } from '../../redux/user/userSlice';
import { CommentForm } from '../../components/CommentForm/CommentForm';
import { CommentCar } from '../../types/comments';
import {
  clearMessageDelete,
  selectCommentDeleteMessage
} from '../../redux/comments/commentsSlice';

export const CarPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { carId } = useParams();
  const car = useAppSelector(selectCar);
  const status = useAppSelector(selectCarsStatus);
  const user = useAppSelector(selectUser);
  const messageDeleteComment = useAppSelector(selectCommentDeleteMessage);
  const [editForm, setEditForm] = useState(false);
  const [commentEditItem, setCommentEditItem] = useState<CommentCar | null>(
    null
  );

  useEffect(() => {
    if (carId) {
      dispatch(getCar(carId));
    }
  }, [carId]);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(clearMessageDelete());
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [messageDeleteComment]);

  const addCommentItem = ({ id, userId, text, date }: CommentCar) => {
    setCommentEditItem({ id, userId, text, date });
  };

  const changeEditForm = () => {
    setEditForm(!editForm);
  };

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <div>Ошибка загрузки данных</div>;
  }

  if (!car) {
    return null;
  }

  return (
    <div className={styles.carPageWrapper}>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        <img src='/arrow-left.svg' alt='arrow left' />
        Назад
      </button>
      <div className={styles.carInfoWrapper}>
        {car.images && car.images.length > 0 && <Slider slides={car.images} />}
        <div className={styles.carInfoContent}>
          <h2 className={styles.carInfoTitle}>
            {car.brand} {car.series} серии
          </h2>
          <p className={styles.carInfoModel}>Mодель кузова: {car?.model}</p>
          <p className={styles.carInfoGeneration}>{car.generation}</p>
          <p className={styles.carInfoYear}>
            Годы выпуска: {car.startProd} - {car.endProd}
          </p>
        </div>
      </div>

      <div className={styles.carDescr}>
        <h4 className={styles.title}>Типы кузова:</h4>
        <ul className={styles.carPageListTypes}>
          {car &&
            car.bodyTypes.map((type) => (
              <li
                key={type}
                className={classNames(styles.listItem, styles.carPageItemTypes)}
              >
                <span className={styles.listCircle}></span> {type}
              </li>
            ))}
        </ul>
        <h4 className={styles.title}>Типы двигателей:</h4>
        <ul className={styles.carPageListEngines}>
          {car &&
            car.engines.map((engine) => (
              <li
                key={engine}
                className={classNames(
                  styles.listItem,
                  styles.carPageItemEngine
                )}
              >
                <span className={styles.listCircle}></span> {engine}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.wrapperDescription}>
        <h4 className={styles.title}>Описание</h4>
        <div className={styles.carPageText}>
          {car.text &&
            car.text.map((text) => (
              <p key={text} className={styles.carPageText}>
                {text}
              </p>
            ))}
        </div>
      </div>
      <div className={styles.commentsWrapper}>
        <h4 className={styles.title}>Комментарии</h4>
        {user.id && carId && (
          <CommentForm
            carId={carId}
            editForm={editForm}
            changeEditForm={changeEditForm}
            commentEditItem={commentEditItem}
          />
        )}
        {car.comments.length > 0 && carId ? (
          <CommentsList
            carId={carId}
            addCommentItem={addCommentItem}
            changeEditForm={changeEditForm}
          />
        ) : (
          <p className={styles.titleComment}>Комментариев нет</p>
        )}
      </div>
      {messageDeleteComment && (
        <div className={styles.deleteMessage}>{messageDeleteComment}</div>
      )}
    </div>
  );
};
