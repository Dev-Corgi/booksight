"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Geumjeong() {

  const mapName = "금정구"
  const addressName = "부산광역시 금정구"
  const prevId = 21
  // const mapId = 21110;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="402" viewBox="0 0 329 402" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Geumjeong" d="M235.127 399.906L320.898 281.146L327.496 230.564L274.714 157.988L272.514 37.0289L243.924 1.84082L23.9984 98.6081L2.00586 204.172L61.3858 329.53L162.552 355.921L235.127 399.906Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
