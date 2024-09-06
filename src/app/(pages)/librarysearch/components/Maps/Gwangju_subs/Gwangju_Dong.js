"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gwangju_Dong() {

  const mapName = "동구"
  const addressName = "광주광역시 동구"
  const prevId = 24
  // const mapId = 24010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="433" viewBox="0 0 329 433" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M39.6396 157.676L12.2875 67.4136L6.81702 26.3855L61.5212 1.76855L127.166 37.3263L170.93 111.177L258.456 146.735L326.837 236.997L263.927 332.729L151.783 384.698L121.696 431.197L1.34668 329.994L4.08185 212.38L39.6396 157.676Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
