"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Uiryeong() {

  const mapName = "의령군"
  const addressName = "경상남도 의령군"
  const prevId = 38
  // const mapId = 38310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 307" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Uiryeong" d="M98.5468 296.879L77.7571 266.994L81.6551 225.414L51.7698 202.675L27.082 225.414L1.09473 209.172V173.44L43.9736 146.803L86.8526 142.905L95.9481 101.325L99.8462 52.5989L134.929 39.6053L181.706 7.77096L257.719 24.6627V1.92383L274.61 3.87289L309.693 32.4588L281.757 62.3441L277.209 93.5288L320.738 116.917L326.585 150.701L314.891 185.134L285.005 186.433L290.203 205.274L264.215 206.573L244.075 191.631L218.088 183.834L194.7 250.102L198.598 276.739L176.509 303.376L128.432 305.974L98.5468 296.879Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
