"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Miryang() {

  const mapName = "밀양시"
  const addressName = "경상남도 밀양시"
  const prevId = 38
  // const mapId = 38080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 274" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Miryang" d="M163.766 265.578L209.344 229.413L235.106 200.679L257.895 202.165L250.959 177.889L286.63 165.008L285.143 126.366L301.988 94.659L292.575 86.2368V69.888L322.3 52.5484L326.759 30.75L314.869 12.9149L295.052 31.7408L275.235 11.4286L250.959 1.52026L215.289 14.4012L196.959 44.6217L168.72 50.5667L154.353 67.9064L113.233 63.4476L60.7188 49.0805L11.1769 71.8697L15.6357 94.659L1.26855 107.54L9.69066 126.366L2.75483 143.705L9.69066 172.44L39.4158 178.385L59.2325 205.633L56.26 240.312L83.0126 241.798L115.71 272.019L163.766 265.578Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
