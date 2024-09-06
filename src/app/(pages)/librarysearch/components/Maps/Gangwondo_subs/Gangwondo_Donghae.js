"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Donghae() {

  const mapName = "동해시"
  const addressName = "강원도 동해시"
  const prevId = 32
  const mapId = 32040;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="378" viewBox="0 0 329 378" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M163.312 310.938L85.2387 376.916L35.7555 370.318L1.66699 331.831L52.25 247.16L8.26478 204.275L20.3604 161.389L131.423 129.5L161.113 1.94299L244.685 65.7215L263.378 108.607L235.888 140.496L293.068 219.669L327.157 279.049L285.371 308.739L163.312 310.938Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
