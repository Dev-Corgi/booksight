"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gwangju_Seo() {

  const mapName = "서구"
  const addressName = "광주광역시 서구"
  const prevId = 24
  // const mapId = 24020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 301" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seo" d="M35.1662 200.444L64.5507 150.716L118.799 1.5332H227.296L326.751 60.3022L290.585 110.03L286.065 184.621L243.118 216.266L132.361 247.911L69.0714 299.899H1.26099V238.87L35.1662 200.444Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
