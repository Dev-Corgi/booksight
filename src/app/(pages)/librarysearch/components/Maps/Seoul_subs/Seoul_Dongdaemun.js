"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Dongdaemun() {

  const mapName = "동대문구"
  const addressName = "서울특별시 동대문구"
  const prevId = 11
  // const mapId = 11060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 396" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dongdaemun" d="M1.90918 228.847L33.1206 157.507L117.837 99.5425L175.801 28.2022L314.023 1.44971L327.399 291.27L296.188 393.821L175.801 335.857L113.378 295.728L64.332 304.646L37.5793 313.563L6.36805 295.728L1.90918 228.847Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
