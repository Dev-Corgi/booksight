"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Ulsan_Ulju() {

  const mapName = "울주군"
  const addressName = "울산광역시 울주군"
  const prevId = 26
  // const mapId = 26310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Ulju" d="M322.915 371.768L317.244 343.982L322.915 326.97L318.945 308.825L326.884 294.081L313.842 269.131L298.531 245.314L270.746 230.571L244.661 198.249L221.979 191.444L235.588 172.731L233.32 150.616L257.136 139.842L267.91 142.11L264.508 95.0447L263.941 74.6307L237.289 61.5884L233.887 17.9251L191.925 6.58397L148.262 8.28514L140.323 1.48047L121.043 17.9251L90.422 23.0286L69.441 65.5578L84.7515 87.6729L60.9351 88.24L26.9118 101.282L40.5211 121.696L35.4176 146.647L1.39429 166.494V185.207L20.6742 201.651L30.3141 211.291L72.2762 216.962L110.269 244.747L149.963 299.185L186.254 296.916L204.967 321.867L191.925 346.817L225.948 351.921L241.259 346.25L257.703 360.427L259.972 398.419L271.88 409.194L302.501 383.676L319.513 379.707L322.915 371.768Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
