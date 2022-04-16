import { configureStore } from '@reduxjs/toolkit';
import signReducer from '../action/signin';
import setIconReducer from '../action/setIcon'

export const store = configureStore({
  reducer: {
      signin: signReducer,
      setIcon: setIconReducer,
  },
})