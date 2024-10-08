"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Jangseong() {

  const mapName = "장성군"
  const addressName = "전라남도 장성군"
  const prevId = 36
  // const mapId = 36450;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 343" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jangseong" d="M35.4363 300.519C35.4363 300.519 3.56156 286.421 2.94859 281.517C1.72264 276.613 1.72266 255.159 1.72266 255.159L29.9195 228.801L34.8233 211.025L47.6958 207.347L49.5347 186.506L75.2797 158.922L129.835 140.532V108.045L146.998 98.8502L153.741 69.4273L146.998 49.8121L171.517 22.2282H207.069L219.942 2L242.622 13.6465L240.783 25.2931L289.821 52.877L295.951 76.783L327.213 101.302L305.146 123.982L293.499 128.886L268.98 161.987L276.949 179.763L270.819 192.635L257.946 191.409L253.043 228.188L272.045 269.87L252.43 270.483L234.04 289.486L199.714 302.971L154.967 284.582L151.289 268.644H137.19L124.931 309.714L93.669 314.005L66.0851 340.976L50.1477 315.231L35.4363 300.519Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
