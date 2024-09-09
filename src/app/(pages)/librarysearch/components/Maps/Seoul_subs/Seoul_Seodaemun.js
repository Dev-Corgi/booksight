"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Seodaemun() {

  const mapName = "서대문구"
  const addressName = "서울특별시 서대문구"
  const prevId = 11
  // const mapId = 11130;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 333" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seodaemun" d="M136.293 315.814L2.26758 162.642L52.0484 120.52L109.488 116.69L136.293 70.7389L182.244 55.4216L212.879 5.64083L266.489 1.81152L270.318 43.9338L300.952 66.9096L297.123 143.495L277.977 185.618L327.758 266.033L281.806 308.155L247.342 331.131L136.293 315.814Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
