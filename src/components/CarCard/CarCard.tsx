import { Link } from 'react-router-dom';
import { URL } from '../../constants/constants';
import { Car } from '../../types/cars';
import classNames from 'classnames';
import styles from './CarCard.module.sass';

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <li className={styles.carCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.cardCarImage}
          src={`${URL}/public/images/cars/${car.images[0]}`}
          alt={car.generation}
        />
      </div>
      <div className={styles.cardDescr}>
        <h3 className={styles.descrTitle}>{car.brand}</h3>
        <p className={styles.descrText}>Серия модели: {car.series}</p>
        <p className={styles.descrText}>
          Поколение: {car.generation}({car.model})
        </p>
        <p className={styles.descrText}>
          Начало производства: {car.startProd} год
        </p>
        <p className={classNames(styles.descrText, styles.descrTextLast)}>
          Окончание производства: {car.endProd} год
        </p>
      </div>
      <Link className={styles.cardLink} to={`/cars/${car.id}`}>
        Подробнее...
      </Link>
    </li>
  );
};
