"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Yeonggwang() {

  const mapName = "영광군"
  const addressName = "전라남도 영광군"
  const prevId = 36
  // const mapId = 36440;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="329" viewBox="0 0 329 329" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeonggwang" d="M21.1829 306.946L77.8472 274.001L57.4217 301.016L64.6694 326.712L104.861 307.604L122.651 311.558L166.797 300.357L210.942 302.992L263.653 295.086L277.49 236.445L276.172 212.066L306.481 180.439L311.752 161.332L325.589 157.378L327.565 134.976L294.621 124.434L272.878 127.07L273.537 157.378L216.872 144.201L212.919 99.3963L195.129 97.4197L177.339 58.5454L184.587 7.81108L131.217 1.8811L106.179 28.8954V63.1576L150.325 105.326L104.861 84.9008L89.7071 94.1252L78.506 132.341L75.8705 167.921L30.4073 177.804L27.7718 218.655L7.34628 222.608L2.0752 267.412L6.02853 279.931L2.0752 299.039C3.39297 297.721 21.1829 306.946 21.1829 306.946Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
