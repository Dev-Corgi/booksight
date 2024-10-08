"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Jecheon() {

  const mapName = "제천시"
  const addressName = "충청북도 제천시"
  const prevId = 33
  // const mapId = 33030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 439" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jecheon" d="M241.557 190.889L276.231 163.485L266.723 143.352L281.264 131.048L301.398 146.707L309.227 133.844L295.805 114.27L278.468 85.1887L327.683 44.3627L325.446 29.2626L311.464 26.4663L274.553 41.0071L256.657 20.3144L229.253 3.53661L219.745 8.56995L192.342 35.9737L162.142 16.3996L141.449 50.5145L85.5228 61.6998V43.8034L69.3042 8.01069L35.7485 1.29956L2.19287 25.907L6.10768 63.3775L5.54843 83.5109L30.1559 101.967L37.4263 115.948L62.0338 148.385L67.0672 137.759L93.3525 139.437L99.5043 151.741L127.467 176.908L125.79 202.074L137.534 229.478L122.993 249.052L132.501 269.186L138.093 299.945L114.045 293.234L98.9451 313.367L114.045 331.264L113.486 360.345L95.5895 396.697L111.808 419.627L126.349 405.086L159.904 430.812L176.123 417.949L216.949 437.523L237.083 435.286V400.612L261.69 375.445L252.183 328.467L265.605 304.978L274.553 296.589L266.723 262.474L253.86 227.8L238.76 223.885L241.557 190.889Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
