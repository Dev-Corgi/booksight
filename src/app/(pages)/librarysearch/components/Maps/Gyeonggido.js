"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Gyeonggido() {

  const mapName = "경기도"
  const addressName = "경기도"
  const prevId = 10
  const mapId = 31;

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
<svg width="326" height="432" viewBox="0 0 326 432" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#234;&#178;&#189;&#234;&#184;&#176;&#235;&#143;&#132; 1" clipPath="url(#clip0_844_1618)">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Gimpo" onClick={() => handlePathClick(31230,"김포시")} d="M67.8582 210.628L36.5676 188.978L41.98 178.154L38.4281 170.711L37.075 158.364L31.1552 159.041L24.7279 167.498L12.3808 166.483L8.82891 162.255L1.7251 162.593L3.58562 168.174L4.26217 172.741L3.24734 174.432L5.10787 184.919V190.162L6.79925 196.759L6.46097 202.679L11.8734 208.26V213.503L13.5648 218.408L28.449 211.812L33.354 203.017L54.3271 218.747L67.1817 220.1L70.3953 213.842L67.8582 210.628Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Goyang" onClick={() => handlePathClick(31100,"고양시")} d="M40.1195 184.581L45.0245 185.257L53.1431 183.228L65.152 182.213L69.7187 173.756L74.2854 175.447L83.0806 173.756L89.8462 177.646L95.5969 170.373L100.502 171.05L98.8105 175.955V187.118L97.1191 192.023L104.223 191.008L108.113 186.103L115.893 190.67L114.202 201.156L112.511 205.047L107.944 201.156L104.73 195.575L99.4871 201.495L95.5969 202.848L94.9203 215.533L90.0153 216.886L86.1251 220.776L79.3596 220.438L70.5644 214.518L67.689 210.628L36.3984 188.978L40.1195 184.581Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Paju" onClick={() => handlePathClick(31200,"파주시")} d="M39.1046 142.634L45.1936 139.421L59.4012 138.068L47.7307 118.786L37.075 118.109L37.4132 105.424L48.7455 112.697L54.1579 106.777L53.8197 103.225L58.7247 96.2905L61.9383 100.857L64.1371 112.02L62.784 117.94L67.3507 118.279L69.0421 124.875L73.9471 123.184L77.1608 102.887L81.3892 96.6288L91.3684 101.534L92.3832 91.7238L99.1488 95.9523L106.591 95.614L111.834 90.0324L120.629 95.614L110.312 110.667L105.069 117.264L103.208 136.207L101.517 141.45L96.95 140.774L95.5968 147.032L96.6117 155.827L101.517 159.041L101.178 170.881L95.4277 170.542L89.677 177.815L82.9115 173.925L74.1163 175.616L69.5495 173.925L64.9828 182.382L52.974 183.397L44.8553 185.426L39.1046 184.75L41.98 178.492L38.4281 171.05L37.075 158.703L39.1046 142.634Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yangju" onClick={() => handlePathClick(31260,"양주시")} d="M119.615 112.866L111.158 110.329L105.069 117.264L103.208 136.207L101.517 141.451L96.95 140.774L95.5969 147.032L96.6118 155.827L101.517 159.041L101.178 170.881L98.6414 176.124V187.287L96.95 192.192L104.054 191.177L107.944 186.272L115.724 190.839L122.152 183.397L119.276 173.925L115.724 167.329L121.475 162.762L128.917 164.453L136.698 161.578L143.801 158.364L146 146.525L143.125 134.685L127.902 131.471L125.365 124.198L117.923 120.646L119.615 112.866Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Uijeongbu" onClick={() => handlePathClick(31030,"의정부시")} d="M151.582 167.16L147.692 172.741L146.677 176.631L138.558 186.78L132.807 186.103L129.594 188.64L122.152 183.059L119.276 173.587L115.724 166.99L121.475 162.424L128.917 164.115L143.801 157.857L149.045 162.085L151.582 167.16Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dongducheon" onClick={() => handlePathClick(31080,"동두천시")} d="M130.947 98.4894L118.938 113.881L117.923 120.477L125.027 125.044L127.903 131.302L143.125 134.516L147.692 130.287H151.92L153.273 124.029L149.721 117.433L139.742 107.623V100.181L130.947 98.4894Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yeoncheon" onClick={() => handlePathClick(31350,"연천군")} d="M92.7216 68.0444L89.508 79.5458L88.1549 86.8188L77.8375 81.5755L75.6387 91.3855L71.0719 94.2609L72.9324 103.056L77.1609 102.718L81.3894 96.4597L91.3685 101.365L92.3834 92.5695L99.1489 95.7831L106.591 95.4449L111.834 89.8633L120.629 95.4449L111.327 110.16L118.769 112.528L131.116 98.4893L139.911 100.181L140.25 95.2757H144.478L149.383 95.9523L152.597 92.0621L150.905 79.715L146.339 78.7001L146 74.1334L153.104 68.5518L161.223 71.0889V57.727L162.238 33.8785L158.009 26.9438L153.781 16.4572L147.015 20.0091L143.463 15.4424L143.801 2.08044L125.704 11.2139L113.357 20.6857L109.128 29.1426L104.9 26.2672L96.781 30.1574L92.2142 28.8043L86.4635 21.0239L56.1877 52.4837L63.6298 59.7566L66.1669 66.0148L78.1757 66.6913L86.6327 62.4629L92.7216 68.0444Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Pocheon" onClick={() => handlePathClick(31270,"포천시")} d="M151.582 167.16L160.377 166.821L167.481 164.792L172.386 166.145L182.365 159.548L187.608 131.81H195.05L197.249 115.741L208.581 112.19L209.258 100.012L218.222 87.6645L221.436 79.5459L226.341 77.8545L223.127 57.8961L219.914 55.5282L217.715 58.7418L207.059 54.8517L199.955 60.0949L197.08 62.9703L193.19 56.0356L185.071 54.006L187.946 37.2613L183.718 34.7242L169.51 47.0713L161.392 39.6292V55.3591L160.715 69.7358L152.935 68.0445L145.831 73.626L146.169 78.1928L151.413 81.7447L152.427 91.5547L149.214 95.4449L140.249 94.7683L139.911 107.115L148.875 115.572L152.766 121.83L152.089 129.611H147.861L143.294 133.839L146.508 146.525L143.97 157.35L150.059 162.931L151.582 167.16Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Namyangju" onClick={() => handlePathClick(31130,"남양주시")} d="M188.623 161.24L198.264 168.513L202.492 177.984L204.353 186.103L208.581 191.008L207.228 199.803L199.786 208.937L199.11 222.299L190.653 234.477L190.991 241.411L185.748 241.75L179.32 233.969L172.893 227.035L165.113 217.225L161.561 216.548L153.781 213.334L151.582 200.311L147.353 202.679L141.603 202.002L139.404 198.45L138.389 186.949L146.508 176.8L147.522 172.91L151.413 167.329L161.392 166.99L167.142 164.961L172.047 166.314L181.688 160.732L188.623 161.24Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Hanam" onClick={() => handlePathClick(31180,"하남시")} d="M151.243 252.574L157.332 253.927L162.237 251.052L173.908 251.729L176.783 253.758L179.997 249.192L178.982 243.948L186.086 241.919L179.659 234.138L173.908 228.557L165.451 217.394L161.899 216.717L159.024 223.652L160.715 226.865L161.392 231.77L153.95 237.352L153.273 241.242L155.472 247.162L151.243 252.574Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gapyeong" onClick={() => handlePathClick(31370,"가평군")} d="M227.694 86.6496L226.003 77.8544L221.098 79.5458L217.884 87.6645L208.92 100.012L208.243 112.19L196.911 115.741L194.712 131.81H187.27L181.857 160.563L188.623 161.24L198.264 168.513L202.492 177.984L204.353 186.103L208.243 193.038L207.228 199.972L214.332 198.619L221.774 194.053L223.465 199.634L230.231 209.106L232.092 221.284H243.086L250.866 219.254L251.204 206.569L245.792 198.112L250.358 195.744L251.373 176.8L242.071 178.154L242.747 170.711L248.16 164.115L243.255 155.32L246.807 149.738L245.115 140.605L257.97 128.258H263.382L265.243 117.095L261.014 111.513L260.338 104.24L244.777 103.563L245.453 91.2164L228.709 89.8633L227.694 86.6496Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yeoju" onClick={() => handlePathClick(31280,"여주시")} d="M224.48 290.123V279.975L214.501 270.841L220.59 263.568L231.922 269.15L240.718 264.245L248.498 271.687L258.139 272.025L264.228 269.996L270.655 273.209L279.958 271.856L287.738 274.393L288.076 280.313L289.43 284.88H301.1L301.777 301.625L298.901 322.598L295.688 338.328L284.355 356.933L270.148 349.66L259.492 340.188L254.587 345.093L244.608 344.078L245.284 338.497L244.946 326.319L247.821 322.09L246.13 313.633L249.682 307.375L246.13 302.132L240.718 295.197L236.828 293.506L231.077 288.939L224.48 290.123Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gwangju" onClick={() => handlePathClick(31250,"광주시")} d="M198.771 314.986L208.074 301.286L212.979 300.61L224.65 290.123V279.975L214.67 270.841L206.89 259.678L210.104 258.663L212.641 256.295L210.949 251.39L208.751 241.919L203.507 235.322L198.264 234.984L191.16 241.242L185.071 241.919L178.982 243.61L179.997 248.853L176.783 253.42L173.908 251.39L162.238 250.714L160.377 253.251L162.238 256.465L166.466 264.922L163.252 271.856L159.362 277.438L158.009 284.372L149.214 292.153V296.72L154.119 296.043L161.899 291.138L164.098 294.69L169.51 296.043L170.525 288.77L180.166 292.322L186.255 294.013L185.917 315.663L198.771 314.986Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seongnam" onClick={() => handlePathClick(31020,"성남시")} d="M128.241 268.304L124.351 284.034L136.359 290.292L144.816 297.227H149.383V292.66L158.178 284.88L159.531 277.945L166.635 265.598L159.87 252.913L157.671 254.266L151.582 252.913L148.368 256.803L142.618 257.141L134.499 268.643L129.594 266.613L128.241 268.304Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Uiwang" onClick={() => handlePathClick(31170,"의왕시")} d="M110.819 279.806L108.282 290.292L103.377 301.456L101.517 305.684L108.282 306.699L110.143 300.441L116.232 296.889L121.644 291.307L124.181 284.034L127.057 269.657L114.202 274.563L111.665 276.254L110.819 279.806Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yongin" onClick={() => handlePathClick(31190,"용인시")} d="M126.042 294.69L121.813 291.138L124.351 283.865L136.359 290.123L144.816 297.058L154.119 296.381L161.899 291.476L164.098 295.028L169.511 296.381L170.525 289.108L186.424 294.352L186.086 316.001L198.602 314.986L198.264 328.348L200.801 335.283L209.258 338.497L209.596 344.078L217.038 344.417L219.575 351.351L223.127 354.565L219.914 362.007L218.222 369.449L210.78 367.419L201.139 366.743L195.727 362.176L191.499 365.39L183.042 357.609L179.828 353.381L177.629 360.316L168.665 366.235L163.252 373.17L153.273 370.633L144.816 366.405L145.831 357.609L150.736 348.476L156.149 344.586L153.273 333.423L137.374 332.069L133.822 327.503L139.066 318.031L134.161 314.817L138.727 309.574L132.638 308.221L131.285 303.992L127.057 302.639L126.042 294.69Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gwangmyeong" onClick={() => handlePathClick(31060,"광명시")} d="M77.8373 258.833L73.6089 257.479L74.6237 253.928L80.3744 251.56L85.2794 248.346L87.8165 251.898L93.2289 264.922L89.0005 271.856L87.6474 275.07L80.5436 274.055L78.8522 260.693L77.8373 258.833Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Suwon" onClick={() => handlePathClick(31010,"수원시")} d="M102.701 309.405L99.8254 314.479L100.84 319.384C100.84 319.384 105.745 320.061 105.745 320.906C105.745 321.752 112.003 330.04 112.003 330.04L123.674 329.532L127.564 325.811L133.991 327.503L139.235 318.031L134.33 314.817L138.896 309.574L132.807 308.221L131.454 303.993L127.226 302.639L126.211 294.859L122.321 292.322L117.247 296.55L109.974 301.286L108.451 306.868L103.039 306.191L102.701 309.405Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Pyeongtaek" onClick={() => handlePathClick(31070,"평택시")} d="M97.4575 427.295L117.078 417.315L126.549 420.529L139.066 414.947L145.324 406.66H150.736L152.428 399.556L154.288 397.357L153.781 393.129L154.288 390.253L143.632 387.547L149.721 380.443L145.155 377.737L146.677 367.758L145.155 366.066V357.779L142.448 355.58L139.742 358.963L129.763 359.639L124.689 357.44L117.416 361.161L114.202 376.384L102.363 379.09L90.5229 377.906L79.8672 393.298L69.3806 394.82L65.9978 398.541L76.4844 401.755L79.1906 412.579L92.2143 420.36L95.0896 427.802H97.4575V427.295Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Hwaseong" onClick={() => handlePathClick(31240,"화성시")} d="M75.6386 314.479L67.6891 314.648L65.4903 320.737L63.7989 325.642L58.0482 320.23L54.8346 320.906L47.7308 320.23L44.348 318.538L39.7813 320.061L35.3837 325.642L38.7664 331.055L34.8763 340.696L34.1997 346.615L34.3688 351.69L42.1492 351.013L39.443 357.609L42.9949 363.698L50.7753 357.609L56.8643 349.491H65.6595L69.0422 344.755L68.8731 352.874L72.2559 354.903L69.0422 359.639L58.8939 360.654L59.4013 366.235V371.31L59.2322 379.428L54.158 384.333V388.731L67.52 390.93L69.7188 394.312L80.2054 392.79L90.8611 377.399L102.701 378.583L115.217 376.046L117.585 360.654L124.858 356.933L124.35 351.013L117.247 346.277L121.813 338.159H131.285L133.653 342.894L136.528 349.998H141.603L142.279 354.903L145.662 357.271L150.567 348.138L155.979 344.247L153.104 333.084L137.205 331.731L133.653 327.165L127.226 326.15L123.336 329.025L111.665 329.532L105.407 320.399L100.502 318.877L99.4871 313.972L91.1994 311.266L80.3745 315.156L75.6386 314.479Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Guri" onClick={() => handlePathClick(31120,"구리시")} d="M161.899 216.548L159.024 223.483L151.92 222.975L145.154 226.865L141.941 221.284L145.831 217.394L145.493 210.121L141.941 202.002L147.691 202.679L151.92 200.311L154.119 213.334L161.899 216.548Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yangpyeong" onClick={() => handlePathClick(31380,"양평군")} d="M214.501 198.619L221.943 194.053L223.465 199.465L230.231 208.937L232.092 221.115H243.086L250.866 219.085L251.204 206.4L263.213 200.48L287.062 216.548H302.622L310.403 219.762L322.75 229.572L314.293 231.94L300.085 245.301L309.388 251.729L311.925 264.076L301.269 285.049H289.599L288.246 280.482L287.907 274.562L280.127 272.025L272.008 273.04L264.228 270.165L258.139 272.194L248.498 271.856L240.718 264.414L231.922 269.319L220.59 263.738L214.501 271.011L206.721 259.847L209.934 258.833L212.81 255.281L210.949 251.729L208.75 242.257L203.507 235.661L198.264 235.322L191.16 241.58L190.822 234.646L199.279 222.468L199.955 209.106L207.397 199.972L214.501 198.619Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Icheon" onClick={() => handlePathClick(31210,"이천시")} d="M243.762 370.295L241.902 380.443L249.344 382.473L254.249 385.01L255.94 375.538L260.169 374.523L264.397 376.215L264.059 370.971L270.824 368.603L270.148 349.998L259.492 340.526L254.587 345.431L244.608 344.417L244.946 340.188V326.826L247.821 322.598L246.13 314.141L249.682 307.883L240.718 295.705L235.474 293.675L230.908 289.447L224.48 290.123L212.81 300.61L207.905 301.286L198.602 314.987L198.264 328.348L200.801 335.283L208.92 339.512L209.596 344.078L217.038 344.417L219.575 351.351L223.127 354.565L227.356 354.227L230.569 359.132L238.35 360.823L243.762 370.295Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Siheung" onClick={() => handlePathClick(31150,"시흥시")} d="M41.1343 294.69L48.9146 285.895L52.6357 280.482L63.6297 259.171L73.6089 257.479L77.8373 258.833L78.8521 261.708L80.7127 274.055L87.8165 275.07L87.1399 278.96L87.8165 281.328C87.8165 281.328 87.0794 284.145 85.956 285.556C83.2122 289.004 74.962 288.094 74.962 288.094L68.1964 293.675L58.5555 294.69L50.0986 301.625L41.1343 294.69Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gunpo" onClick={() => handlePathClick(31160,"군포시")} d="M94.2439 302.132L101.517 305.515L108.113 290.123L108.451 287.248L102.363 283.019L96.9501 283.527L92.8908 287.417L90.5228 288.094L87.6475 299.595L94.2439 302.132Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Bucheon" onClick={() => handlePathClick(31050,"부천시")} d="M73.609 257.48L74.6239 253.928L72.4251 246.824L76.3153 243.61L73.4399 234.138L61.0928 229.233L59.7397 239.72L55.5112 242.595L56.1878 250.376L63.6299 257.818L73.609 257.48Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<g id="Ansan" onClick={() => handlePathClick(31090,"안산시")}>
<path d="M50.0987 301.625L60.9236 307.544L72.2558 308.221L75.1312 308.052L80.5436 315.663L91.3685 311.773L99.6562 314.479L102.532 309.405L102.701 306.022L88.1548 299.933L90.3536 288.432L92.7216 287.755L87.6474 281.666L85.7869 285.895L74.7929 288.432L68.8731 294.013L58.3865 294.859L50.0987 301.625Z" fill="currentColor"/>
<path d="M22.5292 319.046L25.7428 323.782L26.2503 326.319L23.8823 328.518L24.0515 336.129L16.7785 330.716L11.7043 338.497L5.95364 338.328L5.7845 327.841L10.6895 325.135L8.829 319.215L4.4314 311.435L13.2266 312.619L16.4402 318.031L22.5292 319.046Z" fill="currentColor"/>
<path d="M50.0987 301.625L60.9236 307.544L72.2558 308.221L75.1312 308.052L80.5436 315.663L91.3685 311.773L99.6562 314.479L102.532 309.405L102.701 306.022L88.1548 299.933L90.3536 288.432L92.7216 287.755L87.6474 281.666L85.7869 285.895L74.7929 288.432L68.8731 294.013L58.3865 294.859L50.0987 301.625Z" stroke="#DAAA63" strokeWidth="2.53708"/>
<path d="M22.5292 319.046L25.7428 323.782L26.2503 326.319L23.8823 328.518L24.0515 336.129L16.7785 330.716L11.7043 338.497L5.95364 338.328L5.7845 327.841L10.6895 325.135L8.829 319.215L4.4314 311.435L13.2266 312.619L16.4402 318.031L22.5292 319.046Z" stroke="#DAAA63" strokeWidth="2.53708"/>
</g>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Anseong" onClick={() => handlePathClick(31220,"안성시")} d="M178.813 421.205L187.947 429.324L191.16 425.941L196.234 416.3H207.567L214.84 409.704L211.964 405.983L212.472 398.372L221.605 396.85L228.878 390.93V383.488L242.409 380.781L244.27 370.633L239.365 361.669L230.908 359.47L227.694 354.565L223.635 355.749L220.252 362.514L218.561 369.957L211.119 367.927H202.154L195.896 362.684L191.668 365.897L183.887 358.455L179.997 353.719L177.798 360.654L168.157 366.405L163.252 373.508L153.273 370.971L146.677 367.758L145.155 377.06L149.721 380.443L143.632 387.547L154.288 390.253L153.273 392.283L154.288 397.357L152.428 399.556L150.736 406.66L164.267 412.241L170.525 420.529L178.813 421.205Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gwacheon" onClick={() => handlePathClick(31110,"과천시")} d="M127.226 269.657L113.356 274.563L110.904 272.11L108.451 269.657V265.091L113.864 257.649L125.873 258.663L129.086 266.444L127.226 269.657Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Anyang" onClick={() => handlePathClick(31040,"안양시")} d="M97.6265 283.019H102.532L108.621 287.248L111.834 276.085L113.526 274.393L108.621 269.488V264.922L104.392 265.26L99.487 261.031L93.3981 264.922L89.1696 271.856L87.3091 279.129L93.0598 288.263L97.6265 283.019Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Osan" onClick={() => handlePathClick(31140,"오산시")} d="M139.742 358.624L129.086 359.639L124.858 357.271L124.35 351.351L117.247 346.615L121.813 338.497H131.285L133.653 343.233L136.528 350.337L141.433 351.013L142.448 355.242L139.742 358.624Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2.53708"/>
</MapHoverAnimation>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_844_1618">
<rect width="325.49" height="431.1" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
