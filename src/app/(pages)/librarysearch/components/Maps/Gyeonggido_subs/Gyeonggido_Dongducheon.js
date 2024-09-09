"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Dongducheon() {

  const mapName = "동두천시"
  const addressName = "경기도 동두천시"
  const prevId = 31
  // const mapId = 31080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 335" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dongducheon" d="M121.841 1.48926L11.2675 143.21L1.92334 203.947L67.3328 245.996L93.8081 303.619L233.971 333.209L276.02 294.274H314.954L327.413 236.652L294.709 175.915L202.824 85.5872V17.0629L121.841 1.48926Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
