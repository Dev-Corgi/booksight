"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Asan() {

  const mapName = "아산시"
  const addressName = "충청남도 아산시"
  const prevId = 34
  // const mapId = 34040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 441" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Asan" d="M22.536 219.118L19.2972 190.779L3.91337 120.337L41.1585 78.2341L87.3101 75.8051L86.5004 62.0406L97.0262 58.8019L190.949 12.6503L233.052 28.8438L292.968 2.12451L289.729 17.5084L302.684 119.528L316.449 121.957L319.687 146.247L295.397 170.537L300.255 228.024L308.352 215.07L326.974 232.882L324.545 270.128L300.255 278.224L291.349 300.895L280.823 348.666L254.103 356.763L208.762 417.489L211.191 427.205L178.804 439.35L147.226 408.582L152.084 377.005L126.175 363.24L82.4521 360.002L63.8295 322.757L12.0101 291.179L1.48438 239.36L23.3456 236.931L22.536 219.118Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
