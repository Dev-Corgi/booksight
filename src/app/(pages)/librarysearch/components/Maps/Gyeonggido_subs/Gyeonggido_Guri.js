"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Guri() {

  const mapName = "구리시"
  const addressName = "경기도 구리시"
  const prevId = 31
  // const mapId = 31120;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 437" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Guri" d="M327.43 267.116L280.538 380.21L164.685 371.935L54.3499 435.378L1.94043 344.351L65.3835 280.908L59.8666 162.297L1.94043 29.8943L95.7257 40.9279L164.685 2.31055L200.545 214.706L327.43 267.116Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
