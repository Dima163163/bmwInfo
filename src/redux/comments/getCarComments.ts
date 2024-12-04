import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentsCar } from '../../types/comments';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

export const getCarComments = createAsyncThunk<
  CommentsCar,
  string,
  { rejectValue: string }
>(
  'comments/getCarComments',
  async (carId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/comments?carId=${carId}`);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
