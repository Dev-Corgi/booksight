"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Gijang() {

  const mapName = "기장군"
  const addressName = "부산광역시 기장군"
  const prevId = 21
  // const mapId = 21310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="455" viewBox="0 0 329 455" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gijang" d="M201.557 452.797L148.775 441.486L82.1692 412.582L80.9125 357.286L30.6438 299.477L18.0766 288.167V214.02L1.73926 193.913L23.1034 55.6738L57.0348 54.417L94.7364 85.835L137.465 56.9305L155.059 1.63489L225.435 12.9454L255.596 5.40504L295.811 30.5394L300.838 107.199L327.229 138.617L318.432 163.752L285.758 147.414L259.366 195.169L280.731 222.817L251.826 264.289L231.719 283.14L258.11 304.504L240.516 344.719L227.949 377.394L204.071 382.42L201.557 452.797Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
