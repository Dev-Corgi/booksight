"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Jeju() {

  const mapName = "제주도"
  const addressName = "제주도"
  const prevId = 10
  const mapId = 39;

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
<svg viewBox="0 0 326 225" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#236;&#160;&#156;&#236;&#163;&#188;&#237;&#138;&#185;&#235;&#179;&#132;&#236;&#158;&#144;&#236;&#185;&#152;&#235;&#143;&#132; 2" clipPath="url(#clip0_844_4179)">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Jeju" onClick={() => handlePathClick(39010,"제주시")} d="M2.86377 111.29L40.9589 75.8223L42.0098 66.1015L55.146 57.4316L62.7651 48.2362L89.3003 47.1853L111.369 36.4136L133.438 24.3282H164.44L181.517 16.7092L200.696 10.6665L227.231 9.61561L235.638 1.99658L262.699 3.04748L268.741 17.7601L287.395 22.7519L295.802 23.2773L297.379 35.3627L295.802 46.1344L261.122 63.9997L250.088 65.0506L240.63 76.3478H214.62L206.476 82.9159L195.967 84.4922L180.466 96.0521L154.982 96.5776L147.888 103.671L114.785 105.248L113.208 115.494L88.2494 112.341L68.8077 116.019L40.1707 136.249L33.6026 144.394L14.9491 132.834L2.86377 136.775V111.29ZM314.456 26.9555L309.989 36.6763L316.032 43.7699L320.498 40.0917L323.126 29.8454L314.456 26.9555Z" fill="currentColor" stroke="#DAAA63" strokeWidth="3.94088"/>
</MapHoverAnimation>
<MapHoverAnimation>
<g id="Seogwipo" onClick={() => handlePathClick(39020,"서귀포시")} >
<path d="M9.4319 148.86L2.86377 136.775L14.9491 132.834L33.6026 144.394L40.1707 136.249L67.7569 115.494L86.9358 112.341L113.471 115.494L115.047 105.248L148.151 103.671L155.244 96.5777L180.729 96.0523L196.229 84.4924L206.738 82.916L214.883 76.3479H240.893L250.351 65.0507L263.487 63.4744L296.065 46.1345L305.523 53.7535L309.464 59.7962L302.37 68.4661L306.311 75.0343L294.226 86.5942L284.242 96.8405L266.64 121.274L266.114 131.52L243.52 134.147L226.968 147.809C226.968 147.809 194.916 146.233 193.865 147.809C192.814 149.385 175.737 166.988 175.737 166.988L162.601 162.522L129.497 166.2L114.522 164.623H105.064L96.9193 160.683L89.8257 165.674L62.7651 163.573L52.7815 170.666L51.2052 180.387L42.798 179.336L25.7208 160.945L14.6864 158.318L9.4319 148.86Z" fill="currentColor"/>
<path d="M41.4844 221.635L43.0607 210.863L49.8916 215.592L45.9507 222.686L41.4844 221.635Z" fill="currentColor"/>
<path d="M9.4319 148.86L2.86377 136.775L14.9491 132.834L33.6026 144.394L40.1707 136.249L67.7569 115.494L86.9358 112.341L113.471 115.494L115.047 105.248L148.151 103.671L155.244 96.5777L180.729 96.0523L196.229 84.4924L206.738 82.916L214.883 76.3479H240.893L250.351 65.0507L263.487 63.4744L296.065 46.1345L305.523 53.7535L309.464 59.7962L302.37 68.4661L306.311 75.0343L294.226 86.5942L284.242 96.8405L266.64 121.274L266.114 131.52L243.52 134.147L226.968 147.809C226.968 147.809 194.916 146.233 193.865 147.809C192.814 149.385 175.737 166.988 175.737 166.988L162.601 162.522L129.497 166.2L114.522 164.623H105.064L96.9193 160.683L89.8257 165.674L62.7651 163.573L52.7815 170.666L51.2052 180.387L42.798 179.336L25.7208 160.945L14.6864 158.318L9.4319 148.86Z" stroke="#DAAA63" strokeWidth="3.94088"/>
<path d="M41.4844 221.635L43.0607 210.863L49.8916 215.592L45.9507 222.686L41.4844 221.635Z" stroke="#DAAA63" strokeWidth="3.94088"/>
</g>
</MapHoverAnimation>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_844_4179">
<rect width="325.49" height="224.945" fill="white"/>
</clipPath>
</defs>
</svg>



  );
}
