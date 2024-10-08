"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Uiseong() {

  const mapName = "의성군"
  const addressName = "경상북도 의성군"
  const prevId = 37
  // const mapId = 37320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 222" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Uiseong" d="M87.0481 137.961L65.8689 163.971L34.6576 122.356L14.2215 135.36L1.58838 122.356L13.4784 99.3187L27.5978 82.9699L9.01964 45.442L22.396 29.0931L26.4832 4.56993L45.8045 3.82679L50.6348 15.3453L66.9836 1.59741L74.7865 2.34053V14.6021L89.649 20.9187L100.424 7.91399L114.544 15.7169L136.466 22.0334L152.072 56.5889L172.508 75.9102L223.412 54.3595L226.385 31.3225L235.674 32.8088L244.963 26.4922L287.693 51.7585L293.266 73.3093L313.702 108.608L327.078 150.223L318.532 151.709L317.046 166.2L303.67 175.489L324.849 184.778L317.046 197.04L327.078 213.017L324.106 220.077L299.954 206.329L275.059 219.334L239.761 218.591L204.462 204.843L188.857 210.416L187.37 185.893L157.645 165.829L142.04 168.801L137.952 154.31L110.457 151.338L95.5941 137.59L87.0481 137.961Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
