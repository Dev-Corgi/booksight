"use client"

import { createSlice } from '@reduxjs/toolkit';

const scaleSlice = createSlice({
  name: 'scale',
  initialState: {
    scale: 0    
  },
  reducers: {
    setViewportWidth(state, action) {
      state.scale = action.payload;
    }
  }
});

export const { setViewportWidth } = scaleSlice.actions;
export default scaleSlice.reducer;