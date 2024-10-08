"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Jincheon() {

  const mapName = "진천군"
  const addressName = "충청북도 진천군"
  const prevId = 33
  // const mapId = 33350;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 397" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jincheon" d="M33.914 236.174L59.0121 244.018L60.5807 286.37L106.855 307.547L136.659 331.861L133.522 357.743L153.13 374.214C153.13 374.214 146.855 396.959 151.561 395.39C156.267 393.821 193.13 384.41 193.13 384.41L239.404 360.096L275.483 378.135L314.698 345.978L290.384 303.625L313.13 295.782L316.267 233.821L328.032 218.92L260.581 153.822L232.345 124.802L209.6 134.214L188.424 109.9L186.855 76.1745L189.992 3.2334L156.267 30.6844L113.914 37.7432L111.561 73.0373L124.894 90.2922L95.8748 119.312L38.6199 120.88L2.5415 183.625L25.2866 201.665L33.914 236.174Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
