"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Dangjin() {

  const mapName = "당진시"
  const addressName = "충청남도 당진시"
  const prevId = 34
  // const mapId = 34080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 324" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dangjin" d="M25.4417 160.856L32.6749 110.781L27.1109 71.8331L1.51685 36.2239L31.0057 11.7426L32.6749 1.17114L67.7276 4.5095L103.337 43.457L144.51 67.9383L207.382 71.2767L266.36 92.4196L275.262 134.149L291.398 148.615L305.864 198.691L314.766 205.367L326.45 264.901L327.007 284.932L311.984 286.601L299.187 284.932L258.014 322.21L222.405 277.699L206.27 267.127L171.217 296.06L138.39 257.112L125.036 254.886L114.465 239.307L79.9683 244.315L53.8178 230.405L51.5922 200.36L22.1034 184.781L25.4417 160.856Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
