"use client"

import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location : {latitude : 37.3595704, longitude : 127.105399},
    zoom : 10,
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    
    setZoom(state, action) {
      state.zoom = action.payload;
    },
  }
});

export const { setLocation,setZoom } = locationSlice.actions;
export default locationSlice.reducer;