"use client"

import { createSlice } from '@reduxjs/toolkit';

const rentModalSlice = createSlice({
  name: 'rentModal',
  initialState: {
    isOnlyPossible : true,
    resultNum : undefined,
  },
  reducers: {
    setIsOnlyPossible(state, action) {
      state.isOnlyPossible = action.payload;
    },
    setResultNum(state, action) {
      state.resultNum = action.payload;
    },
  }
});

export const { setIsOnlyPossible,setResultNum } = rentModalSlice.actions;
export default rentModalSlice.reducer;