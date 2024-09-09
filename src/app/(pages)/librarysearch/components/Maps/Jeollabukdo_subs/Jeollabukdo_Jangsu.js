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
export default function Jeollabukdo_Jangsu() {
  const mapName = "장수군";
  const addressName = "전라북도 장수군";
  const prevId = 35;
  // const mapId = 35340;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 330 429" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jangsu" d="M2.29004 332.49L19.8315 309.751L23.7295 264.273L68.5575 251.929L105.589 249.33L109.487 219.445L102.991 190.859L111.436 142.133L147.169 104.452L144.57 51.8276L166.659 36.885L211.487 47.9295L225.13 36.885L234.876 3.1016L252.417 1.80225L255.016 21.9424L290.748 28.4392L327.78 56.3754L298.544 82.3626L287.5 155.777L269.309 172.019L249.818 216.197L264.761 259.725L246.57 275.318L238.774 303.254L219.283 320.795L204.341 346.133L206.939 396.158L186.799 427.343L152.366 424.744V394.859L107.538 353.279L81.5511 350.681L47.1181 334.439L39.9715 348.082L2.29004 332.49Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}
