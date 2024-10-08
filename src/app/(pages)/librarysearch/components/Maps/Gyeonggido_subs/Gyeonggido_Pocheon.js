"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Pocheon() {

  const mapName = "포천시"
  const addressName = "경기도 포천시"
  const prevId = 31
  // const mapId = 31270;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 502" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Pocheon" d="M45.8618 500.469L78.9841 499.195L105.737 491.552L124.209 496.647L161.79 471.806L181.536 367.343H209.562L217.843 306.831L260.52 293.455L263.067 247.593L296.827 201.095L308.929 170.52L327.401 164.151L315.299 88.9885L303.196 80.071L294.916 92.1734L254.787 77.5231L228.034 97.2691L217.206 108.098L202.556 81.9819L171.981 74.3383L182.81 11.2786L166.886 1.72412L113.38 48.2227L82.8059 20.1962V79.434L80.258 133.576L50.9575 127.207L24.205 148.226L25.4789 165.425L45.2248 178.801L49.0467 215.745L36.9443 230.395L3.18505 227.847L1.91113 274.346L35.6703 306.194L50.3206 329.762L47.7727 359.062H31.8485L14.6505 374.987L26.7528 422.759L17.1983 463.525L40.1291 484.545L45.8618 500.469Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
