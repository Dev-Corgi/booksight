"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Pyeongchang() {

  const mapName = "평창군"
  const addressName = "강원도 평창군"
  const prevId = 32
  const mapId = 32340;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="441" viewBox="0 0 329 441" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M225.427 429.316L219.662 438.629L200.594 425.769L176.204 431.09L166.005 413.796H148.267L144.72 402.71L126.095 383.198L111.904 385.859L107.47 420.004L91.5059 429.316L74.6549 411.135L56.0302 415.569L54.2564 389.85L48.4916 357.921L30.7537 335.749L14.7896 331.315L1.92969 306.925V285.196L37.4054 247.947L22.3282 174.778L8.13792 157.483L18.3372 131.764L47.1613 96.7312L119.887 101.166L129.199 77.2196L144.276 67.9072L176.648 66.1334L174.874 47.9521L189.951 11.146L213.454 1.83362L222.766 9.37219L220.106 38.6397L250.703 31.1011L261.79 36.4224H287.953L313.229 60.3686L320.768 87.8623L327.42 111.808L306.134 130.877L308.795 150.388L311.456 166.796H303.917L298.152 179.656L281.301 182.316L268.441 207.149L250.703 219.123L232.079 195.176C232.079 195.176 217.001 222.67 217.001 226.218C217.001 229.765 212.567 264.798 212.567 264.798L202.368 258.589L204.141 287.857L176.204 289.631L166.892 328.211L188.177 339.297L193.942 355.704L203.255 376.99L225.427 429.316Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}
