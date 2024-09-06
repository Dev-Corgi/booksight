"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Sasang() {

  const mapName = "사상구"
  const addressName = "부산광역시 사상구"
  const prevId = 21
  // const mapId = 21150;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="526" viewBox="0 0 328 526" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Sasang" d="M75.1413 514.622H199.297L306.675 363.622L303.32 158.932L326.809 64.9763L182.519 1.22046L34.8745 138.799L24.8078 397.177L1.31885 524.689L75.1413 514.622Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
