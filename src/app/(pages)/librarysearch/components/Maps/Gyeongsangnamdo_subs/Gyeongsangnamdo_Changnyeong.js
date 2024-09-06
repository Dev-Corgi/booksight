"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Changnyeong() {

  const mapName = "창녕군"
  const addressName = "경상남도 창녕군"
  const prevId = 38
  // const mapId = 38330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="397" viewBox="0 0 329 397" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Changnyeong" d="M51.0172 288.885L81.7778 255.978L43.1482 224.502L24.5488 222.356L1.65723 185.157L13.8184 152.251L11.6723 115.052L30.9871 97.1676L58.1708 94.3062L106.1 62.8302L170.483 60.6841L178.352 14.9009L184.075 2.73975L191.944 27.7774L201.959 60.6841L284.225 133.651L257.757 145.812L264.195 178.719L243.45 197.318L255.611 224.502L245.596 249.54L255.611 291.031L298.533 299.615L327.147 338.96L322.855 394.758L267.772 376.159L239.158 392.612L179.782 367.575L141.153 392.612L100.377 386.174L93.939 348.975L42.4329 328.23L51.0172 288.885Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
