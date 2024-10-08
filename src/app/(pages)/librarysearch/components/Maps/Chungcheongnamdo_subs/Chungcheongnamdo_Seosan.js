"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Seosan() {

  const mapName = "서산시"
  const addressName = "충청남도 서산시"
  const prevId = 34
  // const mapId = 34050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seosan" d="M17.1774 369.063L38.4773 283.197L7.85863 246.588L1.20239 221.294L20.5055 195.335L39.8086 229.947L46.4648 174.035L77.7491 154.732L93.7241 136.095L93.0585 112.132L57.7804 102.148L11.8524 66.2041L5.86176 27.5979L21.8367 2.3042L35.8148 20.9417L44.4679 8.29481L77.7491 7.62919L105.705 22.9385L127.005 31.5916L159.621 94.1603L148.305 171.373L183.583 190.01L186.246 225.954L217.53 242.594L258.799 236.604L271.446 255.241L287.421 257.904L326.692 304.497L268.783 367.066L273.442 386.369L257.468 435.625L233.505 462.916L197.561 465.578H148.971L130.999 416.322L111.696 427.638L114.358 470.903L88.3991 512.172L69.096 492.203L46.4648 481.553L27.1617 424.31L17.1774 369.063Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}
