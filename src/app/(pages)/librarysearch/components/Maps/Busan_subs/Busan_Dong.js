"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Dong() {

  const mapName = "동구"
  const addressName = "부산광역시 동구"
  const prevId = 21
  // const mapId = 21030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 340" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M245.305 305.686L60.8613 338.235L1.18799 246.013L39.1619 121.242L169.358 1.89575L310.404 83.2683L326.678 186.34L245.305 305.686Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
