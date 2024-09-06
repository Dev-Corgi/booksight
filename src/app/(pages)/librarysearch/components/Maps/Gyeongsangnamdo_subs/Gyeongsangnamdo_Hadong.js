"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Hadong() {

  const mapName = "하동군"
  const addressName = "경상남도 하동군"
  const prevId = 38
  // const mapId = 38360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="433" viewBox="0 0 329 433" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hadong" d="M35.8236 9.27208L1.27441 40.7907L14.0031 63.2173L47.34 107.465L42.491 165.047L101.285 218.992L106.134 261.421L140.684 289.303L149.775 308.093L168.565 316.578L177.657 355.37L190.386 354.158L185.537 380.828L169.171 397.193L181.9 425.075L221.298 431.136L240.694 418.408L248.574 429.924L289.185 419.62L307.974 386.889V354.158L317.066 350.521L310.399 301.425L298.883 269.907L302.519 243.843L273.425 215.961L288.578 204.445L316.46 205.657L326.764 196.565L310.399 169.896L282.517 152.318L281.305 122.012L275.244 95.3421L264.939 86.2502L235.845 122.618L178.87 118.981L148.563 92.3114L109.165 67.4602L111.589 11.0904L43.7033 1.99854L35.8236 9.27208Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
