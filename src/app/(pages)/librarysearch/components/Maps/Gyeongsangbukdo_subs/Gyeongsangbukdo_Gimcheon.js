"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Gimcheon() {

  const mapName = "김천시"
  const addressName = "경상북도 김천시"
  const prevId = 37
  // const mapId = 37030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 413" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gimcheon" d="M164.225 373.472L150.005 402.966L109.45 411.393L87.3295 388.746L49.935 390.853L43.0881 363.465L10.9604 352.405L8.85371 317.644L32.0278 299.737L3.0602 253.915L2.00684 230.741L27.2876 203.354L66.2621 190.187L75.2157 135.412L93.123 109.077L85.2227 90.6435L79.4292 65.3627L98.3898 60.0959L124.724 70.1029L144.211 67.4695L117.877 22.7015L128.937 8.48094L145.791 23.7548L167.912 18.488L183.186 20.5947L196.353 2.16077L224.267 11.1144L268.508 36.3952L269.562 56.9358L296.949 64.3094L301.163 76.4231L318.017 93.8036L312.75 121.191L310.643 143.838L323.81 158.059L318.543 171.226L327.497 196.507H264.295L244.281 217.047L223.214 221.261V254.969L202.146 283.409L185.292 290.783L167.385 322.384L153.165 308.164L137.891 310.27L164.225 373.472Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
