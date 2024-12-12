import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersData } from '../../types/user';
import axios from 'axios';
import { URL } from '../../constants/constants';
import { selectUser, selectUsers } from './userSlice';
import { RootState } from '../store';

export const getUsers = createAsyncThunk<
  UsersData,
  void,
  { rejectValue: string }
>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    const { data } = await axios.get(`${URL}/users`);

    if (!data.length) {
      rejectWithValue('Нет пользователей');
      return;
    }
    return data;
  },
  {
    condition: (_, { getState }) => {
      const user  = selectUser(getState() as RootState);
      const lengthUsers = selectUsers(getState() as RootState).length === 0
      if(user && user.id || lengthUsers) {
        return true;
      }
      return false;
    }
  }
);
