"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Seongdong() {

  const mapName = "성동구"
  const addressName = "서울특별시 성동구"
  const prevId = 11
  // const mapId = 11040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="296" viewBox="0 0 329 296" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seongdong" d="M79.5698 9.24714L68.4736 75.8246L24.0886 120.21L1.896 157.197L27.7873 242.268L138.75 253.364L246.014 294.051L319.988 123.908L327.386 83.2221L223.821 46.2346L186.833 1.84961L142.449 5.54837L109.16 27.7409L79.5698 9.24714Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
