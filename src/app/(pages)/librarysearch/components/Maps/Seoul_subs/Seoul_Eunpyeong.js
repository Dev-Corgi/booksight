"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Eunpyeong() {

  const mapName = "은평구"
  const addressName = "서울특별시 은평구"
  const prevId = 11
  // const mapId = 11120;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="427" viewBox="0 0 330 427" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Eunpyeong" d="M67.7147 425.437L2.6167 369.216L58.8377 333.708L70.6737 126.578L141.69 99.9473L233.419 2.30029L286.681 105.865L328.107 147.291L280.763 197.594V295.241L239.337 298.2L215.665 336.667L180.157 348.503L159.444 384.011L115.059 386.97L67.7147 425.437Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
