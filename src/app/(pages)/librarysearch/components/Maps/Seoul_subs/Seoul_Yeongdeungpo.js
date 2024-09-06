"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Yeongdeungpo() {

  const mapName = "영등포구"
  const addressName = "서울특별시 영등포구"
  const prevId = 11
  // const mapId = 11190;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="397" viewBox="0 0 330 397" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongdeungpo" d="M14.0707 29.9523L7.92943 2.31641L219.805 109.79L281.218 155.849L327.278 211.121L225.946 226.475L176.816 297.1L167.604 340.089L93.9079 395.361L50.9187 376.937L47.848 321.665L29.424 266.393L4.85876 238.757L1.78809 174.273L44.7773 137.425L4.85876 51.447L14.0707 29.9523Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
