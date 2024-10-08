"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Chungju() {

  const mapName = "충주시"
  const addressName = "충청북도 충주시"
  const prevId = 33
  // const mapId = 33020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 346" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Chungju" d="M107.385 219.839L127.819 227.137L135.604 248.544L166.255 268.978L193.988 274.817L200.799 271.411L211.989 282.115L221.233 299.63L226.585 323.47L244.587 337.093L257.723 327.362L283.509 332.228L298.105 334.174L305.89 343.418L326.811 324.93L310.755 313.739L297.619 302.549L284.969 315.199L270.86 295.251L286.429 263.626L286.915 238.327L273.779 222.758L286.915 205.243L307.836 211.081L303.457 182.376L294.213 166.807L306.863 149.778L296.646 125.938L299.565 102.098L273.779 82.15L266.967 69.5001L245.56 69.9867L242.154 81.1769L219.774 51.0119L213.449 38.8486L192.041 24.7392L172.58 38.8486L144.848 33.0102L101.546 48.5792L55.3259 2.84521L24.6743 52.4715L35.8646 58.3099L45.5952 65.6079L30.9993 88.9614L24.1878 129.83L10.0784 143.453L8.13226 168.753L1.3208 177.024L4.24 191.62L16.8898 183.349L35.8646 195.998L53.3797 210.594L69.4353 209.135L88.41 234.435L100.087 226.65L107.385 219.839Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
