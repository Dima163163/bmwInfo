import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import carsReducer from './cars/carsSlice'
import commentsReducer from './comments/commentsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cars: carsReducer,
    comments: commentsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;