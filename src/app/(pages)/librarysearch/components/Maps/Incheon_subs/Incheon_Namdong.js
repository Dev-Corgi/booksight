"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Namdong() {

  const mapName = "남동구"
  const addressName = "인천광역시 남동구"
  const prevId = 23
  // const mapId = 23050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 335" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Namdong" d="M1.58057 285.939L118.678 174.796L104.785 123.194L100.815 45.7907L142.494 2.12744L251.652 47.7753L287.377 29.9131L327.071 59.6835L184.173 333.572L61.1214 329.602L1.58057 285.939Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
