"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Nowon() {

  const mapName = "노원구"
  const addressName = "서울특별시 노원구"
  const prevId = 11
  // const mapId = 11110;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 505" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nowon" d="M41.1151 114.575L72.9564 1.3606L189.708 15.5123L210.936 256.092L327.688 471.906L210.936 457.754L147.253 503.747L72.9564 464.83L2.19775 379.92L44.653 362.23L65.8807 210.099L41.1151 114.575Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
