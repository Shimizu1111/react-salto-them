import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../action/signin';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
  },
})