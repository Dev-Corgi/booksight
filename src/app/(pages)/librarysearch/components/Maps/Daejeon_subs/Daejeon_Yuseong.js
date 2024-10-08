"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daejeon_Yuseong() {

  const mapName = "유성구"
  const addressName = "대전광역시 유성구"
  const prevId = 25
  // const mapId = 25040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 550" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yuseong" d="M327.865 195.945L293.802 115.203L298.848 98.8025L297.587 29.4151L263.524 1.66016L243.338 21.8456L209.275 18.0608L216.845 79.8787L209.275 129.081L160.073 182.067L98.2555 187.114L57.8847 235.054V372.567L33.9145 416.723L26.345 478.541L2.37476 502.511L93.2092 547.928L172.689 447.001L199.183 410.415L228.199 304.442L287.494 299.395L308.941 279.21L327.865 195.945Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
