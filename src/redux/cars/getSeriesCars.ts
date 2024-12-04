import { createAsyncThunk } from '@reduxjs/toolkit';
import { SeriesCars } from '../../types/cars';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';
import { selectSecriesCars } from './carsSlice';
import { RootState } from '../store';

export const getSeriesCars = createAsyncThunk<
  SeriesCars,
  void,
  { rejectValue: string }
>('cars/getSeriesCars', async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/cars/series`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  },
  {
    condition: (_, {getState}) => {
      return selectSecriesCars(getState() as RootState).length === 0;
    }
  }
);
