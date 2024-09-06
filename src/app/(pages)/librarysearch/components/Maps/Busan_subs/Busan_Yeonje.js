"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Yeonje() {

  const mapName = "연제구"
  const addressName = "부산광역시 연제구"
  const prevId = 21
  // const mapId = 21130;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="224" viewBox="0 0 330 224" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeonje" d="M13.5868 68.9096L96.4946 121.111L167.12 170.241L170.191 222.443L234.674 213.231V142.605L326.794 102.687L256.169 75.0509L151.766 13.6377L1.3042 1.35498L13.5868 68.9096Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
