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
export default function Jeollabukdo_Gimje() {
  const mapName = "김제시";
  const addressName = "전라북도 김제시";
  const prevId = 35;
  // const mapId = 35060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 255" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gimje" d="M67.9309 112.999L2.14648 74.6729L26.7441 47.215L46.1935 42.0667L74.2233 49.5032L89.0964 21.4733L127.423 1.4519H216.661L236.11 9.46046L256.704 20.3292L271.005 43.7828L256.704 75.8169L272.149 113.572L319.056 134.737L308.187 160.479L327.636 184.504L312.191 234.844L300.179 253.149L272.149 249.717L251.555 229.123L246.407 210.818L224.097 195.945L202.932 199.949L187.487 174.78L159.457 161.623L154.309 170.775L156.597 176.496L139.436 190.797L99.9651 201.665L69.647 158.763L60.4944 127.872L70.2191 121.008L67.9309 112.999Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
