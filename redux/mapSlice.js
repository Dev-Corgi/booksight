"use client";
import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    mapId: 10,
    prevMapId: 10,
    mapName: "대한민국",
    addressName: "대한민국",
    resultNum:undefined,
  },
  reducers: {
    setMapId(state, action) {
      state.mapId = action.payload;
    },
    setPrevMapId(state, action) {
      state.prevMapId = action.payload;
    },
    setMapName(state, action) {
      state.mapName = action.payload;
    },
    setAddressName(state, action) {
      state.addressName = action.payload;
    },
    setResultNum(state, action) {
      state.resultNum = action.payload;
    },
  },
});

export const { setMapId, setMapName,setPrevMapId,setAddressName,setResultNum } = mapSlice.actions;
export default mapSlice.reducer;
