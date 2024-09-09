"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Samcheok() {

  const mapName = "삼척시"
  const addressName = "강원도 삼척시"
  const prevId = 32
  const mapId = 32070;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 339" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M219.334 337.254L245.914 335.511L244.171 308.496L273.365 279.738L291.665 277.995L309.966 257.08H327.395L310.838 213.071L312.58 204.792L308.223 194.77L322.166 186.492L299.073 148.583L278.158 127.668L262.472 121.132L249.835 84.0951L255.5 73.2018L214.541 45.3152L211.927 17.4285L194.498 2.17798L175.326 13.9427L126.96 15.6856L98.6372 40.9579L78.5936 38.3435L65.086 23.0929L36.7636 33.9862L30.2276 52.7226L20.2059 58.8228L3.64817 84.0951L1.90527 108.496L11.9271 121.132L7.56977 139.868L21.5131 159.041L41.5566 216.557L45.9139 184.749L53.3214 177.341L52.4499 159.476L73.365 115.032L99.073 107.625L95.5871 118.518L104.737 138.561L99.073 155.555L103.866 167.319L99.073 182.57L89.0511 187.799L101.687 197.821L98.2015 216.557L110.838 239.215L142.646 248.365L153.539 269.28L155.282 296.295L173.583 300.653L219.334 337.254Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
