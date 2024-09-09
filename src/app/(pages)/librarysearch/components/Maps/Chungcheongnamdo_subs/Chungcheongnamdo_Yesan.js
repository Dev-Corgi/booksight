"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Yesan() {

  const mapName = "예산군"
  const addressName = "충청남도 예산군"
  const prevId = 34
  // const mapId = 34370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 305" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yesan" d="M228.272 255.381L193.1 303.668L160.909 296.515L141.237 297.111L137.064 267.9L150.775 235.113L159.121 217.229L140.044 183.249L126.333 150.461L94.7381 148.673L30.9516 167.749L29.1632 196.364L1.14478 195.768V155.827L17.2405 105.751L13.0675 88.4633L36.3168 61.041L65.5274 32.4265L103.084 1.42749L120.372 12.7541L158.525 60.4449L202.639 20.5038L216.946 25.8691L223.503 60.4449L261.656 83.6942L275.367 111.116L307.558 113.501L326.635 123.635L323.058 146.885L301.597 218.421L260.464 276.246L228.272 255.381Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
