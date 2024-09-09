"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Gangseo() {

  const mapName = "강서구"
  const addressName = "부산광역시 강서구"
  const prevId = 21
  // const mapId = 21120;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 523" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangseo" d="M75.0692 328.597L151.46 327.49L165.852 262.17L184.673 251.099L185.78 323.061L207.922 316.419L231.172 267.706L256.635 257.742L264.385 215.672L267.706 130.425L316.419 85.033L327.49 1.99988L240.028 32.9989L207.922 65.1051L141.496 68.4264L116.032 125.996L119.354 171.388L75.0692 149.245L52.927 178.03L2 182.459L13.0711 213.458L68.4265 256.635L72.855 285.42L42.963 309.776L75.0692 328.597ZM63.9981 352.953L2 395.023L23.0351 408.309L30.7848 447.058L51.8199 474.735L61.7839 520.127L79.4976 492.449L72.855 459.236L88.3545 426.023L100.533 387.274L88.3545 365.132L63.9981 352.953ZM141.496 346.311L103.854 350.739L116.032 371.774L148.138 367.346L141.496 346.311Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
