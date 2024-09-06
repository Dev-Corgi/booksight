"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Dalseong() {

  const mapName = "달성군"
  const addressName = "대구광역시 달성군"
  const prevId = 22
  // const mapId = 22310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="402" viewBox="0 0 329 402" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dalseong" d="M114.644 97.4564L150.664 92.2171L157.214 70.6051L104.821 50.3029L102.201 11.0083L83.2088 1.8396L48.4986 31.9655L27.5415 68.6404V122.998L63.5615 113.829L113.335 139.371L114.644 97.4564ZM93.6873 371.209L146.08 369.899L153.284 327.985L160.488 310.957L166.382 278.866L200.438 252.015L254.795 253.98L250.866 288.035L306.533 268.388L318.321 233.023L327.49 212.066L320.286 187.179L256.76 161.638L222.704 157.708L215.5 175.391L200.438 202.242L166.382 191.108L146.08 170.806L127.088 158.363L109.405 155.743L59.632 163.602L30.816 225.819L76.0048 262.494L70.7655 301.788L2 293.929L7.23928 329.294L41.2946 363.35L43.9142 400.025L93.6873 371.209Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}
