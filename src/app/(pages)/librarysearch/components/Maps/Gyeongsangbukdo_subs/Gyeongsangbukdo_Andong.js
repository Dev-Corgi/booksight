"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Andong() {

  const mapName = "안동시"
  const addressName = "경상북도 안동시"
  const prevId = 37
  // const mapId = 37040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="372" viewBox="0 0 329 372" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Andong" d="M266.959 370.824L254.485 326.386L233.046 291.693L225.639 267.525L180.811 241.018L171.066 247.645L161.321 246.476L158.202 270.644L104.799 293.253L84.5285 272.983L66.5974 236.73L43.5986 230.104L28.7859 221.918L17.4815 235.561L1.88916 228.934V216.071L6.95665 215.291L22.549 188.004L37.3617 178.259V154.871L57.6317 151.752L56.8521 137.329L85.698 125.245L97.0024 124.466L100.901 93.6707L91.1553 80.0274L127.797 78.4682L144.169 88.2134L154.694 82.7561L171.066 84.3153L167.948 18.8275L190.946 11.4211L207.318 1.6759L213.165 12.9803L224.47 7.52303L263.061 31.6912L288.398 34.03L305.55 51.9612L316.075 49.6223L319.973 89.3828L319.193 140.838L327.379 161.108L316.075 176.31L317.634 190.733L306.33 201.258L322.701 218.409L312.177 244.916L307.109 262.848L314.516 287.016L303.991 315.082V344.317L277.094 370.045L266.959 370.824Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
