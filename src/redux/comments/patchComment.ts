import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentCar } from '../../types/comments';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';

export const patchComment = createAsyncThunk<
  CommentCar,
  { commentId: string, text: string },
  { rejectValue: string }
>(
  'comments/patchComment',
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${URL}/comments/${commentId}`, {
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
