"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Yeoju() {

  const mapName = "여주시"
  const addressName = "경기도 여주시"
  const prevId = 31
  // const mapId = 31280;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeoju" d="M38.7184 100.603V62.7554L1.50146 28.6925L24.2101 1.56836L66.4733 22.3846L99.2747 4.0915L128.291 31.8465L164.246 33.1081L186.955 25.5386L210.925 37.5236L245.619 32.4773L274.635 41.9392L275.897 64.017L280.943 81.0484H324.468L326.991 143.497L316.268 221.716L304.283 280.38L262.02 349.767L209.033 322.643L169.293 287.318L151 305.611L113.783 301.827L116.306 281.01L115.045 235.593L125.768 219.823L119.46 188.284L132.707 164.944L119.46 145.39L99.2747 119.527L84.7664 113.219L63.3193 96.1876L38.7184 100.603Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
