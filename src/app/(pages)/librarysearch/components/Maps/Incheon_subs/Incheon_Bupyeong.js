"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Bupyeong() {

  const mapName = "부평구"
  const addressName = "인천광역시 부평구"
  const prevId = 23
  // const mapId = 23060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Bupyeong" d="M1.54297 75.2936L35.5071 140.392L4.37327 247.945L60.9802 313.043L120.417 250.775L276.087 315.873L327.033 290.4L242.123 216.811L239.292 78.124L301.56 27.1778V1.70459L18.525 10.1956L1.54297 75.2936Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
