"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Busanjin() {

  const mapName = "부산진구"
  const addressName = "부산광역시 부산진구"
  const prevId = 21
  // const mapId = 21050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="392" viewBox="0 0 328 392" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Busanjin" d="M73.5943 389.88L152.501 317.549L237.983 366.866L326.753 241.93L313.602 169.599L159.076 74.2535L149.213 1.92236L37.4287 74.2535L1.26318 166.311L4.55091 366.866L73.5943 389.88Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
