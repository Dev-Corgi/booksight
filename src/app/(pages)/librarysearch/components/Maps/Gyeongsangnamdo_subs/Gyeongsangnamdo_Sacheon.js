"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Sacheon() {

  const mapName = "산청군"
  const addressName = "경상남도 산청군"
  const prevId = 38
  // const mapId = 38370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Sacheon" d="M49.3376 16.3583L15.8368 11.9886C15.8368 11.9886 -2.37023 27.2825 1.99945 28.7391C6.36913 30.1956 32.5872 60.0551 32.5872 60.0551L28.2175 91.3712L42.0548 129.242L49.3376 178.765V207.168L79.9254 239.212L92.3062 225.375L127.264 228.288L144.014 194.787L106.143 166.384L124.35 151.09L144.014 169.297L153.482 121.231L186.983 91.3712L168.776 148.905L164.406 185.319L181.156 194.059L158.58 222.462L173.874 234.842L155.667 268.343L187.711 303.301L239.419 327.334L240.875 309.127L283.844 221.733L306.42 217.364L300.594 173.667L325.356 148.177L326.812 135.796L288.942 111.763L305.692 83.36L282.387 53.5006L229.223 73.1642L213.929 53.5006L183.341 38.2067L138.916 54.9572L111.241 1.79272H60.9901L49.3376 16.3583Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
