import { useEffect, useState } from 'react';
import { CarCard } from '../../components/CarCard/CarCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectSecriesCars, selectSeriesStatus } from '../../redux/cars/carsSlice';
import { getCars } from '../../redux/cars/getCars';
import { Status } from '../../types/status';
import { Loader } from '../../components/Loader/Loader';

import styles from './CarsCatalogPage.module.sass';
import { FilterList } from '../../components/FilterList/FilterList';
import { SeriesValue } from '../../types/cars';
import { getCarsBySeries } from '../../redux/cars/getCarsBySeries';
import { getSeriesCars } from '../../redux/cars/getSeriesCars';
import { CarsCatalog } from '../../components/CarsCatalog/CarsCatalog';

export const CarsCatalogPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectSeriesStatus);
  const series = useAppSelector(selectSecriesCars);

  useEffect(() => {
    dispatch(getSeriesCars());
  }, []);

  const filerCars = (series: SeriesValue) => {
    dispatch(getCarsBySeries(series))
  }


  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles.carsCatalogPage}>
      <h1 className={styles.carsCatalogTitle}>Модельный ряд</h1>
      <div className={styles.carsCatalogFilterWrapper}>
        <div className={styles.seriesTitle}>Серия</div>
        <FilterList arrItems={series} filerCars={filerCars}/>
      </div>
      <div className={styles.carsCatalogWrapper}>
        <CarsCatalog/>
      </div>
    </div>
  );
};
