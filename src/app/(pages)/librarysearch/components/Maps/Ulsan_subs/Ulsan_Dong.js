"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Ulsan_Dong() {

  const mapName = "동구"
  const addressName = "울산광역시 동구"
  const prevId = 26
  // const mapId = 26030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 652" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M40.8083 334.413L1.46338 438.141L72.9996 473.909L87.3069 649.173L208.919 549.022L276.878 423.834L280.455 191.341L326.953 73.3061L269.724 1.76978L148.113 33.9611L40.8083 137.689V334.413Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
