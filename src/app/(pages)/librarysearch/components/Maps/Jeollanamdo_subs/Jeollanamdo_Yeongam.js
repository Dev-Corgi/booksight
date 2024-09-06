"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Yeongam() {

  const mapName = "영암군"
  const addressName = "전라남도 영암군"
  const prevId = 36
  // const mapId = 36410;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="331" height="214" viewBox="0 0 331 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongam" d="M39.798 162.721L13.6702 166.263C13.6702 166.263 3.48484 160.064 3.04199 160.064L14.9988 149.878L14.1131 138.807L37.5838 135.264L61.9402 130.836L66.8114 122.422L92.9392 139.693L122.61 94.5228L127.481 62.6381L138.552 30.7533L149.623 17.0252L167.337 18.7965L175.751 40.053L194.35 42.7101L203.65 46.2528L204.536 18.7965L198.779 1.52563H215.607L236.863 25.4392L237.749 44.9243L259.891 38.2817L282.033 52.0098L306.39 60.4238H328.532L319.232 77.6947L292.219 91.4229L291.333 123.308H270.962L247.492 148.993L229.778 144.564L197.45 164.935L207.636 180.434L200.993 199.92L181.508 212.762L119.953 206.119L87.1823 165.821L58.3974 170.249L39.798 162.721Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}
