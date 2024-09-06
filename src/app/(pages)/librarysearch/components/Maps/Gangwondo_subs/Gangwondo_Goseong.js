"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Goseong() {

  const mapName = "고성군"
  const addressName = "강원도 고성군"
  const prevId = 32
  const mapId = 32400;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="470" viewBox="0 0 329 470" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M234.199 468.019L326.936 418.923L269.354 295.879L260.262 265.573L210.56 195.262L219.652 182.533L163.888 83.1286V60.7019L119.035 1.90765L82.0611 17.0608L79.6366 116.466L71.7569 171.623L1.44629 261.936L20.8423 275.877L38.42 281.938L44.4812 283.15L37.8139 295.879L42.6628 326.185L80.8488 315.881L87.5163 341.945L93.5775 380.737L122.672 383.161L129.339 409.831L154.796 417.104L181.466 404.376L196.619 421.953V460.746L234.199 468.019Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
