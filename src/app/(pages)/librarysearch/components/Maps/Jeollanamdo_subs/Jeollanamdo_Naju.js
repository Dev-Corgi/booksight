"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Naju() {

  const mapName = "나주시"
  const addressName = "전라남도 나주시"
  const prevId = 36
  // const mapId = 36040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="264" viewBox="0 0 329 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Naju" d="M2.36328 194.683L23.7994 229.658L41.8508 261.248L53.697 225.145L70.0562 203.145L92.6205 205.401L103.339 232.478L127.031 235.863L138.877 242.632L140.005 205.401L132.672 183.401H154.108L178.929 217.248L181.185 242.068L210.519 230.222L238.724 247.709L266.93 258.427L297.956 235.299L309.802 170.991L327.853 137.144L308.674 104.426L323.905 60.9898V37.8614L284.981 45.1948L264.109 60.9898L231.391 62.118L217.288 50.8359L220.673 39.5537L201.493 11.3484L147.903 12.4766L127.595 1.75854L121.954 15.8612L88.6717 22.6305L74.569 47.4512L73.4408 90.8875L79.0819 116.836L63.851 142.785L46.3637 133.196L27.184 146.17L23.7994 162.529L22.6711 181.145L33.3892 204.273L17.0301 193.555L2.36328 194.683Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
