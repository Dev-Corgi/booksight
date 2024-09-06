"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Nam() {

  const mapName = "남구"
  const addressName = "부산광역시 남구"
  const prevId = 21
  // const mapId = 21070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="379" viewBox="0 0 328 379" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nam" d="M286.642 377.603L199.397 367.536L169.197 317.203L78.597 350.759L48.3968 266.869L11.4856 203.114L1.41895 139.358L92.0193 11.8465L162.486 1.77979L253.086 112.513L283.286 132.647L326.909 216.536L286.642 377.603Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>








  );
}
