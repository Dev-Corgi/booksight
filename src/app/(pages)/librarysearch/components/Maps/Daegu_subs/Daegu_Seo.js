"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Seo() {

  const mapName = "서구"
  const addressName = "대구광역시 서구"
  const prevId = 22
  // const mapId = 22030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="244" viewBox="0 0 328 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seo" d="M1.21924 167.737L36.5986 50.9855L185.192 1.45435L312.558 22.6819L326.709 125.282L305.482 199.579L195.806 242.034H121.509L1.21924 167.737Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}
