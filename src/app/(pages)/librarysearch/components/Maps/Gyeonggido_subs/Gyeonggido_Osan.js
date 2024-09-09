"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Osan() {

  const mapName = "오산시"
  const addressName = "경기도 오산시"
  const prevId = 31
  // const mapId = 31140;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 276" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Osan" d="M292.785 261.452L155.161 274.559L100.549 243.976L93.9953 167.518L2.24658 106.352L61.2279 1.49658H183.56L214.143 62.6622L251.279 154.411L314.63 163.149L327.737 217.762L292.785 261.452Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
