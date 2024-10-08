"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Sejong() {

  const mapName = "세종특별시"
  const addressName = "세종특별시"
  const prevId = 10
  const mapId = 29;

  const dispatch = useDispatch();

  const handlePathClick = (id) => {
    dispatch(setMapId(id))
  };

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
    <svg viewBox="0 0 325 479" fill="none" xmlns="http://www.w3.org/2000/svg">
  <MapHoverAnimation>
<path d="M197.54 456.096L148.898 397.175L179.525 360.661L140.791 328.296L111.966 290.952L111.066 239.5L75.9354 212.114L27.2935 154.023L41.7059 115.85L35.4005 64.3977L8.3772 40.3315L26.3927 8.79649L74.1339 6.30688L166.013 56.9289L211.052 56.099L216.456 76.8457H233.571L228.167 114.19L199.342 132.447L211.953 161.492L232.67 184.729V222.903L267.801 236.18L301.129 270.205L298.427 315.018L316.443 339.914L295.725 360.661L299.328 398.005L295.725 434.519L256.991 471.863L217.357 472.693L197.54 456.096Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>


  );
}
