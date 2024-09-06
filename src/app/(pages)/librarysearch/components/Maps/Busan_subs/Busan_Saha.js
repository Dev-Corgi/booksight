"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Saha() {

  const mapName = "사하구"
  const addressName = "부산광역시 사하구"
  const prevId = 21
  // const mapId = 21100;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="552" viewBox="0 0 329 552" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Saha" d="M327.378 193.324L246.963 204.811L227.816 277.568L254.621 377.13V511.155L189.523 411.593L89.9615 549.448L17.2049 323.52L1.8877 13.3467L231.645 1.85889L273.768 66.9569L327.378 193.324Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
