"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Suncheon() {

  const mapName = "순천시"
  const addressName = "전라남도 순천시"
  const prevId = 36
  // const mapId = 36030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="359" viewBox="0 0 329 359" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Suncheon" d="M5.01836 208.118L3.92796 167.227L7.19916 120.885L1.74707 82.72L14.2869 54.3691L51.9064 79.4488L79.1669 101.802L121.693 116.523L129.871 91.4434L156.041 90.3529L163.129 65.2733L180.576 45.1006L184.937 2.02905L190.935 2.57425L216.56 16.7497L264.538 60.9117H275.442L295.615 89.2625L280.894 119.794L297.251 149.236L304.883 184.129L301.612 233.198L321.24 245.192L327.237 272.453L321.785 289.354L294.525 296.987L296.705 329.7L291.253 347.692L270.535 322.612L267.264 305.711L249.817 313.344L250.908 342.785L200.748 349.327L184.937 356.96L152.77 325.338L128.781 323.157L92.2518 288.264L66.0818 298.623L37.7309 290.445L41.0022 257.732L25.1911 221.748L5.01836 208.118Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
