"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gwanak() {

  const mapName = "관악구"
  const addressName = "서울특별시 관악구"
  const prevId = 11
  // const mapId = 11210;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 303" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gwanak" d="M83.7095 1.65625L196.923 7.31697L233.718 86.5667L304.477 103.549L327.119 162.986L219.566 301.673L151.638 298.843L32.7632 196.95L10.1205 75.2454L1.62939 49.7722L44.0846 32.7901L69.5577 1.65625H83.7095Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
