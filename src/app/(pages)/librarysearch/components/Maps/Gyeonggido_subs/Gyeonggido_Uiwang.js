"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Uiwang() {

  const mapName = "의왕시"
  const addressName = "경기도 의왕시"
  const prevId = 31
  // const mapId = 31170;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 475" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Uiwang" d="M120.072 130.991L87.739 264.636L25.2278 406.903L1.5166 460.792L87.739 473.726L111.45 393.97L189.051 348.703L258.028 277.569L290.362 184.88L327.007 1.65723L163.184 64.1687L130.85 85.7244L120.072 130.991Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
