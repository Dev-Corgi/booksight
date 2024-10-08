"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Okcheon() {

  const mapName = "옥천군"
  const addressName = "충청북도 옥천군"
  const prevId = 33
  // const mapId = 33330;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Okcheon" d="M92.6883 268.332L134.011 276.823L143.635 223.046L165.145 212.291L194.581 182.856L225.715 181.723L231.375 157.382L269.302 133.041L287.416 135.306L327.607 89.4541L324.211 69.6416L288.548 71.9059L223.45 55.4899L203.072 61.1506L167.409 32.8471L148.163 2.2793L118.728 5.67575L105.708 24.3561L101.179 38.5078L83.0651 35.1113L76.8384 30.5828L59.2902 44.7345L47.4028 52.6595L30.9867 58.3202L27.5903 94.5487L9.47609 109.833L3.81539 140.4L9.47609 163.609L2.11719 184.554L3.24931 212.857L25.8921 207.197L36.6474 202.668L50.7992 224.745L77.9705 222.48L88.7258 234.368L92.6883 268.332Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}
