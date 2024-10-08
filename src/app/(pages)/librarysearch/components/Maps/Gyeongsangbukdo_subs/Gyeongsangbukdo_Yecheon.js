"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Yecheon() {

  const mapName = "예천군"
  const addressName = "경상북도 예천군"
  const prevId = 37
  // const mapId = 37400;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 479" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yecheon" d="M171.827 399.099L192.252 356.931L219.925 336.505V296.972L254.188 291.701L252.87 267.322L301.627 246.897L320.735 245.579L327.324 193.527L294.38 150.04L270.66 107.872L235.739 106.554L198.182 96.6705L199.5 49.2307L202.136 31.4407L178.416 2.44971L150.083 46.5951L121.092 44.6185L94.737 70.315L92.7604 134.886L71.676 137.521L56.5216 216.588L76.9471 240.967L75.6293 257.439L54.5449 253.486L9.08173 298.29L24.2361 333.87L28.1894 369.45L7.1051 374.721L1.83398 396.464L7.1051 460.376L44.6616 476.848L68.3815 447.857L75.6293 404.371L109.891 403.053L118.457 423.478L147.448 399.099H171.827Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
