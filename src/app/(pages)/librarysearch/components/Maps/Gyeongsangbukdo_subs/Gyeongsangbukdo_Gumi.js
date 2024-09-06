"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Gumi() {

  const mapName = "구미시"
  const addressName = "경상북도 구미시"
  const prevId = 37
  // const mapId = 37050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="278" viewBox="0 0 329 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gumi" d="M185.502 275.951L210.029 246.314C210.029 246.314 250.907 263.176 251.929 260.111C252.951 257.045 274.412 220.766 274.412 220.766L327.042 223.831L308.647 185.508L315.289 172.734L294.85 150.251L272.368 164.048L263.681 124.703L237.11 130.834L210.54 103.242L206.452 72.5834L163.53 15.3544L135.427 33.2384L118.054 15.3544L99.6586 1.55811L78.1977 18.4202L63.3795 58.7871L17.3919 61.853L1.55176 96.5992L32.7211 106.308L71.5551 129.812L72.577 149.74L99.1477 156.894L103.235 168.646L119.587 185.508L114.477 212.079L112.433 234.051L125.207 247.847L143.602 249.891L185.502 275.951Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
