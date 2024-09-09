"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Michuhol() {

  const mapName = "미추홀구(남구)"
  const addressName = "인천광역시 미추홀구(남구)"
  const prevId = 23
  // const mapId = 23030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 319" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Michuhol" d="M25.0111 293.548L1.76172 193.908L44.939 67.6975L131.293 1.271L217.648 11.2351L287.396 90.9467L304.002 230.442L327.252 316.797L201.041 276.941L25.0111 293.548Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
