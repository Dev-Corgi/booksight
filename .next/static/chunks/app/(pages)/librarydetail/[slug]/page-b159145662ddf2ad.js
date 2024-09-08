(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{2044:function(e,l,t){"use strict";t.r(l);var n,i=t(4410);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}l.default=function(e){return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),n||(n=i.createElement("path",{fill:"currentColor",d:"M480 284c15.464 0 28-12.536 28-28s-12.536-28-28-28zM12.201 236.201c-10.935 10.935-10.935 28.663 0 39.598L190.392 453.99c10.935 10.935 28.663 10.935 39.598 0s10.935-28.663 0-39.598L71.598 256 229.99 97.608c10.935-10.935 10.935-28.663 0-39.598s-28.663-10.935-39.598 0zM480 228H32v56h448z"})))}},2966:function(e,l,t){Promise.resolve().then(t.bind(t,6676))},694:function(e,l,t){"use strict";async function n(e){async function l(e){let l=await fetch("/api/getLibraryInfo?libCode=".concat(e));return await l.json()}return(await l(e)).response.libs[0].lib}t.d(l,{Z:function(){return n}})},1590:function(e,l,t){"use strict";t.d(l,{Z:function(){return i}});var n=t(9109).lW;async function i(e){let{longitude:l,latitude:t,level:i=15}=e;async function a(e,l,t){let i="".concat(e,",").concat(l),a="".concat(e," ").concat(l),s=await fetch("/api/getStaticMap?coords=".concat(i,"&pos=").concat(a,"&level=").concat(t),{method:"GET",headers:{Accept:"image/png"}});if(!s.ok)throw Error("Failed to fetch image");let r=await s.arrayBuffer(),o=n.from(r).toString("base64");return"data:image/png;base64,".concat(o)}try{return await a(l,t,i)}catch(e){return console.error("Error fetching static map:",e),null}}},6676:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return O}});var n,i,a,s,r,o,c,x=t(7437),d=t(2265),f=t(6463),u=t(2044),p=t(4325),h=t(6648),m=t(4839);function v(e){let{isLoading:l}=e,t=(0,f.useRouter)();return(0,x.jsxs)("div",{className:"flex flex-row justify-between items-center w-full mt-[40px]",children:[(0,x.jsx)(m.Z,{isLoading:l,children:(0,x.jsx)("div",{className:"relative w-[124px] h-[23px]",children:(0,x.jsx)(h.default,{src:p.default,fill:!0,sizes:1,alt:"logoPic",onClick:()=>{t.push("/home")}})})}),(0,x.jsx)(m.Z,{isLoading:l,children:(0,x.jsxs)("div",{className:"flex flex-row items-center gap-[6.5px] whitespace-nowrap",onClick:()=>{t.back()},children:[(0,x.jsx)("div",{className:"relative w-[18px] h-[16px]",children:(0,x.jsx)(u.default,{})}),(0,x.jsx)("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"돌아가기"})]})})]})}var w=t(5747),j=t(7494),g=t(4410);function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}var b=function(e){return g.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),n||(n=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M231.5 47.5q15.009-.25 30 .5 13.473 6.71 9.5 21.5-2.75 6.75-9.5 9.5a382.5 382.5 0 0 0-67 8Q117.339 108.157 90 183.5q-17.253 66.119-3 133 27.084 93.083 122.5 110.5 65.768 11.368 129-10 77.995-36.03 89.5-121.5 2.52-22.965 4-46 6.71-13.473 21.5-9.5 6.75 2.75 9.5 9.5 2.767 50.398-14 98-36.112 87.601-128.5 109.5-71.349 14.243-142-3Q92.147 426.966 60 342.5q-18.182-59.82-11-122Q59.468 109.126 160.5 63q34.704-12.288 71-15.5",clipRule:"evenodd"})),i||(i=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M356.5 47.5q48.502-.25 97 .5 6.75 2.75 9.5 9.5 1 55.5 0 111-8.031 15.846-24.5 8.5-3.25-2.25-5.5-5.5a1044 1044 0 0 1-2-63A27260 27260 0 0 1 328.5 227q-16.298 7.12-24.5-8.5-1.318-7.18 1-14L411.5 80l-55-1q-15.885-8.154-8.5-24.5 3.696-4.471 8.5-7",clipRule:"evenodd"})))};function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}var y=function(e){return g.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),a||(a=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M235.5 47.5q127.275-6.985 197.5 98 47.523 80.68 22 171-30.372 91.867-118.5 131.5-113.664 42.6-211-29Q40.087 346.863 48 234.5 64.269 115.29 172.5 64q30.52-12.753 63-16.5m19 32q111.865 5.19 161.5 105 39.63 100.497-27 185-69.404 75.468-170.5 57.5Q126.435 404.436 91 316.5q-31.895-96.145 31-175 53.084-59.168 132.5-62",clipRule:"evenodd"})),s||(s=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M251.5 152.5q13.882-1.686 19.5 11l1 85 55 55q8.657 21.696-14 26a19.36 19.36 0 0 1-9.5-2.5L242 265.5l-2-4a2400 2400 0 0 1 0-98q3.619-7.871 11.5-11",clipRule:"evenodd"})))},R=t(7138);function q(e){let{libraryInfo:l}=e,[t,n]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{l&&n(!1)},[l]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"flex flex-row gap-[2.37px] mt-[21px]",children:(0,x.jsxs)(m.Z,{isLoading:t,children:[(0,x.jsx)("div",{className:"relative w-[23px] h-[23px]",children:(0,x.jsx)(y,{})}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[15.8px] whitespace-nowrap",children:void 0==l?"월~금 8:00 ~ 20:00":l.libInfo.operatingTime})]})}),(0,x.jsxs)("div",{className:"flex flex-row gap-[18px] mt-[6px] whitespace-nowrap",children:[(0,x.jsx)(m.Z,{isLoading:t,children:(0,x.jsxs)("div",{className:"flex flex-row gap-[2.37px]",children:[(0,x.jsx)("div",{className:"relative w-[23px] h-[23px]",children:(0,x.jsx)(w.Z,{})}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[15.8px]",children:void 0==l?"서울 특별시 중구 91로":l.libInfo.address})]})}),(0,x.jsx)(m.Z,{isLoading:t,children:(0,x.jsxs)("div",{className:"flex flex-row gap-[2.37px]",children:[(0,x.jsx)("div",{className:"relative w-[23px] h-[23px]",children:(0,x.jsx)(j.Z,{})}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[15.8px]",children:void 0==l?"010-1234-5878":l.libInfo.tel})]})}),(0,x.jsx)(m.Z,{isLoading:t,children:(0,x.jsxs)("div",{className:"flex flex-row gap-[2.37px]",children:[(0,x.jsx)("div",{className:"relative w-[23px] h-[23px]",children:(0,x.jsx)(b,{})}),(0,x.jsx)(R.default,{className:"font-NotoSansKRMedium text-[15.8px]",href:void 0==l?"www.example.com":l.libInfo.homepage,children:"홈페이지"})]})})]})]})}var M=t(694),E=t(4201);function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}var k=function(e){return g.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),r||(r=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M330.5 47.5q85.176-5.556 123.5 70 26.39 67.78-18 125L391.5 287q-16.329 8.336-25.5-7.5-2.031-9.251 3-17a1463 1463 0 0 0 45-46q26.627-38.055 11-82-23.022-51.406-79.5-55-28.08 1.443-51 17.5a1463 1463 0 0 0-46 45q-10.15 6.385-21 1-11.045-10.413-3.5-23.5A1695 1695 0 0 1 273.5 71q25.854-18.435 57-23.5",clipRule:"evenodd"})),o||(o=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M321.5 167.5q27.029-.738 19.5 25L192.5 341q-16.3 8.34-25.5-7.5-1.636-8.395 2-16L315.5 171q2.898-2.188 6-3.5",clipRule:"evenodd"})),c||(c=g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M127.5 220.5q25.822 4.167 14.5 28a1527 1527 0 0 0-46 47q-24.596 36.733-11 79 28.722 64.238 98.5 54.5 18.214-3.86 33-15a1600 1600 0 0 0 48-47q20.782-6.618 25 14.5a30.1 30.1 0 0 1-2.5 9 1366 1366 0 0 1-43.5 44.5q-53.333 43.127-119 22Q41.18 420.654 48 329.5q4.827-33.643 26-60l46.5-46.5q3.64-1.353 7-2.5",clipRule:"evenodd"})))};function L(e){let{libraryInfo:l}=e;return(0,x.jsxs)("div",{className:"flex flex-row h-[100px] mt-[40px]",children:[(0,x.jsx)("div",{className:"w-[6px] h-full bg-black"}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[13.69px] ml-[13.49px] w-[278.05px] text-pretty",children:"시민과 함께 성장하고 소통하는 열린공간!\n".concat(void 0==l?"부천 상동 시립 도서관":l.libInfo.libName,"은 지식정보의 보고로서 권역별 주제 전문도서관, 생활 속의 시민 밀착형 작은도서관 사업으로 다양한 지식정보서비스를 제공하고 있습니다.")}),(0,x.jsxs)("div",{className:"flex flex-row justify-center w-[168.52px] h-[46.34px] ml-[47.18px] mt-[23.09px] rounded-full bg-black gap-[3px]",children:[(0,x.jsx)("div",{className:"relative w-[22px] h-[22px] mt-[11px]",children:(0,x.jsx)(k,{className:" text-white"})}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[15px] text-white mt-[10.9px]",href:void 0==l?"www.example.com":l.libInfo.homepage,children:"알아보기"})]})]})}function B(e){let{libraryInfo:l}=e;return(0,x.jsxs)("div",{className:"flex flex-row gap-[52.66px] mt-[36.76px]",children:[(0,x.jsxs)("div",{className:"flex flex-col gap-[5.5px]",children:[(0,x.jsx)("p",{className:"font-MontserratMedium text-[34.76px]",children:function(){if(void 0!=l){let e=l.libInfo.BookCount;return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":e}}()+"+"}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[16px]",children:"도서관 소장 자료"})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-[5.5px]",children:[(0,x.jsx)("p",{className:"font-MontserratMedium text-[34.76px]",children:function(){if(void 0!=l){let e=0;for(let t of l.loanByDayofWeek)e+=t.result.loan;return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":e}}()+"+"}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[16px]",children:"도서관 주간 대출량"})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-[5.5px]",children:[(0,x.jsx)("p",{className:"font-MontserratMedium text-[34.76px]",children:function(){if(void 0!=l){let e=0;for(let t of l.loanByhours)e+=t.result.loan;return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":e}}()+"+"}),(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[16px]",children:"도서관 일간 대출량"})]})]})}var C=t(1590);function Z(e){let{libraryInfo:l}=e,[t,n]=(0,d.useState)(void 0),[i,a]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{(async function(){void 0!=l&&(n(await (0,C.Z)({latitude:l.libInfo.latitude,longitude:l.libInfo.longitude})),a(!1))})()},[l]),(0,x.jsx)(m.Z,{isLoading:i,children:(0,x.jsxs)("div",{className:"relative w-[36.18vw] st:w-[521px] h-[262.25px] mt-[40px] rounded-[21px] border-[3px] border-black overflow-clip",children:[void 0!=t&&(0,x.jsx)(h.default,{src:t,alt:"mapImage",fill:!0,sizes:1,className:"absolute object-cover"}),(0,x.jsx)("div",{className:"absolute flex items-center justify-center w-[96px] h-[29px] rounded-full bg-white mt-[9px] ml-[10px]",children:(0,x.jsx)("p",{className:"font-NotoSansKRMedium text-[13.69px] text-black",children:"오시는 길"})})]})})}function I(e){let{libraryInfo:l}=e,[t,n]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{void 0!=l&&n(!1)},[l]),(0,x.jsx)("div",{className:"w-[51.74vw] h-screen py-[16px] mr-[16px]",children:(0,x.jsx)(m.Z,{isLoading:t,children:(0,x.jsx)("div",{className:"relative w-full h-full object-cover rounded-[40px] overflow-clip",children:void 0!=l&&(0,x.jsx)(h.default,{src:l.picture,alt:"libraryPic",fill:!0,sizes:1})})})})}function O(e){let{params:l}=e,t=l.slug,[n,i]=(0,d.useState)(void 0),[a,s]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{(async function(){let[e,l]=await Promise.all([(0,M.Z)(t),(0,E.Z)(t)]);e.picture=l,i(e),s(!1)})()},[]),(0,x.jsxs)("div",{className:"flex flex-row w-full h-full",children:[(0,x.jsx)("div",{className:"flex flex-grow flex-col items-center",children:(0,x.jsxs)("div",{className:"flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black",children:[(0,x.jsx)(v,{isLoading:a}),(0,x.jsx)(m.Z,{isLoading:a,children:(0,x.jsx)("p",{className:"font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[45px] text-pretty overflow-hidden",style:{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:void 0==n?"부천 상동 시립 도서관":n.libInfo.libName})}),(0,x.jsx)(q,{libraryInfo:n}),(0,x.jsx)(m.Z,{isLoading:a,children:(0,x.jsx)(L,{libraryInfo:n})}),(0,x.jsx)(m.Z,{isLoading:a,children:(0,x.jsx)(B,{libraryInfo:n})}),(0,x.jsx)(Z,{libraryInfo:n})]})}),(0,x.jsx)(I,{libraryInfo:n})]})}},4325:function(e,l,t){"use strict";t.r(l),l.default={src:"/_next/static/media/logo.a46bff25.png",height:280,width:1624,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUsFxArGBAsGBArGRCC3QWNAAAABHRSTlNAUZ+NICkTaAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAABFJREFUeJxjYGJgYGBmZGQAAAAqAAjJmBvnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}}},function(e){e.O(0,[534,594,917,994,971,23,744],function(){return e(e.s=2966)}),_N_E=e.O()}]);