"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Sokcho() {

  const mapName = "속초시"
  const addressName = "강원도 속초시"
  const prevId = 32
  const mapId = 32060;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="220" viewBox="0 0 329 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M327.762 151.225L325.454 101.594L301.215 65.8131L313.911 51.9625L287.364 2.33105L110.769 95.8229L35.7443 79.6638L2.27197 113.136L89.9928 218.17L138.47 198.548L199.644 193.932L259.663 160.459L327.762 151.225Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
