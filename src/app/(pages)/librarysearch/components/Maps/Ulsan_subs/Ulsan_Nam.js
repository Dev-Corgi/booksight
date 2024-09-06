"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Ulsan_Nam() {

  const mapName = "남구"
  const addressName = "울산광역시 남구"
  const prevId = 26
  // const mapId = 26020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="261" viewBox="0 0 330 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nam" d="M314.151 216.068L247.228 258.656L206.162 194.774L145.322 159.792L63.1893 70.054L2.3501 51.8022L38.8537 1.60986L75.3572 6.1728L111.861 30.5085L128.592 15.2987L241.144 9.21477L327.84 73.096L312.63 117.204L308.067 159.792L314.151 216.068Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
