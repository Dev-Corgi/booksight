"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Yeongdeok() {

  const mapName = "영덕군"
  const addressName = "경상북도 영덕군"
  const prevId = 37
  // const mapId = 37350;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 549" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongdeok" d="M251.505 547.922L163.555 543.411L171.824 493.047L152.279 471.247L122.211 475.758L85.3771 436.669L83.1219 393.07L55.3086 336.691L22.9852 329.926L3.44068 290.837L1.18555 232.204L11.7095 227.694L74.8531 243.48L84.6253 229.949L98.9078 151.019L71.8463 105.917L93.6458 53.2971L85.3771 17.2151L98.156 2.93265L128.224 1.4292L169.568 8.94629L204.147 30.7459L224.443 13.4566L297.359 11.9531L285.332 60.8142L287.587 117.192L326.676 167.557L322.165 223.935L311.641 284.824L309.386 361.498L253.76 457.717L251.505 547.922Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
