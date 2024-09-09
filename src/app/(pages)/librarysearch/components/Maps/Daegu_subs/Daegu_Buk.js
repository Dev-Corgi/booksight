"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Buk() {

  const mapName = "북구"
  const addressName = "대구광역시 북구"
  const prevId = 22
  // const mapId = 22050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buk" d="M246.607 347.587L193.501 354.44L188.362 304.76L126.69 294.481L54.7396 318.465L1.6333 292.768L47.8872 210.539L65.0182 128.31L46.174 54.6463L71.8706 28.9498L121.551 61.4988L239.755 1.54004L304.853 140.302L327.123 225.957L313.418 282.489L284.296 335.596L246.607 347.587Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}
