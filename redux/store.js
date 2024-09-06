"use client"

import { configureStore } from '@reduxjs/toolkit';
import scaleReducer from './scaleSlice';
import mapReducer from './mapSlice';
const store = configureStore({
  reducer: {
    scale: scaleReducer,
    map: mapReducer
  }
});

export default store;