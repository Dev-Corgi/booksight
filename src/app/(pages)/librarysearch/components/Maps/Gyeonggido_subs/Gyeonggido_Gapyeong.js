"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Gapyeong() {

  const mapName = "가평군"
  const addressName = "경기도 가평군"
  const prevId = 31
  // const mapId = 31370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 563" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gapyeong" d="M180.778 36.1858L174.176 1.85425L155.029 8.45648L142.485 40.1472L107.493 88.3435L104.852 135.88L60.6173 149.744L52.0344 212.465H22.9846L1.85742 324.703L28.2663 327.344L65.8991 355.734L82.4047 392.706L89.6671 424.397L104.852 451.466L100.891 478.535L128.62 473.253L157.67 455.427L164.272 477.215L190.681 514.187L197.944 561.723H240.858L271.228 553.801L272.549 504.284L251.422 471.273L269.248 462.03L273.209 388.085L236.897 393.366L239.538 364.317L260.665 338.568L241.518 304.236L255.383 282.449L248.781 246.797L298.958 198.601H320.085L327.347 155.026L310.842 133.239L308.201 104.849L247.46 102.208L250.101 54.0119L184.739 48.7301L180.778 36.1858Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}
