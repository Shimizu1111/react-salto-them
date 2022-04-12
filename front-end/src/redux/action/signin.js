import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const initialState = {
  id: 0,
  name: "",
  token: "",
}

export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    signinId: (state, action) => {
      state.id = action.payload
    },
    signinToken: (state, action) => {
      state.token = action.payload
    },
    signinName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { signinId, signinToken, signinName,  } = signinSlice.actions

// const rootReducer = combineReducers({
//     callSignin: signinSlice.reducer,
// })

export default signinSlice.reducer