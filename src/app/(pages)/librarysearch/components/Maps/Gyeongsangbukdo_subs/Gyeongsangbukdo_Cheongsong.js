"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Cheongsong() {

  const mapName = "청송군"
  const addressName = "경상북도 청송군"
  const prevId = 37
  // const mapId = 37330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 435" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Cheongsong" d="M177.463 375.736L190.108 354.843L160.418 330.651L178.012 319.655L230.245 333.95L264.883 372.437L302.82 311.958V285.017L328.112 264.124L301.171 235.533L299.521 203.644L279.178 162.408L255.536 157.46L241.241 123.921L239.592 85.4341L223.097 83.2348V69.4895L206.053 45.8474L168.116 41.449L146.123 5.16118L123.031 1.8623L107.086 23.3051L109.286 43.6482L93.3409 58.4932L116.433 82.685L94.4405 145.364L104.887 179.452L90.042 219.039V260.275L52.1049 296.563L24.6142 299.862L22.4149 321.304L2.62158 335.05L33.961 348.795L22.4149 366.939L37.2599 390.581L32.8614 401.027L41.1086 416.972L75.7469 420.271L104.337 432.917L140.625 413.673L156.57 380.134L177.463 375.736Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
