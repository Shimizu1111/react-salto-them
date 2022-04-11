import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const initialState = {
  value: 0,
  token: "",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    signin: (state, action) => {
      state.token += action.payload
    },
    decrement: (state, action) => {
      state.token += action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount,  } = counterSlice.actions

const rootReducer = combineReducers({
    callCounter: counterSlice.reducer,
})

export default rootReducer