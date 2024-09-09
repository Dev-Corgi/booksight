"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Gokseong() {

  const mapName = "곡성군"
  const addressName = "전라남도 곡성군"
  const prevId = 36
  // const mapId = 36320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 330" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gokseong" d="M115.987 253.922L113.33 206.095L115.987 177.531L100.709 152.953L78.1239 178.86L32.2896 180.188L1.7334 115.754L13.0259 100.476L14.3544 50.6565L41.5893 53.9778L106.687 2.82935L105.359 26.7429L129.272 35.3784L146.543 5.4864L170.457 33.3856L199.684 36.0426L231.569 56.6349L268.104 28.7357L298.66 46.6709L301.317 77.2271L327.223 127.711L287.367 146.975V185.502L323.902 188.824L318.588 241.301L297.331 265.878L288.696 296.435L256.811 297.763L246.847 328.319L195.035 310.384L161.821 283.149L133.922 263.886L115.987 253.922Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
