"use client"

import { configureStore } from '@reduxjs/toolkit';
import scaleReducer from './scaleSlice';
import mapReducer from './mapSlice';
import locationReducer from "./locationSlice"
import rentModalReducer from "./rentModalSlice"
const store = configureStore({
  reducer: {
    scale: scaleReducer,
    map: mapReducer,
    location: locationReducer,
    rentModal: rentModalReducer
  }
});

export default store;