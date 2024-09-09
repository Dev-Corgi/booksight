"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daejeon_Jung() {

  const mapName = "중구"
  const addressName = "대전광역시 중구"
  const prevId = 25
  // const mapId = 25020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 685" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jung" d="M51.2721 371.219L62.3057 558.79L183.675 682.917L230.567 600.166L277.46 509.139L238.843 437.421L255.393 357.427L227.809 280.192L327.111 227.783L233.326 158.823L169.883 87.1051L172.641 18.1453L125.749 1.59497L98.1648 62.2795L67.8225 186.407L1.62109 277.434L12.6546 340.877L51.2721 371.219Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
