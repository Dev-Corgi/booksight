(()=>{var e={};e.id=345,e.ids=[345],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},15206:e=>{"use strict";e.exports=require("zlib")},88434:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(35455),r(35866),r(14562);var s=r(23191),a=r(88716),l=r(37922),i=r.n(l),n=r(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["(pages)",{children:["searchresult",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,35455)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\searchresult\\page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,14562)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\searchresult\\page.js"],d="/(pages)/searchresult/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/searchresult/page",pathname:"/searchresult",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6526:(e,t,r)=>{Promise.resolve().then(r.bind(r,6674))},6674:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(10326),a=r(17577),l=r(35047),i=r(5934);function n(){(0,l.useSearchParams)().get("SearchWord");let[e,t]=(0,a.useState)(Array.from({length:10}));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"flex flex-col items-center overflow-y-scroll overflow-x-clip scroll no-scrollbar",children:s.jsx(i.default,{className:"flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull  gap-x-[28.98px] gap-y-[25.99px] overflow-y-clip",width:169.02,books:e})})})}},51823:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(10326),a=r(17577),l=r(46226);let i={src:"/_next/static/media/bookFrame.0973a626.png",height:463,width:319,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAACVBMVEVMaXGlnpVsaml5thnzAAAAA3RSTlMAMxVjwEUFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgYmBgYGBkIJFiAgAC7QAacLCzXwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},n={src:"/_next/static/media/bookShadow.6888558b.png",height:463,width:382,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAABlBMVEUAAABMaXFP2lwvAAAAAnRSTlMPAPEL0fcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2CEAAYIyUAqDQAF2wArWtPrSAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8};var o=r(57298);function c({className:e,book:t,shadowType:r="null"}){let[c,u]=(0,a.useState)("#000000");return(0,s.jsxs)("div",{className:`${e} relative overflow-visible`,children:["shadow"==r&&s.jsx("div",{className:"absolute w-[119.74%] h-full",children:s.jsx(l.default,{src:n,alt:"bookShadow",fill:!0,sizes:1})}),"circle"==r&&s.jsx("div",{className:"absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]",style:{background:`radial-gradient(50% 50% at 50% 50%, ${c}E6, ${c}00)`}}),s.jsx("div",{className:"absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip",children:void 0!=t&&s.jsx(s.Fragment,{children:"circle"==r?s.jsx(o.r,{getColors:e=>{u(e[1])},children:s.jsx("img",{src:t.cover.replace(/coversum/,"cover500"),layout:"fill",alt:"bookCover",className:"h-full w-full object-fill"})}):s.jsx(l.default,{src:t.cover.replace(/coversum/,"cover500"),alt:"bookCover",fill:!0,sizes:1,className:"h-full w-full object-fill"})})}),s.jsx("div",{className:"absolute w-full h-full",children:s.jsx(l.default,{src:i,alt:"bookFrame",fill:!0,sizes:1})})]})}},5934:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(10326),a=r(17577),l=r(35047),i=r(51823),n=r(23871),o=r(4919);function c({className:e,width:t=125.2,books:r}){let c=(0,l.useRouter)(),u=t/125.2,[d,p]=(0,a.useState)(!0),x=e=>{c.push(`/bookdetail/${e}`)};return s.jsx("div",{className:`${e}`,children:r.map((e,r)=>s.jsx("div",{className:"aspect-[1/2]",style:{width:t},children:(0,s.jsxs)("div",{className:"flex flex-col w-min h-min origin-top-left",style:{scale:`${u}`},onClick:()=>x(e.isbn13),children:[s.jsx(o.Z,{isLoading:d,children:s.jsx(i.Z,{className:"w-[125.2px] h-[181.51px]",book:e,shadowType:"circle"})}),s.jsx(o.Z,{isLoading:d,children:s.jsx(n.Z,{width:67.85,score:void 0==e?5:function(e){if(void 0!=e&&!(e.subInfo.ratingInfo.ratingCount<=0))return e.customerReviewRank}(e),className:"mt-[15.09px]"})}),s.jsx(o.Z,{isLoading:d,children:s.jsx("p",{className:"font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate",children:void 0==e?"title":e.title})}),s.jsx(o.Z,{isLoading:d,children:s.jsx("p",{className:"font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate",children:void 0==e?"author":e.subInfo.authors[0].authorName})})]},r)},r))})}},23871:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s,a,l,i,n=r(10326),o=r(95746);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(null,arguments)}let u=function(e){return o.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),s||(s=o.createElement("path",{fill:"currentColor",d:"M240.131 12.81c4.919-16.006 27.45-16.006 32.369 0l48.375 157.419c2.193 7.137 8.756 12.005 16.185 12.005h158.283c16.203 0 23.159 20.679 10.283 30.571L376.134 312.28c-5.641 4.334-7.997 11.745-5.901 18.566l49.113 159.819c4.869 15.845-13.363 28.633-26.469 18.565l-126.278-97.006a16.865 16.865 0 0 0-20.567 0L119.754 509.23c-13.107 10.068-31.338-2.72-26.469-18.566l49.113-159.818c2.096-6.821-.26-14.232-5.901-18.566L7.005 212.805c-12.876-9.892-5.92-30.571 10.283-30.571h158.283c7.429 0 13.992-4.868 16.185-12.005z"})))};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(null,arguments)}let p=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),a||(a=o.createElement("path",{stroke:"currentColor",strokeWidth:20,d:"m261.503 18.139 47.079 151.749c4.273 13.775 16.791 23.694 31.551 23.694h152.349c2.457 0 4.545 1.412 5.503 4.502.97 3.126.113 6.074-2.31 7.918l-123.253 93.786c-11.544 8.784-16.09 24.015-11.843 37.703l47.078 151.75c1.088 3.507-.196 6.309-2.31 7.918-1.077.819-2.195 1.173-3.128 1.202-.814.026-1.901-.169-3.258-1.202l-123.253-93.786c-11.707-8.908-27.709-8.908-39.416 0l-123.253 93.786c-1.357 1.033-2.444 1.228-3.258 1.202-.933-.029-2.051-.383-3.128-1.202-2.114-1.609-3.398-4.411-2.31-7.918l47.078-151.749c4.247-13.689-.298-28.92-11.843-37.704L16.325 206.002c-2.423-1.844-3.28-4.792-2.31-7.918.958-3.09 3.046-4.502 5.503-4.502h152.349c14.76 0 27.278-9.919 31.551-23.694l47.079-151.75c.596-1.92 1.52-2.938 2.328-3.515.882-.629 1.99-.986 3.175-.986s2.293.357 3.175.986c.808.577 1.732 1.595 2.328 3.516Z"})))};function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(null,arguments)}let h=function(e){return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),l||(l=o.createElement("path",{fill:"currentColor",d:"M256 .806c-6.863 0-13.725 4.001-16.185 12.005L191.44 170.229c-2.193 7.137-8.755 12.005-16.184 12.005H16.973c-16.204 0-23.16 20.679-10.284 30.571l129.492 99.475c5.642 4.334 7.998 11.745 5.902 18.566L92.97 490.664c-4.87 15.846 13.362 28.634 26.468 18.566l126.278-97.006A16.86 16.86 0 0 1 256 408.726z"})),i||(i=o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M256 408.92c3.624 0 7.248 1.166 10.284 3.498l126.278 97.006c13.106 10.069 31.337-2.72 26.468-18.565L369.917 331.04c-2.096-6.821.26-14.232 5.902-18.566l129.492-99.475c12.876-9.891 5.92-30.571-10.284-30.571H336.744c-7.429 0-13.991-4.867-16.184-12.005L272.185 13.005C269.725 5.002 262.863 1 256 1v27.424l45.442 147.874c4.755 15.473 19.028 26.13 35.302 26.13h149.497l-122.606 94.186c-12.291 9.441-17.374 25.531-12.835 40.301l46.344 150.809-118.677-91.166A36.82 36.82 0 0 0 256 388.92z",clipRule:"evenodd"})))};function g({width:e,score:t,className:r}){let s=void 0!=t?Math.floor(t/2):void 0,a=void 0!=t?Math.floor(t%2):void 0;return n.jsx("div",{className:`${r} flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left`,style:{scale:`${e/67.85}`},children:Array.from({length:5},(e,r)=>n.jsx("div",{className:"relative w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px] text-primary",children:void 0!=t?r<s?n.jsx(u,{}):r==s&&1==a?n.jsx(h,{}):n.jsx(p,{}):n.jsx(p,{className:"text-textColor-secondary"})},r))})}},4919:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(10326),a=r(85428),l=r(17577),i=r.n(l);let n=({isLoading:e,children:t})=>{let r=i().isValidElement(t)&&"p"===t.type;return s.jsx(s.Fragment,{children:e?s.jsx(a.E.div,{initial:{backgroundPositionX:"100%"},animate:{backgroundPositionX:"0%"},transition:{duration:1,ease:"linear",repeat:1/0},className:`flex ${r&&"w-min h-min"} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]`,children:s.jsx("div",{className:`flex ${r&&"w-min h-min"} invisible`,children:t})}):t})}},35455:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>l,default:()=>n});var s=r(68570);let a=(0,s.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\(pages)\searchresult\page.js`),{__esModule:l,$$typeof:i}=a;a.default;let n=(0,s.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\(pages)\searchresult\page.js#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,351,621,428,298,36],()=>r(88434));module.exports=s})();