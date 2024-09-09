"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Dobong() {

  const mapName = "도봉구"
  const addressName = "서울특별시 도봉구"
  const prevId = 11
  // const mapId = 11100;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 543" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dobong" d="M237.552 126.2L310.359 87.6553L293.228 216.138L327.49 327.49L306.076 511.649L254.683 541.628L121.917 383.166L10.5656 323.207L31.9794 173.311L2 74.807L53.3932 2L237.552 126.2Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
