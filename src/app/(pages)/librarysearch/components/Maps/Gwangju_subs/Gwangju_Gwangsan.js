"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gwangju_Gwangsan() {

  const mapName = "광산구"
  const addressName = "광주광역시 광산구"
  const prevId = 24
  // const mapId = 24050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 364" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gwangsan" d="M304.413 43.0626L242.585 70.779L166.898 34.5345L163.699 1.48804H135.983L114.663 78.2411L60.296 85.7032L12.3253 132.608L30.4476 166.72L2.73117 188.041C2.73117 188.041 -0.466878 257.332 2.73117 261.596C5.92921 265.86 37.9097 288.246 37.9097 288.246L148.775 286.114L186.086 333.019L178.624 360.735L245.783 308.5V279.718L273.499 241.341L304.413 148.598L326.8 134.74L315.074 114.486L311.876 52.6568L304.413 43.0626Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
