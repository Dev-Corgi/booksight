"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Hwaseong() {

  const mapName = "화성시"
  const addressName = "경기도 화성시"
  const prevId = 31
  // const mapId = 31240;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="225" viewBox="0 0 328 225" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hwaseong" d="M111.957 9.85467L90.7095 10.3068L84.8326 26.5813L80.3119 39.6913L64.9415 25.2251L56.3522 27.0333L37.3653 25.2251L28.3239 20.7044L16.118 24.773L4.36419 39.6913L13.4056 54.1575L3.00799 79.9254L1.19971 95.7479L1.65179 109.31L22.447 107.502L15.2139 125.132L24.7073 141.407L45.5025 125.132L61.777 103.433H85.2846L94.326 90.7751L93.874 112.474L102.915 117.899L94.326 130.557L67.2019 133.27L68.5581 148.188V161.75L68.106 183.449L54.5439 196.559V208.313L90.2574 214.19L96.1343 223.231L124.163 219.163L152.643 178.025L184.288 181.189L217.741 174.408L224.07 133.27L243.509 123.324L242.153 107.502L223.166 94.8437L235.372 73.1444H260.688L267.017 85.8023L274.702 104.789H288.264L290.072 117.899L299.113 124.228L312.223 99.8165L326.69 89.4189L319.004 59.5823L276.51 55.9658L267.017 43.7599L249.838 41.0475L239.44 48.7327L208.247 50.0889L191.521 25.6771L178.411 21.6085L175.699 8.49852L153.547 1.26538L124.615 11.663L111.957 9.85467Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
