"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Ulsan_Buk() {

  const mapName = "북구"
  const addressName = "울산광역시 북구"
  const prevId = 26
  // const mapId = 26040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="397" viewBox="0 0 329 397" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buk" d="M99.1771 221.853H46.5045L10.0388 243.462L1.9353 131.364L5.98703 75.99L118.085 1.70801L276.103 67.8865L295.011 138.117L327.425 185.387L323.374 238.06L300.414 269.123L254.494 281.278L213.976 320.445V394.727L115.384 320.445L105.93 250.215L99.1771 221.853Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
