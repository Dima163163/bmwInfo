
import { useEffect, useState } from 'react';
import styles from './CarsCatalog.module.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCars } from '../../redux/cars/getCars';
import { selectCars, selectCarsStatus } from '../../redux/cars/carsSlice';
import { Cars } from '../../types/cars';
import { Status } from '../../types/status';
import { Loader } from '../Loader/Loader';
import { CarCard } from '../CarCard/CarCard';

export const CarsCatalog = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const [arrCars, setArrCars] = useState<Cars>([]);
  const status = useAppSelector(selectCarsStatus)


  useEffect(() => {
    dispatch(getCars());
    setArrCars(cars)
  }, [cars])


  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <ul className={styles.carsList}>
      {arrCars && arrCars.length > 0 && arrCars.map((car) => <CarCard key={car.id} car={car} />)}
    </ul>
  )
}