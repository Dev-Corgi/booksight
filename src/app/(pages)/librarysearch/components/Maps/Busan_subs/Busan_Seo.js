"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Seo() {

  const mapName = "서구"
  const addressName = "부산광역시 서구"
  const prevId = 21
  // const mapId = 21020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="930" viewBox="0 0 329 930" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seo" d="M213.297 926.598L93.3798 766.708L99.0901 549.715L41.9867 361.273L2.01416 252.777L156.194 1.52124L276.111 41.4937L236.139 172.832L298.952 269.908L219.008 401.246L327.504 492.611L213.297 635.37V926.598Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}
