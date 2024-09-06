"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daejeon_Daedeok() {

  const mapName = "대덕구"
  const addressName = "대전광역시 대덕구"
  const prevId = 25
  // const mapId = 25050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="554" viewBox="0 0 329 554" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Daedeok" d="M225.923 483.409L189.278 371.319L305.679 196.719L327.234 119.118L297.057 91.0961L273.345 2.71802L236.701 45.8293L180.656 123.43L139.7 108.341L25.4556 86.785L16.8333 114.807L75.0335 252.763L47.0112 397.186L1.74438 429.52L38.3889 539.453L75.0335 552.387L133.234 498.498L174.189 517.898L225.923 483.409Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>












  );
}
