import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const initialState = {
  icon: false,
}

export const setIconSlice = createSlice({
  name: 'setIcon',
  initialState,
  reducers: {
    setIcon: (state) => {
      state.icon = true
    },
    removeIcon: (state) => {
      state.icon = false
    },
  },
})

export const { setIcon, removeIcon, } = setIconSlice.actions

export default setIconSlice.reducer