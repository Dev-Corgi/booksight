"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Yangcheon() {

  const mapName = "양천구"
  const addressName = "서울특별시 양천구"
  const prevId = 11
  // const mapId = 11150;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 265" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yangcheon" d="M149.566 219.619L193.189 222.974L220.033 263.241L263.656 249.819L297.211 209.552L287.145 132.374L327.411 95.4627L320.7 58.5514L283.789 1.50684H226.744L189.833 88.7516L126.077 92.1071L45.5438 8.21793L1.92139 82.0404L45.5438 259.886L109.3 256.53L149.566 219.619Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
