"use client"

import { configureStore } from '@reduxjs/toolkit';
import scaleReducer from './scaleSlice';

const store = configureStore({
  reducer: {
    scale: scaleReducer
  }
});

export default store;