"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gangnam() {

  const mapName = "강남구"
  const addressName = "서울특별시 강남구"
  const prevId = 11
  // const mapId = 11230;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangnam" d="M144.854 26.7659L82.6584 8.10723L20.4628 1.8877L1.8042 24.6927L26.6824 91.0346L39.1215 115.913L47.4142 167.743L88.8779 200.913L107.537 244.45L122.049 263.109L155.22 252.743L171.805 234.084L215.342 238.231L221.562 267.255L242.294 279.695L258.879 261.036L327.294 256.889L300.343 192.621L273.391 171.889L258.879 149.084L236.074 151.157L169.732 97.2541L171.805 43.3514L144.854 26.7659Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
