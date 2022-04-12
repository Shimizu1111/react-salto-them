import { configureStore } from '@reduxjs/toolkit';
import signReducer from '../action/signin';

export const store = configureStore({
  reducer: {
      signin: signReducer,
  },
})