"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Suyeong() {

  const mapName = "수영구"
  const addressName = "부산광역시 수영구"
  const prevId = 21
  // const mapId = 21140;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="331" height="321" viewBox="0 0 331 321" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Suyeong" d="M1.62207 152.293L114.292 290.001L147.675 319.211L176.886 239.925L327.112 214.888L243.653 173.158L105.946 2.06738L18.3139 56.3156L1.62207 152.293Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
