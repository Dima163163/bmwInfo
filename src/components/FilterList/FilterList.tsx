import classNames from 'classnames';
import styles from './FilterList.module.sass';
import { useContext, useState } from 'react';
import { SeriesCars, SeriesValue } from '../../types/cars';
import { SeriesContext } from '../../context/SeriesContext/SeriesContextProvider';

interface FilterListProps {
  arrItems: SeriesCars;
  filerCars: (series: SeriesValue) => void;
}

export const FilterList = ({ arrItems, filerCars }: FilterListProps) => {
  const { activeItemSeries, changeActiveSeries } = useContext(SeriesContext);

  const handleCahgeSeries = (value: SeriesValue) => {
    if (activeItemSeries !== value) {
      changeActiveSeries(value);
      filerCars(value);
    }
  };

  return (
    <ul className={styles.filterList}>
      <li key='all' className={styles.filterItem}>
        <button
          className={classNames(styles.filterBtn, {
            [styles.filterBtnActive]: activeItemSeries === 'all'
          })}
          onClick={() => {
            handleCahgeSeries('all');
          }}
        >
          Все
        </button>
      </li>
      {arrItems.map((item) => (
        <li key={item} className={styles.filterItem}>
          <button
            className={classNames(styles.filterBtn, {
              [styles.filterBtnActive]: activeItemSeries === item
            })}
            onClick={() => {
              handleCahgeSeries(item);
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
