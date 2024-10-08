"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Gwangyang() {

  const mapName = "광양시"
  const addressName = "전라남도 광양시"
  const prevId = 36
  // const mapId = 36060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 435" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<g id="Gwangyang">
<path d="M41.9153 277.772L36.8948 353.078L63.6704 371.486L71.201 409.976L104.67 383.2L131.446 426.711H186.671L248.589 353.915L267.834 346.384L297.956 316.262L320.548 293.67L327.242 256.853L309.67 258.527L297.119 213.343L271.181 194.098L258.63 168.159L210.936 129.67L204.242 71.0981L122.242 2.48584L108.017 31.7716L100.487 90.343L72.0378 102.894L28.5275 132.18L1.75195 180.71L30.201 224.221L41.9153 277.772Z" fill="black"/>
<path d="M241.058 420.853L263.65 388.221L298.793 404.119L265.324 433.405L241.058 420.853Z" fill="black"/>
<path d="M41.9153 277.772L36.8948 353.078L63.6704 371.486L71.201 409.976L104.67 383.2L131.446 426.711H186.671L248.589 353.915L267.834 346.384L297.956 316.262L320.548 293.67L327.242 256.853L309.67 258.527L297.119 213.343L271.181 194.098L258.63 168.159L210.936 129.67L204.242 71.0981L122.242 2.48584L108.017 31.7716L100.487 90.343L72.0378 102.894L28.5275 132.18L1.75195 180.71L30.201 224.221L41.9153 277.772Z" stroke="#DAAA63" strokeWidth="2"/>
<path d="M241.058 420.853L263.65 388.221L298.793 404.119L265.324 433.405L241.058 420.853Z" stroke="#DAAA63" strokeWidth="2"/>
</g>
</MapHoverAnimation>
</svg>













  );
}
