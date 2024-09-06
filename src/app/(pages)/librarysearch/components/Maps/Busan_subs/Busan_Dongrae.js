"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Dongrae() {

  const mapName = "동래구"
  const addressName = "부산광역시 동래구"
  const prevId = 21
  // const mapId = 21060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="231" viewBox="0 0 329 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dongrae" d="M256.673 201.44L152.27 140.027L1.80762 127.744L72.4328 1.84692L222.895 32.5535L315.015 90.8961L327.298 229.076L256.673 201.44Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
