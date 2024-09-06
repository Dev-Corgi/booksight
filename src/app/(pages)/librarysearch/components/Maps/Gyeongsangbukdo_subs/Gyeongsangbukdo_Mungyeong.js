"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Mungyeong() {

  const mapName = "문경시"
  const addressName = "경상북도 문경시"
  const prevId = 37
  // const mapId = 37090;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="317" viewBox="0 0 329 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Mungyeong" d="M155.98 229.716L178.129 243.679L221.464 264.383L227.723 304.347L258.057 306.273L261.909 290.384L277.317 286.532L276.354 259.568L263.354 234.531L296.577 201.789L311.985 204.678L314.873 195.53L298.503 174.826L309.577 117.046L327.874 115.12L326.429 67.9338L313.91 55.8965L293.206 48.1926L257.576 5.82112L240.242 1.48767L220.982 18.34L220.019 48.1926L205.093 53.0075L167.536 36.6367L132.869 66.0079L125.165 56.8595L114.09 54.9335L106.868 84.7861L92.4232 111.75L126.128 145.936L106.868 151.714L80.8673 132.936L69.793 142.565L47.1627 128.121L33.1994 156.047L15.3841 169.529L2.38379 170.974L32.7179 203.715L22.6065 242.716L32.7179 282.68L31.7549 306.755L55.8296 314.94L68.83 293.755L100.127 296.644L115.053 270.643L112.164 258.605L132.387 240.79L147.314 238.864L155.98 229.716Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
