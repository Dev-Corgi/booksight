"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Gangjin() {

  const mapName = "강진군"
  const addressName = "전라남도 강진군"
  const prevId = 36
  // const mapId = 36390;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 619" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangjin" d="M101.517 592.822L128.311 571.982L118.387 551.143L143.196 528.319C143.196 528.319 156.097 438.015 156.097 423.13C156.097 408.245 164.035 294.125 164.035 294.125L186.859 277.255L171.974 310.003L181.898 371.528L200.752 400.306V550.151L221.591 572.975L265.255 616.638L271.209 501.526L327.773 436.031L317.849 378.475L278.155 310.995L317.849 305.041L306.933 228.63L286.094 189.929V130.388L238.461 64.8929L213.653 1.38257H164.035L114.418 58.9387L74.724 45.0459L2.28271 90.6938L25.1067 125.426L10.2214 169.089L40.9842 185.959L57.8542 220.691L49.9153 264.355L59.8388 281.225L24.1143 346.72L48.923 404.276L20.1449 447.939L37.0149 466.794L40.9842 569.005L82.6628 572.975L101.517 592.822Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
