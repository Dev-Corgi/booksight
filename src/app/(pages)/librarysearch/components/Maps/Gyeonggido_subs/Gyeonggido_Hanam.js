"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Hanam() {

  const mapName = "하남시"
  const addressName = "경기도 하남시"
  const prevId = 31
  // const mapId = 31180;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hanam" d="M2.24365 336.687L59.1254 349.328L104.947 322.467L213.97 328.787L240.831 347.748L270.852 305.086L261.372 256.105L327.734 237.144L267.692 164.462L213.97 112.32L134.968 8.03713L101.787 1.71704L74.9259 66.4989L90.7264 96.52L97.0466 142.341L27.5244 194.483L21.2043 230.824L41.7449 286.126L2.24365 336.687Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
