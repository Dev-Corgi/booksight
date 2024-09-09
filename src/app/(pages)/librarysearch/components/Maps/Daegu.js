"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Daegu() {

  const mapName = "대구광역시"
  const addressName = "대구광역시"
  const prevId = 10
  const mapId = 22;

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
<svg viewBox="0 0 322 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Dong" onClick={() => handlePathClick(22020,"동구")} d="M174.946 329.311L159.409 337.897L153.277 329.311L161.045 314.183L164.316 300.691L159.001 280.248L145.099 245.496L160.636 225.871H201.93L219.92 231.186L225.644 247.949L228.097 290.47L239.954 298.647L237.91 334.217L226.053 341.986L194.98 338.715L192.527 330.129L174.946 329.311Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Buk" onClick={() => handlePathClick(22050,"북구")} d="M145.1 330.129L132.425 331.764L131.198 319.907L116.48 317.454L99.3077 323.178L86.6332 317.045L97.6723 297.42L101.761 277.795L97.2634 260.214L103.396 254.082L115.253 261.85L143.464 247.54L159.001 280.657L164.316 301.1L161.045 314.592L154.094 327.267L145.1 330.129Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jung" onClick={() => handlePathClick(22010,"중구")} d="M130.381 345.256L132.834 331.764L151.641 326.858L159.409 337.897L149.188 346.483L130.381 345.256Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seo" onClick={() => handlePathClick(22030,"서구")} d="M95.2191 336.671L99.3077 323.178L116.48 317.454L131.198 319.907L132.834 331.764L130.381 340.35L117.706 345.257H109.12L95.2191 336.671Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Nam" onClick={() => handlePathClick(22040,"남구")} d="M122.612 353.842L119.342 366.517L139.784 377.556L147.553 370.606L149.188 346.892L130.381 345.256V340.35L123.43 344.439L122.612 353.842Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dalseo" onClick={() => handlePathClick(22070,"달서구")} d="M81.7268 379.192L91.9482 385.324L104.623 397.999L125.883 404.949L134.469 391.457L139.784 377.147L119.342 366.108L122.612 350.981L123.43 344.03L118.115 344.848H109.529L95.6279 336.262L73.1408 339.533L72.3231 366.517L69.87 375.921L81.7268 379.192Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dalseong" onClick={() => handlePathClick(22310,"달성군")} d="M72.3232 339.533L94.8102 336.262L98.8988 322.769L66.1903 310.095L64.5549 285.564L52.6981 279.84L31.0288 298.647L17.9454 321.543V355.478L40.4324 349.754L71.5055 365.699L72.3232 339.533ZM59.2398 510.434L91.9482 509.617L96.4457 483.45L100.943 472.819L104.623 452.786L125.883 436.022L159.818 437.249L157.365 458.51L192.118 446.244L199.477 424.166L205.201 411.082L200.704 395.546L161.045 379.6L139.784 377.147L135.287 388.186L125.883 404.949L104.623 397.999L91.9482 385.324L80.0914 377.556L69.0523 375.921L37.9793 380.827L19.9897 419.668L48.2007 442.564L44.9298 467.096L2 462.189L5.27085 484.267L26.5313 505.528L28.1668 528.424L59.2398 510.434Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gunwi" onClick={() => handlePathClick(37310,"군위군")} d="M201.113 225.871L204.384 185.394L226.053 156.774L251.811 165.36L268.165 169.449L288.608 136.331L320.458 130.607L317.228 103.623L311.095 91.766L284.519 76.6383L258.761 90.1305H218.285L179.443 75.0029L162.271 81.1357L160.636 54.1512L127.927 32.073L110.756 33.7085L106.258 19.3985L76.0028 16.1277L59.6486 1H50.2449L28.5756 26.3491L29.3933 50.8804L51.0626 76.2294L72.3231 71.3232L79.2737 101.17L97.2633 91.766L113.618 109.756L109.529 121.612L122.204 148.597L124.657 184.985L159.001 176.399L159.818 225.871H201.113Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Suseong" onClick={() => handlePathClick(22060,"수성구")} d="M147.553 370.605L149.188 346.892L159.409 337.897L174.946 329.311L192.118 330.129L194.571 338.715L225.644 341.986L213.787 361.611L215.832 383.689L200.704 395.546L176.581 386.96L161.045 380.009L139.784 377.556L147.553 370.605Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</svg>



  );
}
