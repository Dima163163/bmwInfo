import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constants/constants';
import axios, {AxiosError} from 'axios';
import { UserState, UserType } from '../../types/user';

export const submitRegistrationForm = createAsyncThunk<
  UserType,
  { email: string; password: string, name: string },
  { rejectValue: string }
>(
  'user/registration',
  async ({email, name, password}, {rejectWithValue}) => {
    try {
      const {data} = await axios.post(`${URL}/users/registration`, {
        email,
        name,
        password
      });

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data)
      }
    }
  }
);
