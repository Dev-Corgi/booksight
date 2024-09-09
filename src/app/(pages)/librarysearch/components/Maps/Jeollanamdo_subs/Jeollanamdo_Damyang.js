"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Damyang() {

  const mapName = "담양군"
  const addressName = "전라남도 담양군"
  const prevId = 36
  // const mapId = 36310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 561" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Damyang" d="M225.704 526.287L287.574 559.463L301.024 526.287L275.021 459.037H302.817L327.028 431.24L282.194 340.677L301.024 323.64V252.803L256.191 234.87L244.534 202.59L268.744 196.313L260.674 129.96L230.188 123.683L220.324 98.5768L246.328 85.1268L250.811 56.4335L235.567 42.9835L222.117 1.73682L182.664 5.32348L164.731 49.2601L146.798 63.6068L144.108 93.1968L101.964 101.267L82.2376 120.993L53.5443 139.823L17.6776 190.037L36.5075 210.66L27.5409 229.49L3.3309 234.87L1.5376 281.497L29.3342 342.47L63.4075 321.847L82.2376 332.607L112.724 381.027L124.381 422.273L145.004 442.897L183.561 445.587L206.874 476.073L191.631 490.42L195.217 519.113L199.701 532.563L225.704 526.287Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
