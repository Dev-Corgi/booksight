"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Gangneung() {

  const mapName = "강릉시"
  const addressName = "강원도 강릉시"
  const prevId = 32
  const mapId = 32030;

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
<svg width="328" height="343" viewBox="0 0 328 343" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M147.836 314.799H104.19L89.7959 323.621L65.1868 302.262L78.6522 276.26L96.2964 273.474L100.011 260.009H110.69L105.583 222.399L127.87 202.433L112.083 148.572L85.6171 123.498H58.222L46.614 117.926L14.5757 125.82L17.3616 95.1744L5.75357 86.3523L1.11035 69.1723L4.82494 55.707L43.8281 16.2396L61.4723 24.1331L108.369 9.73907L121.834 3.23858L158.051 1.38129L169.659 6.95318L172.445 30.1693L200.769 63.6005L249.523 116.533L247.666 132.784H256.488C256.488 132.784 323.814 195.468 322.886 199.183C321.957 202.897 314.992 227.971 314.992 227.971L326.6 250.258L315.921 304.119L267.167 317.585L260.202 306.905L245.808 321.299L221.663 298.083L217.02 278.117L204.484 274.403L192.875 296.69L188.232 323.621L179.41 338.944L162.695 341.73L154.801 331.979L147.836 314.799Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>





  );
}
