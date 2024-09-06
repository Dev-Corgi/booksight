"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Uijeongbu() {

  const mapName = "의정부시"
  const addressName = "경기도 의정부시"
  const prevId = 31
  // const mapId = 31030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="283" viewBox="0 0 329 283" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Uijeongbu" d="M327.215 86.3001L291.902 136.966L282.69 172.279L208.994 264.398L156.793 258.257L127.622 281.287L60.0672 230.621L33.9665 144.643L1.72461 84.7648L53.9258 43.3108L121.48 58.6641L256.589 1.85693L304.185 40.2402L327.215 86.3001Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
