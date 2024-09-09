"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Haman() {

  const mapName = "함안군"
  const addressName = "경상남도 함안군"
  const prevId = 38
  // const mapId = 38320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 308" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Haman" d="M19.5492 197.997L1.97412 186.046L31.5002 155.817L27.2822 126.994L39.2333 93.2498L52.5903 52.4756L77.8984 62.3177L101.8 79.8927L129.921 78.4867L124.297 58.0997L156.635 56.6936L167.18 22.9496L209.36 25.7616L247.322 1.15649L302.156 29.9796L312.701 50.3667L303.562 67.9417L299.344 92.5468L312.701 114.34L316.216 134.024L327.464 167.768L285.987 162.144L252.243 175.501L233.965 163.55L206.548 224.711L221.311 255.643L216.39 276.03L191.082 276.733L174.21 306.259L146.793 285.169L133.436 259.861L103.909 272.515L76.4923 254.237H52.5903L19.5492 197.997Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
