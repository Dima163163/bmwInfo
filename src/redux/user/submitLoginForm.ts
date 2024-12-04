import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { URL } from '../../constants/constants';
import { UserType } from '../../types/user';


export const submitLoginForm = createAsyncThunk<
  UserType,
  { email: string; password: string },
  { rejectValue: string }
>('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const {data} = await axios.post(`${URL}/users/login`, {
      email,
      password
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data);
    }
  }
});
