"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Chilgok() {

  const mapName = "칠곡군"
  const addressName = "경상북도 칠곡군"
  const prevId = 37
  // const mapId = 37390;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Chilgok" d="M209.171 268.316L176.293 258.452L173.663 218.999L154.594 209.793L115.798 243.986L105.935 219.657L71.0843 201.903L22.4252 157.189L21.1101 109.187L2.04102 49.3496L8.61657 32.9107L32.2886 35.541L84.893 71.049L116.456 32.9107L170.375 50.6648L203.253 1.34814L267.036 3.97833L269.666 58.5555L324.901 44.7467L327.531 122.338L299.914 156.531L254.542 179.546L235.473 167.052L225.61 176.915L232.843 205.19L226.267 236.753L209.171 268.316Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
