"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Eumseong() {

  const mapName = "음성군"
  const addressName = "충청북도 음성군"
  const prevId = 33
  // const mapId = 33370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="394" viewBox="0 0 329 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Eumseong" d="M232.621 339.926L219.254 372.675L185.836 361.313L157.097 391.389L148.408 372.007L110.98 356.635L120.337 346.609L38.7976 266.406L19.4153 274.427L1.36963 253.708L2.70635 162.811V133.403L56.1749 122.71L87.5877 129.393L103.628 137.413L110.98 103.327L127.689 99.3171L144.398 106.001L143.061 85.2816L169.127 73.2512L167.122 2.40527L223.264 28.4712L240.642 33.1497L258.687 43.8434L233.958 74.5879L224.601 130.73L208.56 150.112L202.545 184.198L193.188 195.561L197.198 215.611L214.576 204.249L233.958 216.948L264.702 242.346L286.758 240.341L310.819 272.422L326.86 293.809L320.844 333.242L289.432 343.268L274.059 340.594L232.621 339.926Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>






  );
}
