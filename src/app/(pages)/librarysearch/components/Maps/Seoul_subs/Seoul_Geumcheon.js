"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Geumcheon() {

  const mapName = "금천구"
  const addressName = "서울특별시 금천구"
  const prevId = 11
  // const mapId = 11180;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="442" viewBox="0 0 329 442" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Geumcheon" d="M280.376 279.888L242.638 81.7635L204.9 25.1565L105.838 1.57031L2.05811 44.0256L171.879 440.274L327.548 345.929L299.245 294.04L280.376 279.888Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
