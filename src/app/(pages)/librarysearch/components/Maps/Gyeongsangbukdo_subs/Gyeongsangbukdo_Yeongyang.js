"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Yeongyang() {

  const mapName = "영양군"
  const addressName = "경상북도 영양군"
  const prevId = 37
  // const mapId = 37340;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="485" viewBox="0 0 329 485" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongyang" d="M290.146 261.691L308.647 208.928L283.978 173.295L327.149 119.161L288.09 65.0267L289.46 22.5417L266.162 15.6893L253.143 36.9318L220.251 17.0598L168.173 1.29919L136.651 29.3941L120.891 63.6562L70.8682 96.5479L43.4585 126.699L1.65869 138.348L5.77019 155.479L13.3078 172.61L11.9373 188.37L17.4193 242.504L16.0488 332.956L30.4388 368.589L59.2191 372.7L86.6288 417.926L133.91 423.408L155.153 452.874V470.005L185.304 468.634L242.864 483.024L255.884 464.523L264.792 398.054L240.123 356.94L259.995 308.973L252.457 276.081L264.106 263.062L290.146 261.691Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
