"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Gurye() {

  const mapName = "구례군"
  const addressName = "전라남도 구례군"
  const prevId = 36
  // const mapId = 36330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="413" viewBox="0 0 329 413" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gurye" d="M58.3999 274.077L1.71826 268.924V219.113L53.247 194.207L18.8945 134.09L21.471 87.7143L84.1643 1.83301L152.01 4.40945L220.715 49.0677L262.797 91.1495L285.126 130.655L327.208 190.772L319.479 278.371L304.879 308.429L297.15 368.546L267.95 381.428L223.292 411.487L191.516 366.828H174.34L129.681 324.747L92.7524 294.688L58.3999 274.077Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
