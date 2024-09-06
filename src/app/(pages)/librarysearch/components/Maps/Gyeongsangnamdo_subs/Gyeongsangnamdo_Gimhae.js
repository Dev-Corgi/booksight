"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Gimhae() {

  const mapName = "김해시"
  const addressName = "경상남도 김해시"
  const prevId = 38
  // const mapId = 38070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="303" viewBox="0 0 329 303" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gimhae" d="M117.032 301.642L57.5479 280.254L55.5428 239.484L40.1706 235.474L32.8186 190.694L2.07422 119.18L40.1706 93.7825L49.5275 107.15L74.2568 66.3798L107.006 60.3646L179.857 2.21753L191.219 32.962L235.331 42.9873L277.437 75.7368L283.453 108.486L327.564 143.241L310.187 188.021L256.718 209.408L237.336 228.791C237.336 228.791 202.581 230.796 197.235 230.796C191.888 230.796 181.862 265.55 181.862 265.55L183.867 292.953L157.133 279.586L143.766 296.963L117.032 301.642Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
