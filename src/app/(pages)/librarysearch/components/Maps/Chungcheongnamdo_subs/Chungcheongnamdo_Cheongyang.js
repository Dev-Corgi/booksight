"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Cheongyang() {

  const mapName = "청양군"
  const addressName = "충청남도 청양군"
  const prevId = 34
  // const mapId = 34350;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 295" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Cheongyang" d="M27.0873 164.595L41.5675 196.704L45.9745 217.48L62.973 221.257L87.5264 245.181L118.376 245.811L125.301 229.442L144.188 217.48L170.63 214.961L160.557 233.219L175.667 252.106L190.777 282.326L217.848 272.882L237.995 293.658L269.473 277.289L293.397 267.216L295.916 219.998L327.394 193.556L326.765 155.152L293.397 123.044H251.845L241.143 133.117L205.257 89.0465L207.146 24.2004L173.149 2.16528L136.004 53.1608L102.007 45.6059L95.0813 68.2706L73.6758 109.193H34.6421L1.9043 121.784L27.0873 164.595Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
