import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentCar } from '../../types/comments';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

export const postComment = createAsyncThunk<
  CommentCar,
  { carId: string, date: string, userId: string, text: string },
  { rejectValue: string }
>(
  'comments/postComment',
  async ({ carId, date, userId, text }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL}/comments/${carId}`, {
        userId,
        date,
        text
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
