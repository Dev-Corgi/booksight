"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Buyeo() {

  const mapName = "부여군"
  const addressName = "충청남도 부여군"
  const prevId = 34
  // const mapId = 34330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 322" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buyeo" d="M28.4507 14.0658L1.22998 70.2447L16.2882 109.628L30.1882 135.111L52.7755 144.378L48.7214 161.753L30.1882 171.019L5.86326 202.873L37.1381 223.144L96.2128 219.09L96.792 254.998L119.379 263.685L136.754 286.273L142.546 320.443L166.871 318.127L166.292 275.269L181.35 249.206L212.625 249.785L233.475 242.256L247.375 248.048L286.179 254.998L278.07 238.202L259.537 215.615L257.8 183.761H282.124L303.553 153.644L326.72 129.319L321.508 106.732L258.379 82.4071L256.062 48.2364L204.516 73.7197L185.983 54.6073L161.079 63.2947L147.179 35.4948L133.279 18.1199L142.546 1.32422L118.221 3.64084L98.5295 16.9616L94.4753 29.7032L65.5172 25.6491L44.0881 7.11586L28.4507 3.64084V14.0658Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
