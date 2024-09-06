"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setPrevMapId,
  setAddressName,
} from "@redux/mapSlice";
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollabukdo_Muju() {
  const mapName = "무주군";
  const addressName = "전라북도 무주군";
  const prevId = 35;
  // const mapId = 35330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg width="329" height="300" viewBox="0 0 329 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Muju" d="M37.392 206.809L46.0949 184.182L21.7267 154.011V133.704L2 90.1898L8.38219 35.0712L75.1047 74.5245L86.1284 44.3543L75.1047 16.5049L89.6096 2L113.978 29.8494L131.964 11.8633L151.691 44.3543L189.403 52.4771L196.946 68.1423L264.249 45.5147L289.777 57.6988L293.258 80.3265L327.49 129.643L299.641 149.95L300.801 175.479L281.074 180.7L267.73 210.871L221.314 242.781L178.38 248.003L166.776 286.876L146.469 298.48L116.299 275.853L84.3878 272.371L79.7463 249.744L64.081 212.611L37.392 206.809Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
