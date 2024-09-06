"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Gyeryong() {

  const mapName = "계룡시"
  const addressName = "충청남도 계룡시"
  const prevId = 34
  // const mapId = 34070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="510" viewBox="0 0 329 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gyeryong" d="M252.604 508.677L154.957 506.352L124.733 431.954L48.0105 434.279L1.51196 301.758L41.036 234.335L43.3607 159.938L3.83704 85.5401L66.61 1.84253L157.282 25.0919L220.055 127.389L203.781 252.935L159.607 297.108L327.002 380.806L303.753 469.153L252.604 508.677Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
