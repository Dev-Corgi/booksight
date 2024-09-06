"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Nonsan() {

  const mapName = "논산시"
  const addressName = "충청남도 논산시"
  const prevId = 34
  // const mapId = 34060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="316" viewBox="0 0 328 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nonsan" d="M74.5324 267.42L59.8822 226.017L32.4926 231.113L23.5751 212.641L3.19218 187.799L1.28125 152.766H28.0338L51.6016 119.644L77.0802 92.8911L73.2585 64.2276L96.8262 3.0789L113.387 1.16797L126.127 21.5509L151.605 37.475L192.371 8.81156L203.2 29.1945V47.0295L191.097 68.0495L204.474 100.535L224.857 103.083L233.137 123.466L259.89 124.103L274.54 113.274L326.771 168.69L319.765 240.03L281.547 262.324L252.246 254.681L246.513 285.255L216.576 274.427L197.467 290.351H146.51L125.49 314.555L80.9021 292.262L74.5324 267.42Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
