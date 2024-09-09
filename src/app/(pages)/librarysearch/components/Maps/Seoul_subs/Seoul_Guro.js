"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Guro() {

  const mapName = "구로구"
  const addressName = "서울특별시 구로구"
  const prevId = 11
  // const mapId = 11170;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Guro" d="M327.135 158.642L321.217 87.626L300.504 28.446L267.955 1.81494L241.324 40.282L217.652 37.323L188.062 7.73296H137.759L108.169 40.282L57.866 49.159L1.64502 111.298L46.03 238.535L143.677 194.15L226.529 140.888L250.201 173.437L327.135 158.642Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
