"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Gwangju() {

  const mapName = "광주광역시"
  const addressName = "광주광역시"
  const prevId = 10
  const mapId = 24;

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
<svg viewBox="0 0 326 224" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#234;&#180;&#145;&#236;&#163;&#188;&#234;&#180;&#145;&#236;&#151;&#173;&#236;&#139;&#156; 1">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Gwangsan" onClick={() => handlePathClick(24050,"광산구")} d="M168.431 36.9992L134.952 52.0067L93.9702 32.3815L92.2386 14.4879H77.2311L65.6868 56.0472L36.249 60.0877L10.2745 85.485L20.0871 103.956L5.07955 115.5C5.07955 115.5 3.34792 153.019 5.07955 155.328C6.81119 157.637 24.1276 169.758 24.1276 169.758L84.1576 168.604L104.36 194.001L100.32 209.008L136.684 180.725V165.14L151.691 144.361L168.431 94.1432L180.552 86.6395L174.203 75.6724L172.471 42.1941L168.431 36.9992Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Buk" onClick={() => handlePathClick(24040,"북구")} d="M226.152 5.25256L204.218 18.5284L185.747 19.1057L168.431 36.9992L173.626 43.9258L175.934 75.6725L182.284 86.6395L173.048 91.8344L168.431 104.533L198.446 103.956L211.722 112.614L221.534 120.118L231.347 119.541L244.045 112.037L259.053 120.695L269.443 134.548L285.605 143.206L301.767 162.254L315.043 140.897L309.848 128.199V113.768L319.66 104.533L304.653 84.9079L283.873 85.4851L270.597 72.7864L259.053 43.3486L241.159 16.7968L226.152 5.25256Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dong" onClick={() => handlePathClick(24010,"동구")} d="M239.428 146.67L233.656 127.622L232.501 118.963L244.045 113.768L257.899 121.272L267.134 136.857L285.605 144.361L300.035 163.409L286.759 183.611L263.093 194.578L256.744 204.391L231.347 183.034L231.924 158.214L239.428 146.67Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Nam" onClick={() => handlePathClick(24030,"남구")} d="M154 180.725L171.317 167.449L199.6 159.368L209.99 153.019L209.413 133.971L220.957 119.541L230.77 118.963L234.81 128.776L240.005 146.092L233.078 157.637L232.501 182.457L206.527 194.001L171.894 202.659L150.537 218.821L114.173 217.089L102.628 208.431L138.993 180.148L154 180.725Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seo" onClick={() => handlePathClick(24020,"서구")} d="M145.919 155.328L153.423 142.629L167.276 104.533H194.982L220.38 119.541L211.144 132.239L209.99 151.287L199.023 159.368L170.74 167.449L154.578 180.725H137.261V165.14L145.919 155.328Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</g>
</svg>


  );
}
