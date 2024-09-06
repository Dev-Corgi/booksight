"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Yeongdo() {

  const mapName = "영도구"
  const addressName = "부산광역시 영도구"
  const prevId = 21
  // const mapId = 21040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="334" viewBox="0 0 329 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongdo" d="M218.998 1.86938L29.1292 15.4314L2.00488 132.969L241.602 331.88L327.495 286.673L277.767 128.449L273.247 42.5555L218.998 1.86938Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
