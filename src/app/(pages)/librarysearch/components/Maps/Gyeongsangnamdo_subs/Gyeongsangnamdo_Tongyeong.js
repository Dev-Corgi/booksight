"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Tongyeong() {

  const mapName = "통영시"
  const addressName = "경상남도 통영시"
  const prevId = 38
  // const mapId = 38050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="445" viewBox="0 0 329 445" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Tongyeong" d="M281.802 104.853L254.734 132.597L226.313 149.514L217.516 171.845L239.17 178.612L260.148 184.026L274.358 164.402L288.569 133.274L301.426 120.417L281.802 104.853ZM196.538 167.785L175.561 175.906L183.005 209.74L226.99 257.109L260.824 215.154L223.606 200.943L196.538 167.785ZM313.607 213.8L295.336 232.071L310.9 272.673L327.817 254.402L313.607 213.8ZM296.689 300.417L285.185 338.312L306.84 317.335L296.689 300.417ZM275.035 16.2056L258.118 38.5366L259.471 69.6645L252.027 107.559L229.02 138.687L210.749 119.063L193.832 133.274L143.756 112.296L145.11 92.6721L190.448 88.612L177.591 52.0704L208.719 37.8599L224.283 12.8221L273.682 1.31836L275.035 16.2056ZM51.7259 154.928H3.68057L29.3949 188.763L46.3123 169.139L51.7259 154.928ZM74.7335 186.056L42.2521 192.823L82.1771 232.071L105.185 215.154L74.7335 186.056ZM88.944 412.749L70.6733 415.455L74.7335 443.2L107.215 439.14L88.944 412.749ZM12.4776 332.899L2.32715 351.169L28.0416 366.733L35.4852 349.816L12.4776 332.899Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
