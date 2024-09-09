"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Seongju() {

  const mapName = "성주군"
  const addressName = "경상북도 성주군"
  const prevId = 37
  // const mapId = 37380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 323" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seongju" d="M112.602 307.868L103.14 321.115L82.3238 309.76L62.7692 266.866L16.7212 248.573L33.7526 213.249L2.21289 137.553L20.5059 135.03L37.5374 152.062L58.9844 114.214L82.9546 100.967L104.402 71.9507V31.5799L129.633 26.5336L153.604 1.93262H229.299L240.022 32.2107L237.499 75.1047L287.963 121.784L318.241 135.03L327.703 158.37L310.671 194.956V248.573L275.978 298.406L236.238 280.113L211.006 268.128L173.789 309.76L147.296 275.697L108.817 283.267L112.602 307.868Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
