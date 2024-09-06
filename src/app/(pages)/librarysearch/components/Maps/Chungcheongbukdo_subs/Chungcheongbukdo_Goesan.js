"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Goesan() {

  const mapName = "괴산군"
  const addressName = "충청북도 괴산군"
  const prevId = 33
  // const mapId = 33360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="307" viewBox="0 0 330 307" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Goesan" d="M131.933 303.826L113.958 300.425L70.236 253.302L81.8953 231.927L44.9741 199.378L22.1412 186.747L9.51023 145.939L18.7405 130.393L11.9393 112.904L2.22314 97.3583L23.1128 78.4119L45.4599 86.1848L57.1192 62.8661L87.2392 63.3519L95.0121 66.2668L121.246 58.4939L125.618 29.8313L117.359 15.743L136.306 2.14038L156.709 9.42747L164.482 30.8029L195.088 51.2068L222.779 57.0365L229.58 53.6358L240.754 64.3236L249.984 81.8126L255.328 105.617L273.303 119.22L286.42 109.503L315.082 116.791L306.823 147.882L293.707 171.687L327.713 206.179L308.281 212.009L282.047 193.062L270.874 202.778L248.041 188.204L233.953 216.381L215.978 229.983L199.946 232.898L217.435 248.444L233.467 264.476L223.265 303.826L197.031 275.649L187.315 263.018L170.798 281.965L175.656 294.596L131.933 303.826Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
