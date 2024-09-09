"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gwangjin() {

  const mapName = "광진구"
  const addressName = "서울특별시 광진구"
  const prevId = 11
  // const mapId = 11050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 428" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gwangjin" d="M194.659 57.8812L121.852 70.7296L91.8726 156.385L31.914 301.999L1.93457 396.22L61.8932 426.199L220.355 404.785L327.425 246.323L323.142 152.102L237.487 2.20532L194.659 57.8812Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
