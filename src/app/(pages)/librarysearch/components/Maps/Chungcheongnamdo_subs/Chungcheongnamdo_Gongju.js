"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Gongju() {

  const mapName = "공주시"
  const addressName = "충청남도 공주시"
  const prevId = 34
  // const mapId = 34020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="394" viewBox="0 0 329 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gongju" d="M179.239 333.483L164.773 335.152L142.517 391.904L81.8706 368.536V293.423L109.69 270.054L109.134 236.114L81.8706 207.738H42.9231L33.4644 216.641L1.75 177.693L3.41915 120.385L41.8103 66.4144L61.8404 2.4292L80.7578 21.903L105.239 15.2263L136.954 16.8954L143.074 26.3541L161.435 28.0233L172.006 17.4518L186.473 13.5571L210.397 38.5948L238.217 75.8731L262.142 95.9033L262.698 130.4L280.503 155.437L304.428 177.137L285.511 201.618L315.556 241.122L327.24 250.581L309.435 271.724V332.37L300.533 346.837L284.398 325.137L262.698 319.573L249.901 339.047L211.51 364.641L189.254 350.731L179.239 333.483Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
