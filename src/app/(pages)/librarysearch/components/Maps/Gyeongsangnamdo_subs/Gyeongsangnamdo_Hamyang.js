"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Hamyang() {

  const mapName = "함양군"
  const addressName = "경상남도 함양군"
  const prevId = 38
  // const mapId = 38380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hamyang" d="M179.716 592.763L137.566 628.668L50.9247 616.96L32.9721 587.299L37.6554 549.052L84.4885 506.121L100.099 465.533L66.5358 452.263L57.9497 416.358L73.5607 389.039L39.997 328.156L1.75 287.567L28.2887 267.273L36.8748 237.612L59.5108 214.976L41.5581 162.679L59.5108 112.724L86.0496 90.0875L94.6356 31.5462L99.3189 1.88525L141.469 33.8879L146.152 61.2071L190.643 47.9378L215.621 77.5987L264.796 120.529L298.36 156.434L324.898 149.409L327.24 219.659L291.335 278.2L306.946 287.567L273.382 337.522L262.454 373.428L257.771 411.675L237.477 454.605L179.716 592.763Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}
