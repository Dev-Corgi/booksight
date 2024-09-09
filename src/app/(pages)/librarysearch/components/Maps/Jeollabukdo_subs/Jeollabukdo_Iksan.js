"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setPrevMapId,
  setAddressName,
} from "@redux/mapSlice";
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollabukdo_Iksan() {
  const mapName = "익산시";
  const addressName = "전라북도 익산시";
  const prevId = 35;
  // const mapId = 35030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 386" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id=" Iksan" d="M111.943 356.913L139.748 368.362L171.643 384.719L193.724 374.905L221.53 376.541L219.894 347.917L255.878 343.01L286.955 303.755L295.951 230.97L327.028 207.253L318.85 169.634L327.845 141.01L318.85 120.565L259.149 96.0303L228.072 8.52415L196.995 19.1557L147.926 11.7954L121.756 1.16382L92.315 11.7954L48.153 10.9776L26.8899 47.7792L24.4364 108.297L13.8049 132.014L24.4364 171.269L69.4162 210.524C69.4162 210.524 48.9708 269.407 48.9708 273.496C48.9708 277.585 2.35547 356.913 2.35547 356.913H111.943Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
