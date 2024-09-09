"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Jeungpyeong() {

  const mapName = "증평군"
  const addressName = "충청북도 증평군"
  const prevId = 33
  // const mapId = 33390;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 331 491" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jeungpyeong" d="M288.785 465.847L327.98 431.764L247.885 387.457L203.578 244.309L235.956 189.777L212.098 128.428L178.016 73.8956L155.862 34.7004L58.7262 2.32178L53.6138 130.132L2.48975 153.99L48.5014 244.309L58.7262 286.913L103.034 298.842L138.821 368.711L162.679 406.202L208.69 489.705H283.672L288.785 465.847Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
