import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentsCar } from '../../types/comments';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';
import { selectComment } from './commentsSlice';
import { RootState } from '../store';

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
  },
  {
    condition: (_, {getState}) => {
      const comment = selectComment(getState() as RootState)
      if (comment && comment.text) {
        return true
      }
      return false;
    },
  }
);
