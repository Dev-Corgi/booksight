"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Dong() {

  const mapName = "동구"
  const addressName = "인천광역시 동구"
  const prevId = 23
  // const mapId = 23020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 286" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M129.725 222.463L234.347 284.461L249.846 249.588L327.344 179.84L214.972 79.0928L203.348 13.2198L152.974 1.59521L90.9761 67.4681L1.854 125.591L129.725 222.463Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
