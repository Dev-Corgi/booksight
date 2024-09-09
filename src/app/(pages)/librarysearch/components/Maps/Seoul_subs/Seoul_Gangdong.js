"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gangdong() {

  const mapName = "강동구"
  const addressName = "서울특별시 강동구"
  const prevId = 11
  // const mapId = 11250;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 365" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangdong" d="M1 81.5642V171.978L48.0152 222.61L37.1656 266.009L80.5641 338.34L156.512 363.656L170.978 302.174L326.49 186.444L312.024 85.1807L279.475 16.4662L131.196 2L1 81.5642Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
