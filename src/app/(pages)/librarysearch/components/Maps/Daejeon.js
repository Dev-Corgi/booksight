"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Daejeon() {

  const mapName = "대전광역시"
  const addressName = "대전광역시"
  const prevId = 10
  const mapId = 25;

  const dispatch = useDispatch();

  const handlePathClick = (id) => {
    dispatch(setMapId(id))
  };

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])


  return (
<svg viewBox="0 0 326 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#235;&#140;&#128;&#236;&#160;&#132;&#234;&#180;&#145;&#236;&#151;&#173;&#236;&#139;&#156; 1">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Yuseong" onClick={() => handlePathClick(25040,"유성구")} d="M178.505 108.211L160.701 66.008L163.339 57.4355L162.679 21.1674L144.875 6.66016L134.324 17.2109L116.52 15.2326L120.476 47.5442L116.52 73.2616L90.8023 100.957L58.4907 103.595L37.3893 128.653V200.53L24.8603 223.61L20.9037 255.921L8.37476 268.45L55.853 292.189L97.3965 239.436L111.244 220.312L126.411 164.921L157.404 162.283L168.614 151.733L178.505 108.211Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seo" onClick={() => handlePathClick(25030,"서구")} d="M167.295 195.254L156.085 161.624L127.73 165.581L112.563 220.972L57.1718 292.849L50.5776 317.907L76.9545 347.581L104.65 377.914L127.07 343.624L126.411 302.74L139.599 280.979L137.621 261.856L153.447 240.095L162.02 207.783L167.295 195.254Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jung" onClick={() => handlePathClick(25020,"중구")} d="M149.491 282.957L152.128 327.798L181.143 357.472L192.353 337.689L203.563 315.928L194.331 298.783L198.288 279.66L191.694 261.196L215.433 248.667L193.012 232.182L177.846 215.037L178.505 198.551L167.295 194.595L160.701 209.102L153.447 238.776L137.621 260.537L140.259 275.704L149.491 282.957Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Daedeok" onClick={() => handlePathClick(25050,"대덕구")} d="M225.324 178.769L214.114 144.479L249.723 91.066L256.317 67.3269L247.085 58.7544L239.831 31.7181L228.621 44.9066L211.476 68.6457L198.947 64.0297L163.998 57.4355L161.36 66.008L179.165 108.211L170.592 152.392L156.744 162.283L167.955 195.914L179.165 199.87L196.969 183.385L209.498 189.32L225.324 178.769Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dong" onClick={() => handlePathClick(25010,"동구")} d="M204.223 374.617L181.802 357.472L204.223 315.269L194.991 298.124L198.947 279.001L192.353 260.537L216.092 248.008L193.672 231.523L178.505 214.378L179.165 197.892L196.969 181.407L209.498 187.341L225.324 177.45L214.114 143.16L249.723 92.3849L265.549 120.081L276.1 103.595L299.839 106.892L303.795 119.421L316.324 126.015L299.839 138.544L284.013 141.182L281.375 180.747L258.955 201.189L253.02 234.16L258.955 263.175L250.382 287.573L251.701 320.544L204.223 374.617Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</g>
</svg>




  );
}
