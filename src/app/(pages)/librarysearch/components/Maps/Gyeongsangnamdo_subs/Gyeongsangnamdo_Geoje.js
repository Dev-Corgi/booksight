"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Geoje() {

  const mapName = "거제시"
  const addressName = "경상남도 거제시"
  const prevId = 38
  // const mapId = 38090;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="497" viewBox="0 0 330 497" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<g id="Geoje">
<path d="M103.843 198.396L59.4965 172.457L36.9046 190.029L1.76172 230.192L5.10877 278.722L31.0475 297.967L39.4148 323.906L50.2924 309.682L88.7823 295.457L118.905 276.212L145.68 316.375L128.109 349.008L96.3128 374.947L97.9863 402.559L128.109 395.865L123.088 425.151L137.313 444.396L144.007 454.437L124.762 485.396L140.66 495.437L196.721 481.212L182.497 458.62L201.741 455.273L230.19 465.314L244.415 444.396L207.599 430.171L204.252 386.661L230.19 369.09L226.844 339.804L276.211 338.131L300.476 360.722L327.252 362.396L308.007 328.09L274.537 313.865L282.905 286.253L313.027 284.58L308.007 267.008L325.578 246.09L322.231 215.131L292.109 242.743L272.864 211.784L293.782 164.926L290.435 111.375L263.66 97.1509L258.639 51.9673L288.762 26.0284V1.76318L239.395 3.43663L236.048 37.7428L218.476 73.7223L190.027 104.682L161.578 103.008L137.313 148.192L167.435 203.416L137.313 179.151L103.843 198.396Z" fill="black"/>
<path d="M59.4965 92.9672L41.9251 105.518L43.5985 144.008C43.5985 144.008 75.3944 155.722 75.3944 145.682V116.396L64.5169 114.722L59.4965 88.7836M59.4965 172.457L103.843 198.396L137.313 179.151L167.435 203.416L137.313 148.192L161.578 103.008L190.027 104.682L218.476 73.7223L236.048 37.7428L239.395 3.43663L288.762 1.76318V26.0284L258.639 51.9673L263.66 97.1509L290.435 111.375L293.782 164.926L272.864 211.784L292.109 242.743L322.231 215.131L325.578 246.09L308.007 267.008L313.027 284.58L282.905 286.253L274.537 313.865L308.007 328.09L327.252 362.396L300.476 360.722L276.211 338.131L226.844 339.804L230.19 369.09L204.252 386.661L207.599 430.171L244.415 444.396L230.19 465.314L201.741 455.273L182.497 458.62L196.721 481.212L140.66 495.437L124.762 485.396L144.007 454.437L137.313 444.396L123.088 425.151L128.109 395.865L97.9863 402.559L96.3128 374.947L128.109 349.008L145.68 316.375L118.905 276.212L88.7823 295.457L50.2924 309.682L39.4148 323.906L31.0475 297.967L5.10877 278.722L1.76172 230.192L36.9046 190.029L59.4965 172.457Z" stroke="#DAAA63" strokeWidth="2"/>
</g>
</MapHoverAnimation>
</svg>

















  );
}
