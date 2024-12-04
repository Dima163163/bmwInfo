import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

export const deleteComment = createAsyncThunk<
  string,
  { carId: string, commentId: string },
  { rejectValue: string }
>(
  'comments/deleteComment',
  async ({ carId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${URL}/comments/${carId}/${commentId}`);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
