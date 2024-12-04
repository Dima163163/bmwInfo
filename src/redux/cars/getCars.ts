import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cars } from '../../types/cars';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

import { RootState } from '../store';
import { selectCars } from './carsSlice';


export const getCars = createAsyncThunk<Cars, void, {rejectValue: string}>(
  'cars/getCars',
  async(_, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(`${URL}/cars`);

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue("Ошибка загрузки каталога автомобилей")
      }
    }
  },
  {
    condition: (_, {getState}) => {
      return selectCars(getState() as RootState).length === 0
    }
  }
)