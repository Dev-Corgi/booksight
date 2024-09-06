"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Jung() {

  const mapName = "중구"
  const addressName = "인천광역시 중구"
  const prevId = 23
  // const mapId = 23010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="261" viewBox="0 0 329 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<g id="Jung">
<path d="M131.228 2.13428L114.511 18.8513L101.727 62.1189L25.0258 66.0523L32.8926 96.5362L1.42529 119.153L52.5596 187.988L104.677 159.471L133.195 119.153L174.496 107.353L228.58 86.7027L198.096 37.535L131.228 2.13428ZM31.9092 228.306L60.4265 258.79L75.1768 232.239L50.593 222.406L31.9092 228.306ZM296.431 195.855L275.781 183.071L273.814 159.471L258.081 173.238L246.28 162.421L247.264 137.837L262.997 116.203L264.964 90.6361L278.731 97.5196L303.315 121.12L326.915 130.954L315.115 166.354L323.965 193.888L296.431 195.855Z" fill="black"/>
<path d="M131.228 2.13428L114.511 18.8513L101.727 62.1189L25.0258 66.0523L32.8926 96.5362L1.42529 119.153L52.5596 187.988L104.677 159.471L133.195 119.153L174.496 107.353L228.58 86.7027L198.096 37.535L131.228 2.13428ZM31.9092 228.306L60.4265 258.79L75.1768 232.239L50.593 222.406L31.9092 228.306Z" fill="black"/>
<path d="M296.431 195.855L275.781 183.071L273.814 159.471L258.081 173.238L246.28 162.421L247.264 137.837L262.997 116.203L264.964 90.6361L278.731 97.5196L303.315 121.12L326.915 130.954L315.115 166.354L323.965 193.888L296.431 195.855Z" fill="black"/>
<path d="M131.228 2.13428L114.511 18.8513L101.727 62.1189L25.0258 66.0523L32.8926 96.5362L1.42529 119.153L52.5596 187.988L104.677 159.471L133.195 119.153L174.496 107.353L228.58 86.7027L198.096 37.535L131.228 2.13428Z" fill="black"/>
<path d="M31.9092 228.306L60.4265 258.79L75.1768 232.239L50.593 222.406L31.9092 228.306ZM296.431 195.855L275.781 183.071L273.814 159.471L258.081 173.238L246.28 162.421L247.264 137.837L262.997 116.203L264.964 90.6361L278.731 97.5196L303.315 121.12L326.915 130.954L315.115 166.354L323.965 193.888L296.431 195.855Z" fill="black"/>
<path d="M131.228 2.13428L114.511 18.8513L101.727 62.1189L25.0258 66.0523L32.8926 96.5362L1.42529 119.153L52.5596 187.988L104.677 159.471L133.195 119.153L174.496 107.353L228.58 86.7027L198.096 37.535L131.228 2.13428ZM31.9092 228.306L60.4265 258.79L75.1768 232.239L50.593 222.406L31.9092 228.306ZM296.431 195.855L275.781 183.071L273.814 159.471L258.081 173.238L246.28 162.421L247.264 137.837L262.997 116.203L264.964 90.6361L278.731 97.5196L303.315 121.12L326.915 130.954L315.115 166.354L323.965 193.888L296.431 195.855Z" stroke="#DAAA63" strokeWidth="2"/>
</g>
</MapHoverAnimation>
</svg>

















  );
}
