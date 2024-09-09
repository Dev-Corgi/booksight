"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Songpa() {

  const mapName = "송파구"
  const addressName = "서울특별시 송파구"
  const prevId = 11
  // const mapId = 11240;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 399" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Songpa" d="M170.708 2.3291L102.328 103.532L1.125 117.208V193.794L88.6518 264.909L118.739 262.174L137.886 292.261L173.443 319.614L211.736 396.199L326.615 253.969L291.057 160.971V144.56L233.618 125.414L206.266 65.239L209.001 37.8869L170.708 2.3291Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
