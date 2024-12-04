import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cars } from '../../types/cars';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

export const getCarsBySeries = createAsyncThunk<
  Cars,
  string,
  { rejectValue: string }
>('cars/getCarsBySeries', async (seriesNumber, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${URL}/cars/carseries/${seriesNumber}`);

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data);
    }
  }
});
