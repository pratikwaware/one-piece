import { createSlice } from '@reduxjs/toolkit'

// this will be the initial state of your redux bject
const initialState = {
  value: 0,
  specifiedValue : 4,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value= state.value - 1
    },
    setValue5: (state, action) => {
      state.specifiedValue = action.payload
    },
    setValue7: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return{
        ...state,
        specifiedValue : action.payload
      }
    },
    resetCounter: (state) => {
      // with any one of below methods you can reset the initial redux state

      // return{
        // method 1
      //   ...state,
      //   value: 0,
      //   specifiedValue : 4,
      // }

      return{
        //method 2
        ...initialState,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setValue7, setValue5, resetCounter } = counterSlice.actions

export default counterSlice.reducer
