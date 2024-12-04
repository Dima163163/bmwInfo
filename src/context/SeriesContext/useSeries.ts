import { useContext } from 'react';
import { SeriesContext } from './SeriesContextProvider';

export const useSeries = () => useContext(SeriesContext);