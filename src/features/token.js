import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: null,
  },
  reducers: {
    setToken: (state,action) => {         
    state.value=action.payload
    console.log(action.payload)
    },
    unSetToken: (state,action) => {         
      state.value=action.payload
      },
   
  },
})


export const {setToken,unSetToken} = tokenSlice.actions

export default tokenSlice.reducer