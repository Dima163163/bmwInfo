import { createContext, ReactNode, useState} from 'react';
import { SeriesValue } from '../../types/cars';


interface SeriesContextType {
  activeItemSeries: string;
  changeActiveSeries: (series: SeriesValue) => void;
}

interface  SeriesContextProviderProps {
  children?: ReactNode
}

const defaultState = {
  activeItemSeries: '',
  changeActiveSeries: () => {}
}

export const SeriesContext = createContext<SeriesContextType>(defaultState);


export const SeriesContextProvider = ({children}: SeriesContextProviderProps) => {
  const [activeItemSeries, setActiveItemSeries] = useState('all');

  const changeActiveSeries = (series: SeriesValue) => {
    setActiveItemSeries(series)
  }

  return (
    <SeriesContext.Provider value={{activeItemSeries, changeActiveSeries}}>
      {children}
    </SeriesContext.Provider>
  )
}