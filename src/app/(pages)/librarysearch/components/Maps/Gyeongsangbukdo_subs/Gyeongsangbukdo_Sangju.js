"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Sangju() {

  const mapName = "상주시"
  const addressName = "경상북도 상주시"
  const prevId = 37
  // const mapId = 37080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Sangju" d="M196.173 303.606L206.319 286.154L217.277 260.992L253.803 258.557L265.573 226.495L282.618 213.102L297.229 224.059L309.81 202.144L327.667 181.04L316.709 158.312L305.751 140.455L284.242 131.932L279.777 90.9414L254.209 89.318L248.933 55.6326L212.406 38.1811L193.737 26.4116L186.026 33.311L173.445 34.9344L158.023 49.9507L158.835 62.532L146.253 82.0127L119.873 79.5777L108.915 97.4349L90.2462 89.7238L89.4345 66.9963L80.9117 36.5578L55.3433 8.96011L50.4731 2.46655L36.6743 18.2946L40.7328 28.8467L2.17725 37.3695L7.45327 49.9507L28.5574 61.7203H44.7913L49.2556 79.1718L67.1129 101.088L67.9246 113.669L52.5024 123.003L51.6907 166.023L56.155 176.169L44.3854 188.751L57.3726 206.608L58.9959 223.248L32.6158 252.875L41.1386 278.037L56.5609 280.472L69.548 261.803L84.9702 281.284L109.727 294.677L122.308 282.907L142.601 283.719L152.747 293.054L165.734 304.823L182.78 300.765L196.173 303.606Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
