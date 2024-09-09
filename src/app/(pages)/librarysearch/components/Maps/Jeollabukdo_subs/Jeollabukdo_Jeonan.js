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
export default function Jeollabukdo_Jeonan() {
  const mapName = "진안군";
  const addressName = "전라북도 진안군";
  const prevId = 35;
  // const mapId = 35320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 479" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jeonan" d="M1.37646 299.851L36.0702 236.141L54.3633 180.001V149.722L68.8716 145.938L72.6563 82.2274L60.6712 70.2423L82.1182 51.9492L94.1033 2.11646L120.597 32.3946L128.797 34.9178L144.567 17.8863L172.322 60.7803L241.078 55.734L261.264 105.567V125.121L287.757 157.923L278.295 185.047L307.312 191.355L326.866 234.249L309.835 235.51L300.373 268.312L287.126 279.035L243.602 268.312L222.155 282.82L224.678 333.914L189.984 370.5L181.784 417.81L188.092 445.565L184.307 474.581L148.352 477.105L142.044 461.335L120.597 450.611L87.7954 429.795L49.3169 427.272C49.3169 427.272 21.562 426.01 21.562 417.81C21.562 408.979 22.8235 364.192 22.8235 364.192L1.37646 330.13V299.851Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
