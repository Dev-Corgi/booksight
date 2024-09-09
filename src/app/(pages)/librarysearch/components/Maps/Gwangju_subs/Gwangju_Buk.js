"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gwangju_Buk() {

  const mapName = "북구"
  const addressName = "광주광역시 북구"
  const prevId = 24
  // const mapId = 24040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 341" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buk" d="M125.663 1.25269L78.4548 29.8262L38.7003 31.0686L1.43042 69.5807L12.6114 84.4887L17.5807 152.817L31.2463 176.421L11.369 187.602L1.43042 214.933L66.0315 213.691L94.605 232.326L115.725 248.476L136.844 247.234L164.175 231.083L196.476 249.718L218.838 279.534L253.623 298.169L288.408 339.166L316.982 293.2L305.801 265.869V234.81L326.92 214.933L294.62 172.694L249.896 173.936L221.323 146.605L196.476 83.2464L157.964 26.0993L125.663 1.25269Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
