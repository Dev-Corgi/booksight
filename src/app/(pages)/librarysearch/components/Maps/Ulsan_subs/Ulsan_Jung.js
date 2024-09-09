"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Ulsan_Jung() {

  const mapName = "중구"
  const addressName = "울산광역시 중구"
  const prevId = 26
  // const mapId = 26010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 209" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jung" d="M271.239 181.785L149.473 184.126L123.715 207.543L67.5153 170.076L11.3156 163.051L1.94897 71.7269L88.5902 31.9188L142.448 38.9438L205.673 1.47729H296.997L311.047 62.3603L327.439 174.76L271.239 181.785Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
