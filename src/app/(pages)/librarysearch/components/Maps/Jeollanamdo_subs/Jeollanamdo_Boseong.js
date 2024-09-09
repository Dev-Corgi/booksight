"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Boseong() {

  const mapName = "보성군"
  const addressName = "전라남도 보성군"
  const prevId = 36
  // const mapId = 36360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 331 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Boseong" d="M51.3486 314.872L80.6119 290.229L107.308 265.587L123.223 273.287L157.62 265.587L180.21 220.922L198.692 196.279L208.446 181.39L245.924 159.315H260.812L273.647 149.56L316.772 178.31L326.526 159.315L295.209 139.292L327.553 140.319L297.263 110.542H275.7L240.276 77.6854L215.634 85.3863L188.424 75.6319L192.531 46.882L175.076 10.9446L157.62 1.19019L130.411 12.9982L83.1788 54.5828V92.0604L62.6432 132.618L46.2146 131.592L30.2995 176.257L40.054 193.198L31.3263 207.06V232.73L2.06299 260.453L6.17013 277.395L41.5941 280.475L51.3486 314.872Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
