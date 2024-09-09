"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Geumsan() {

  const mapName = "금산군"
  const addressName = "충청남도 금산군"
  const prevId = 34
  // const mapId = 34310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 378" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Geumsan" d="M88.5643 346.858L106.809 327.153L138.92 376.779L217.009 373.86L225.037 304.529L308.963 357.805L322.83 315.476L308.963 280.446L327.208 262.201L306.044 212.575L276.852 184.112L289.259 154.191L287.799 120.62L281.961 81.2109L268.095 61.5064H235.983L214.819 35.9635L176.14 46.9104L120.675 106.024L97.3218 84.1301L63.7511 54.2084L60.8319 4.5821L49.1552 1.66284L34.5592 22.0972L35.289 71.7235L14.8546 106.754L1.71826 187.761L25.0718 209.655L43.3168 291.393L79.8067 343.938L88.5643 346.858Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
