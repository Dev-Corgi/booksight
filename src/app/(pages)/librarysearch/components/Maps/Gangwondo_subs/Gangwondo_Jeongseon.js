"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Jeongseon() {

  const mapName = "정선군"
  const addressName = "강원도 정선군"
  const prevId = 32
  const mapId = 32350;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="374" viewBox="0 0 329 374" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M305.712 116.373L327.224 83.6369L308.518 62.1246L313.662 43.886L306.647 33.1299L292.15 47.6273L267.832 24.2444L263.155 4.13508L252.399 1.3291L238.837 22.8414L234.16 46.2243L225.275 65.3982L208.439 68.2042L200.489 58.3834L192.539 40.1447H148.579L134.082 49.0302L111.634 28.4533L90.1217 40.1447L70.4801 14.8912L54.5797 47.6273L49.9032 88.3135L39.147 81.7663L41.0176 112.632L13.4258 115.438L1.73438 155.189L24.182 166.88L63.4652 261.815L57.3856 271.635L42.8883 288.939L53.6444 309.048L59.7239 319.804L79.3656 321.675L96.2013 344.122L137.355 350.67L173.833 326.351L209.374 345.525L234.16 359.087L264.558 361.893L263.623 372.65L285.135 368.908L279.056 323.546L265.026 280.053L261.285 263.685L244.449 241.238L249.125 221.128L238.369 207.566L240.24 181.377L258.011 154.253L270.638 144.432L273.444 128.064L305.712 116.373Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>





  );
}
