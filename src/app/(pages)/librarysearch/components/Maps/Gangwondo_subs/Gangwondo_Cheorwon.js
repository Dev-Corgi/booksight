"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Cheorwon() {

  const mapName = "철원군"
  const addressName = "강원도 철원군"
  const prevId = 32
  const mapId = 32360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="212" viewBox="0 0 329 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M324.93 2.92238H304.615L267.68 30.6237L247.366 28.7769L238.594 17.2347H222.897L206.276 4.76912L172.111 1.07562L163.339 11.6944L141.178 9.8477L130.559 22.3133L123.634 6.1542H100.549L92.7006 1.53732L59.9207 19.5431L45.6084 14.9263L36.8363 5.23082L22.0623 7.07756L13.2902 32.0087L1.74805 45.3977V79.1009L11.4435 91.5664L29.911 81.871L41.4532 110.496L52.9954 129.425L51.1487 146.507L73.3097 166.822L112.091 133.118L123.634 140.044L115.785 185.751L137.946 191.291L148.565 210.22L156.414 202.372L175.804 188.059L204.891 198.678L210.893 189.906L254.291 180.211L261.217 161.281L251.521 149.739L261.217 116.036C261.217 116.036 284.301 112.342 284.301 109.572C284.301 106.802 285.224 91.5664 285.224 91.5664L305.539 83.7178L324.93 51.3996L310.617 37.0873L327.238 9.386L324.93 2.92238Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
