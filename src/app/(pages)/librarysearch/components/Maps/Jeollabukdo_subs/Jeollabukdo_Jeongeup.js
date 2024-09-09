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
export default function Jeollabukdo_Jeongeup() {
  const mapName = "정읍시";
  const addressName = "전라북도 정읍시";
  const prevId = 35;
  // const mapId = 35040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 299" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jeongeup" d="M141.265 1.33496L136.188 10.3607L138.444 16.0017L121.521 30.1044L82.5977 40.8225L101.213 58.8739L93.8798 74.6689L43.1101 76.9254L10.956 100.054L1.36621 141.234L9.2637 192.003L22.2382 194.26L38.5973 188.619V214.003L40.2896 235.44L51.0077 240.517L43.6743 262.517L49.8794 297.491L82.0336 296.927L91.6234 276.619L115.316 287.337L181.316 285.081L183.573 257.44L181.316 242.773L216.855 210.055L233.214 224.157L251.83 218.516L283.42 255.183H311.625V237.132L326.856 223.029L311.625 208.926L311.061 177.901L321.779 167.183L309.933 150.823L308.241 94.4127L291.882 78.0536L280.035 92.7203L252.394 89.3357L232.086 69.0279L227.009 50.9764L207.829 35.1814L184.137 40.2584L168.906 15.4376L141.265 1.33496Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
