"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Seo() {

  const mapName = "서구"
  const addressName = "인천광역시 서구"
  const prevId = 23
  // const mapId = 23080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 430" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seo" d="M242.548 428.634L197.3 422.796L147.674 384.847V360.033L98.0477 352.735L99.5074 306.028L171.027 294.352L67.3962 284.134L60.0982 206.776L1.71436 133.796L125.78 78.3314L168.108 2.43237L327.204 120.66L298.012 160.069L245.467 155.69L270.28 189.261L280.497 222.831L295.093 237.427L238.169 281.215L252.765 308.948L242.548 346.897L260.063 376.089L242.548 428.634Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}
