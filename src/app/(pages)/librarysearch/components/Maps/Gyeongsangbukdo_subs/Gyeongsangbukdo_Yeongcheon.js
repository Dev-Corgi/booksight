"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Yeongcheon() {

  const mapName = "영천시"
  const addressName = "경상북도 영천시"
  const prevId = 37
  // const mapId = 37070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 315" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongcheon" d="M191.2 310.658L151.078 304.64L126.503 275.551L129.512 257.998L119.482 235.931L116.472 200.824L79.3595 189.79L59.2985 173.741L30.7115 178.255L23.6901 157.693L1.62305 151.173L5.63527 101.522L32.2161 66.415L83.8732 81.9623L108.949 41.3387L148.068 34.3174L144.056 1.21667L175.652 4.22586L201.732 15.7609L259.407 24.2869L275.456 50.3662L294.012 51.8708L295.517 69.4242L318.587 83.9684L321.596 97.0081L327.113 101.522L321.596 120.58L327.113 151.173L310.061 146.659L300.031 140.641L308.557 194.304L327.113 220.383L311.064 226.402L296.52 210.353H269.438L249.377 245.46L246.367 287.588L213.267 313.667L191.2 310.658Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
