"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Anyang() {

  const mapName = "안양시"
  const addressName = "경기도 안양시"
  const prevId = 31
  // const mapId = 31040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="342" viewBox="0 0 329 342" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Anyang" d="M129.405 275.023H190.303L265.901 327.521L305.8 188.925L326.799 167.926L265.901 107.028V50.3298L213.403 54.5296L152.504 2.03125L76.9068 50.3298L24.4084 136.427L1.30908 226.724L72.7069 340.121L129.405 275.023Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
