import { createAsyncThunk } from '@reduxjs/toolkit';
import { Car } from '../../types/cars';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';
import { selectCar } from './carsSlice';
import { RootState } from '../store';

export const getCar = createAsyncThunk<Car, string, { rejectValue: string }>(
  'cars/getCar',
  async (carId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/cars/${carId}`);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue('Ошибка загрузки карточки автомобиля');
      }
    }
  },
  {
    condition: (carId, {getState}) => {
      const car = selectCar(getState() as RootState);
      if (car && car.id) {
        return car.id !== carId
      }
    }
  }
);
