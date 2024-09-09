"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daejeon_Seo() {

  const mapName = "서구"
  const addressName = "대전광역시 서구"
  const prevId = 25
  // const mapId = 25030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 607" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seo" d="M327.068 95.4093L295.806 1.62402L216.732 12.6576L174.437 167.127L19.9669 367.57L1.57764 437.45L75.1347 520.201L152.37 604.792L214.893 509.168L213.054 395.154L249.833 334.47L244.316 281.141L288.45 220.456L312.356 130.349L327.068 95.4093Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
