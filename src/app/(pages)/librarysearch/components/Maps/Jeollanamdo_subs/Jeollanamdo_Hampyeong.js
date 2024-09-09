"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Hampyeong() {

  const mapName = "함평군"
  const addressName = "전라남도 함평군"
  const prevId = 36
  // const mapId = 36430;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 357" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hampyeong" d="M119.983 289.551L107.52 258.029L117.051 233.837L83.3285 209.645L101.656 186.919L52.539 175.923L40.0765 139.269L1.95605 102.614L46.6743 81.3549L66.4676 85.7534L115.584 73.2909L157.37 76.2233L223.348 67.4263L238.743 2.18164L277.596 24.9073L292.991 38.8359L327.446 96.7497L304.72 112.144L309.119 161.994L306.187 184.72L262.934 193.517L244.607 225.773L243.141 289.551L250.472 321.074L230.679 351.13L207.953 338.668L183.028 355.529L139.776 331.337L138.31 297.615L119.983 289.551Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
