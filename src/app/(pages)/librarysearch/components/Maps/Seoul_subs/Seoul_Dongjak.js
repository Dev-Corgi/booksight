"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Dongjak() {

  const mapName = "동작구"
  const addressName = "서울특별시 동작구"
  const prevId = 11
  // const mapId = 11200;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 234" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dongjak" d="M113.086 1.53857L74.1382 65.5238L57.4464 115.599L7.37103 148.983L1.80713 171.238L18.4989 179.584L63.0103 171.238L88.048 137.855L207.673 148.983L249.402 215.75L318.951 232.442L327.297 118.381L305.041 87.7795L268.876 71.0877L271.658 46.05L213.237 1.53857H113.086Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
