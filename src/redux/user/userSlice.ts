import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { submitRegistrationForm } from './submitRegistrationForm';
import { submitLoginForm } from './submitLoginForm';
import { Status } from '../../types/status';
import { UsersData, UserState, UserType } from '../../types/user';
import { getUsers } from './getUsers';

const initialState: UserState = {
  user: {
    name: '',
    id: ''
  },
  users: [],
  status: Status.IDLE,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectUsers: (state) => state.users,
    selectUserById: (state, id) => state.users.find(user => user.id === id),
    selectUsersStatus: (state) => state.status
  },
  reducers: {
    logOut: (state) => {
      state.user.name = '';
      state.user.id = '';
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(submitRegistrationForm.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });

    addCase(
      submitRegistrationForm.fulfilled,
      (state, { payload }: PayloadAction<UserType>) => {
        state.status = Status.FULFILLED;
        state.user = payload;
        state.error = null;
      }
    );

    addCase(
      submitRegistrationForm.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.status = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
        state.user.name = '';
        state.user.id = '';
      }
    );

    addCase(submitLoginForm.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });

    addCase(
      submitLoginForm.fulfilled,
      (state, { payload }: PayloadAction<UserType>) => {
        state.status = Status.FULFILLED;
        state.user = payload;
        state.error = null;
      }
    );

    addCase(
      submitLoginForm.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.status = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
        state.user.name = '';
        state.user.id = '';
      }
    );

    addCase(getUsers.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    addCase(
      getUsers.fulfilled,
      (state, { payload }: PayloadAction<UsersData>) => {
        state.status = Status.FULFILLED;
        state.users = payload;
        state.error = null;
      }
    );
    addCase(
      getUsers.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.status = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );
  }
});

export const { logOut, clearError } = userSlice.actions;
export const { selectUsers, selectUser, selectUsersStatus, selectUserById } = userSlice.selectors;
export default userSlice.reducer;
