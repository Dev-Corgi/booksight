"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Geochang() {

  const mapName = "거창군"
  const addressName = "경상남도 거창군"
  const prevId = 38
  // const mapId = 38390;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 389" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Geochang" d="M2.24414 139.584L31.1528 161.533L34.3649 180.27L64.8795 171.169L86.2934 195.795L115.202 220.421L138.222 245.047L156.424 240.229L158.03 288.41L133.404 328.561L159.636 342.48L167.131 368.712L220.665 387.449L234.584 349.975L252.786 310.894L263.493 261.107L298.825 223.633L321.845 217.209L307.926 175.452L294.007 128.877L289.189 118.17L327.734 73.2009L312.209 64.1001L266.169 73.7363L239.937 51.2518L205.675 52.8578L198.716 25.0199L166.06 13.7776L164.989 2L146.787 6.81811L134.474 34.6561L91.6468 64.1001L52.0313 68.9182L41.3244 104.786L2.24414 139.584Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
