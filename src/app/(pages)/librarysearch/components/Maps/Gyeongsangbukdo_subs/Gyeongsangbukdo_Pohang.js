"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Pohang() {

  const mapName = "포항시"
  const addressName = "경상북도 포항시"
  const prevId = 37
  // const mapId = 37010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 335" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Pohang" d="M164.362 170.077L146.093 172.314L140.873 188.719L117.384 195.058L100.234 182.008L87.5572 178.653L85.3202 168.959L67.051 154.791V145.097L53.2559 143.979L41.325 124.591L2.92236 117.134L23.0558 105.203L33.8682 82.4598L47.6632 79.1043L56.2386 64.9363L36.1052 48.5313L48.0361 41.0745L83.456 50.7684L106.945 76.8672L132.671 35.8547V17.5856L149.822 3.41761L164.735 1.18054L174.429 11.993L170.328 36.9733L213.95 39.2103L218.051 58.598L224.39 64.1907L216.933 81.3413L211.713 83.5784L215.814 92.1537L226.627 101.848L229.982 125.709L249.37 143.979L244.15 154.791L218.424 180.89L232.219 200.278L241.913 214.445L264.284 226.376L276.215 209.226L290.01 199.532L314.617 161.502L323.192 170.077L328.412 202.515L316.481 230.478L311.262 254.339L294.111 265.152L302.686 295.352L301.568 322.569L294.111 333.382L268.385 319.214L248.252 297.589L238.558 313.994L211.713 311.757L208.358 297.589L199.782 286.777L184.869 237.934L162.498 203.26L169.955 177.161L164.362 170.077Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}
