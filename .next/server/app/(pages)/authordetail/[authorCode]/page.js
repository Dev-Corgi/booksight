(()=>{var e={};e.id=261,e.ids=[261],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},15206:e=>{"use strict";e.exports=require("zlib")},85208:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>A}),s(11008),s(35866),s(14562);var l=s(23191),a=s(88716),r=s(37922),i=s.n(r),o=s(95231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let A=["",{children:["(pages)",{children:["authordetail",{children:["[authorCode]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,11008)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\authordetail\\[authorCode]\\page.js"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,14562)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\authordetail\\[authorCode]\\page.js"],d="/(pages)/authordetail/[authorCode]/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/authordetail/[authorCode]/page",pathname:"/authordetail/[authorCode]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:A}})},8793:(e,t,s)=>{Promise.resolve().then(s.bind(s,41341))},41341:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var l=s(10326),a=s(17577),r=s(30200),i=s(35595),o=s(23871),n=s(46226),A=s(46803),c=s(5176),d=s(75125),x=s(54806),p=s(80531),u=s(68011),h=s(37106),m=s(29407),f=s(29732);function g(){let e=[A.Z,c.Z,d.Z,x.Z,p.Z,u.Z,h.Z,m.Z,f.Z];return e[Math.floor(Math.random()*e.length)]}var v=s(4919);function j({books:e,authorName:t,authorCode:s}){let[r,A]=(0,a.useState)(void 0),[c,d]=(0,a.useState)(`https://image.aladin.co.kr/Author/Photo/${s}/${s}_2.jpg`),[x,p]=(0,a.useState)(!0);return(0,l.jsxs)("div",{className:"flex flex-row text-nowrap",children:[l.jsx("div",{className:"relative w-[138px] h-[138px] rounded-full border-[2.5px] overflow-hidden",children:l.jsx(n.default,{alt:"ProfilePic",src:c,fill:!0,sizes:1,className:"object-cover",onError:()=>{d(g)}})}),(0,l.jsxs)("div",{className:"flex flex-col ml-[26px]",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center mt-[14px] gap-[25px]",children:[l.jsx("p",{className:"font-KopubWorldBold text-[33px]",children:t}),(0,l.jsxs)("div",{className:"flex justify-center items-center w-[101px] h-[33px] rounded-full bg-primary",children:[l.jsx("div",{className:"flex flex-row gap-[5px]"}),l.jsx("div",{className:"relative w-[18px] h-[18px]",children:l.jsx(i.Z,{})}),l.jsx("p",{className:"font-NotoSansKRSemiBold text-[13px]",children:"구독하기"})]})]}),l.jsx("div",{className:"flex flex-row mt-[32px] gap-[4.5px]",children:l.jsx("div",{className:"flex px-[9.6px] py-[5px] rounded-full outline outline-[1.5px] outline-black",children:l.jsx("p",{className:"text-[14px] font-NotoSansKRSemiBold whitespace-nowrap",children:"#영미소설"})})}),(0,l.jsxs)("div",{className:"flex flex-row mt-[9px] gap-[9px]",children:[l.jsx(v.Z,{isLoading:x,children:l.jsx("div",{className:"w-[111px] h-[21px]",children:l.jsx(o.Z,{score:r,width:111})})}),l.jsx(v.Z,{isLoading:x,children:l.jsx("p",{className:"font-NotoSansKRMedium text-[15px]",children:void 0!=r?`${r} / 10`:"- / 10"})})]}),l.jsx(v.Z,{isLoading:x,children:l.jsx("p",{className:"font-NotoSansKRMedium text-[16px] text-black mt-[8px]",children:x?"등록된 저서: ?? 권":`등록된 저서 : ${e.length} 권`})})]})]})}var w=s(50246);function b({authorCode:e}){let[t,s]=(0,a.useState)(void 0);return(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[l.jsx(w.Z,{title:"저자 소개"}),l.jsx("div",{className:"flex ml-[28px]",children:l.jsx(v.Z,{isLoading:void 0==t,children:l.jsx("div",{className:" flex flex-col justify-start items-center w-full h-[218px] mt-[16px] rounded-[15px] bg-background",children:l.jsx("div",{className:"flex flex-col justify-start items-center mx-[18px] my-[17px] overflow-y-scroll scroll no-scrollbar",children:l.jsx("p",{className:"font-NotoSansKRRegular text-[16px] -tracking-[2px] whitespace-pre-wrap",children:void 0!=t?t:"스웨덴의 한 블로거에서 전 세계를 사로잡은 초대형 작가가 된 프레드릭 배크만. 데뷔작이자 첫 장편소설인 『오베라는 남자』는 출간되자마자 스웨덴 인구의 열 명 중 한 명이 소장하는 책이 되었으며, 46개국에 판권이 수출되었다. 미국에서는 77주간 뉴욕타임스 베스트셀러 목록에 올랐고, 아시아, 유럽, 아프리카의 여러 나라에서 베스트셀러로 등극해 그 이름을 알렸다. 뒤이어 출간한 『할머니가 미안하다고 전해달랬어요』 『브릿마리 여기 있다』 등이 역시 세계인에게 사랑받는 베스트셀러가 되며 초대형 작가로 자리매김했다. 이후 『베어타운』과 후속작 『우리와 당신들』로 돌아온 배크만은 이 소설로 “『오베라는 남자』를 뛰어넘었다” “이 시대의 디킨스다”라는 언론의 열광적인 찬사와 함께 아마존 및 굿리즈 올해의 소설에 오르며 또 한번 커다란 도약을 이루어냈다. 5년 만에 국내에 소개되는 신작 『위너』는 ‘베어타운 3부작’의 정점을 찍는 소설로 현지 및 해외 출간과 동시에 아마존, 굿리즈, 애플북스 베스트셀러에 오르며 ‘문학계의 승리자’라는 평을 받았다. 이 외의 작품으로 『하루하루가 이별의 날』 『일생일대의 거래』 등이 있다."})})})})})]})}function N(){return(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[l.jsx(w.Z,{title:"응원의 한마디"}),(0,l.jsxs)("div",{className:"flex flex-col flex-grow ml-[28px] mt-[16px] gap-[17px] w-full",children:[(0,l.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[l.jsx("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,l.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[l.jsx("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:l.jsx(n.default,{src:r.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[l.jsx("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),l.jsx("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]}),(0,l.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[l.jsx("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,l.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[l.jsx("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:l.jsx(n.default,{src:r.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[l.jsx("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),l.jsx("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]}),(0,l.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[l.jsx("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,l.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[l.jsx("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:l.jsx(n.default,{src:r.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[l.jsx("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),l.jsx("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]})]})]})}var S=s(35047);function C({book:e}){let t=(0,S.useRouter)(),[s,r]=(0,a.useState)(void 0);return(0,l.jsxs)("div",{className:"flex flex-col w-[366px] h-[155px] text-nowrap",children:[l.jsx(v.Z,{isLoading:void 0==e,children:l.jsx("p",{className:"font-NotoSansKRSemiBold text-[15px] bg-discriptionPanel",children:void 0!=e?e.pubDate.replace(/-/g,"."):"????.??.??"})}),(0,l.jsxs)("div",{className:"flex flex-row ml-[11px] mt-[8px]",children:[(0,l.jsxs)("div",{className:"relative flex items-center justify-center w-[10px] h-[125px]",children:[l.jsx("div",{className:"absolute w-[0.5px] h-[125px] bg-primary"}),l.jsx("div",{className:"absolute w-[10px] h-[10px] bg-primary rounded-full"})]}),(0,l.jsxs)("div",{onClick:function(){void 0!=e&&t.push(`/bookdetail/${e.isbn13}`)},className:"ml-[22px] mt-[11px] flex flex-row rounded-l-[15px] bg-background w-[323px] h-[106px] gap-[25px]",children:[l.jsx(v.Z,{isLoading:void 0==e,children:l.jsx("div",{className:"relative ml-[13px] mt-[8px] w-[60px] h-[90px] rounded-[5px] overflow-hidden",children:void 0!=e&&l.jsx(n.default,{alt:"bookCoverImg",src:e.cover.replace(/coversum/,"cover500"),fill:!0,sizes:1,className:"object-fill"})})}),(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx(v.Z,{isLoading:void 0==e,children:l.jsx("p",{className:"font-NotoSansKRSemiBold text-[17px] mt-[15px] w-[190px] truncate",children:void 0!=e?e.title:"도서제목 로딩중"})}),l.jsx(v.Z,{isLoading:void 0==e,children:l.jsx("p",{className:"font-NotoSansKRMedium text-[12px] text-textColor-secondary",children:void 0!=e?e.author:"작가 로딩중"})}),l.jsx(v.Z,{isLoading:void 0==e,children:l.jsx(o.Z,{score:s,width:74.21,className:"mt-[3px]"})})]})]})]})]})}function R({books:e}){return(0,l.jsxs)("div",{className:"relative flex flex-col w-[394px] h-full  shrink-0",children:[l.jsx(w.Z,{title:"타임 라인"}),l.jsx("div",{className:"flex flex-col ml-[28px] mt-[31px] overflow-y-scroll scroll no-scrollbar",children:e.sort((e,t)=>new Date(e.pubDate)-new Date(t.pubDate)).map((e,t)=>l.jsx(C,{book:e},t))}),l.jsx("div",{className:"absolute left-[43.75px] top-[95px] w-[0.5px] h-[555px] bg-primary -z-10"})]})}var E=s(40425);function M({params:e}){let t=(0,S.useSearchParams)(),s=e.authorCode,r=t.get("authorName"),[i,o]=(0,a.useState)(Array.from({length:10}));return l.jsx("div",{className:"flex overflow-y-scroll scroll no-scrollbar overflow-x-clip",children:l.jsx("div",{className:"flex flex-col mt-[179px] w-full h-min bg-discriptionPanel text-black",children:(0,l.jsxs)("div",{className:"flex flex-col flex-grow ml-[60px] -mt-[79px]",children:[l.jsx(j,{books:i,authorName:r,authorCode:s}),(0,l.jsxs)("div",{className:"flex flex-col w-full mt-[28px] gap-[60px]",children:[(0,l.jsxs)("div",{className:"flex flex-row  gap-[54px] h-[639px]",children:[(0,l.jsxs)("div",{className:"flex flex-col flex-grow gap-[60px]",children:[l.jsx(b,{authorCode:s}),l.jsx(N,{})]}),l.jsx(R,{books:i})]}),l.jsx(E.Z,{title:"작가의 다른책",books:i})]})]})})})}},51823:(e,t,s)=>{"use strict";s.d(t,{Z:()=>A});var l=s(10326),a=s(17577),r=s(46226);let i={src:"/_next/static/media/bookFrame.0973a626.png",height:463,width:319,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAACVBMVEVMaXGlnpVsaml5thnzAAAAA3RSTlMAMxVjwEUFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgYmBgYGBkIJFiAgAC7QAacLCzXwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},o={src:"/_next/static/media/bookShadow.6888558b.png",height:463,width:382,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAABlBMVEUAAABMaXFP2lwvAAAAAnRSTlMPAPEL0fcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2CEAAYIyUAqDQAF2wArWtPrSAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8};var n=s(57298);function A({className:e,book:t,shadowType:s="null"}){let[A,c]=(0,a.useState)("#000000");return(0,l.jsxs)("div",{className:`${e} relative overflow-visible`,children:["shadow"==s&&l.jsx("div",{className:"absolute w-[119.74%] h-full",children:l.jsx(r.default,{src:o,alt:"bookShadow",fill:!0,sizes:1})}),"circle"==s&&l.jsx("div",{className:"absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]",style:{background:`radial-gradient(50% 50% at 50% 50%, ${A}E6, ${A}00)`}}),l.jsx("div",{className:"absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip",children:void 0!=t&&l.jsx(l.Fragment,{children:"circle"==s?l.jsx(n.r,{getColors:e=>{c(e[1])},children:l.jsx("img",{src:t.cover.replace(/coversum/,"cover500"),layout:"fill",alt:"bookCover",className:"h-full w-full object-fill"})}):l.jsx(r.default,{src:t.cover.replace(/coversum/,"cover500"),alt:"bookCover",fill:!0,sizes:1,className:"h-full w-full object-fill"})})}),l.jsx("div",{className:"absolute w-full h-full",children:l.jsx(r.default,{src:i,alt:"bookFrame",fill:!0,sizes:1})})]})}},5934:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var l=s(10326),a=s(17577),r=s(35047),i=s(51823),o=s(23871),n=s(4919);function A({className:e,width:t=125.2,books:s}){let A=(0,r.useRouter)(),c=t/125.2,[d,x]=(0,a.useState)(!0),p=e=>{A.push(`/bookdetail/${e}`)};return l.jsx("div",{className:`${e}`,children:s.map((e,s)=>l.jsx("div",{className:"aspect-[1/2]",style:{width:t},children:(0,l.jsxs)("div",{className:"flex flex-col w-min h-min origin-top-left",style:{scale:`${c}`},onClick:()=>p(e.isbn13),children:[l.jsx(n.Z,{isLoading:d,children:l.jsx(i.Z,{className:"w-[125.2px] h-[181.51px]",book:e,shadowType:"circle"})}),l.jsx(n.Z,{isLoading:d,children:l.jsx(o.Z,{width:67.85,score:void 0==e?5:function(e){if(void 0!=e&&!(e.subInfo.ratingInfo.ratingCount<=0))return e.customerReviewRank}(e),className:"mt-[15.09px]"})}),l.jsx(n.Z,{isLoading:d,children:l.jsx("p",{className:"font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate",children:void 0==e?"title":e.title})}),l.jsx(n.Z,{isLoading:d,children:l.jsx("p",{className:"font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate",children:void 0==e?"author":e.subInfo.authors[0].authorName})})]},s)},s))})}},40425:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var l=s(10326),a=s(50246),r=s(5934);function i({title:e,books:t}){return(0,l.jsxs)("div",{className:"w-full h-min",children:[l.jsx(a.Z,{title:e}),l.jsx(r.default,{className:"flex flex-row w-min h-min ml-[28px] mt-[14px] gap-[45px]",books:t})]})}},23871:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var l,a,r,i,o=s(10326),n=s(95746);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)({}).hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(null,arguments)}let c=function(e){return n.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),l||(l=n.createElement("path",{fill:"currentColor",d:"M240.131 12.81c4.919-16.006 27.45-16.006 32.369 0l48.375 157.419c2.193 7.137 8.756 12.005 16.185 12.005h158.283c16.203 0 23.159 20.679 10.283 30.571L376.134 312.28c-5.641 4.334-7.997 11.745-5.901 18.566l49.113 159.819c4.869 15.845-13.363 28.633-26.469 18.565l-126.278-97.006a16.865 16.865 0 0 0-20.567 0L119.754 509.23c-13.107 10.068-31.338-2.72-26.469-18.566l49.113-159.818c2.096-6.821-.26-14.232-5.901-18.566L7.005 212.805c-12.876-9.892-5.92-30.571 10.283-30.571h158.283c7.429 0 13.992-4.868 16.185-12.005z"})))};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)({}).hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(null,arguments)}let x=function(e){return n.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),a||(a=n.createElement("path",{stroke:"currentColor",strokeWidth:20,d:"m261.503 18.139 47.079 151.749c4.273 13.775 16.791 23.694 31.551 23.694h152.349c2.457 0 4.545 1.412 5.503 4.502.97 3.126.113 6.074-2.31 7.918l-123.253 93.786c-11.544 8.784-16.09 24.015-11.843 37.703l47.078 151.75c1.088 3.507-.196 6.309-2.31 7.918-1.077.819-2.195 1.173-3.128 1.202-.814.026-1.901-.169-3.258-1.202l-123.253-93.786c-11.707-8.908-27.709-8.908-39.416 0l-123.253 93.786c-1.357 1.033-2.444 1.228-3.258 1.202-.933-.029-2.051-.383-3.128-1.202-2.114-1.609-3.398-4.411-2.31-7.918l47.078-151.749c4.247-13.689-.298-28.92-11.843-37.704L16.325 206.002c-2.423-1.844-3.28-4.792-2.31-7.918.958-3.09 3.046-4.502 5.503-4.502h152.349c14.76 0 27.278-9.919 31.551-23.694l47.079-151.75c.596-1.92 1.52-2.938 2.328-3.515.882-.629 1.99-.986 3.175-.986s2.293.357 3.175.986c.808.577 1.732 1.595 2.328 3.516Z"})))};function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var l in s)({}).hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(null,arguments)}let u=function(e){return n.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),r||(r=n.createElement("path",{fill:"currentColor",d:"M256 .806c-6.863 0-13.725 4.001-16.185 12.005L191.44 170.229c-2.193 7.137-8.755 12.005-16.184 12.005H16.973c-16.204 0-23.16 20.679-10.284 30.571l129.492 99.475c5.642 4.334 7.998 11.745 5.902 18.566L92.97 490.664c-4.87 15.846 13.362 28.634 26.468 18.566l126.278-97.006A16.86 16.86 0 0 1 256 408.726z"})),i||(i=n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M256 408.92c3.624 0 7.248 1.166 10.284 3.498l126.278 97.006c13.106 10.069 31.337-2.72 26.468-18.565L369.917 331.04c-2.096-6.821.26-14.232 5.902-18.566l129.492-99.475c12.876-9.891 5.92-30.571-10.284-30.571H336.744c-7.429 0-13.991-4.867-16.184-12.005L272.185 13.005C269.725 5.002 262.863 1 256 1v27.424l45.442 147.874c4.755 15.473 19.028 26.13 35.302 26.13h149.497l-122.606 94.186c-12.291 9.441-17.374 25.531-12.835 40.301l46.344 150.809-118.677-91.166A36.82 36.82 0 0 0 256 388.92z",clipRule:"evenodd"})))};function h({width:e,score:t,className:s}){let l=void 0!=t?Math.floor(t/2):void 0,a=void 0!=t?Math.floor(t%2):void 0;return o.jsx("div",{className:`${s} flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left`,style:{scale:`${e/67.85}`},children:Array.from({length:5},(e,s)=>o.jsx("div",{className:"relative w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px] text-primary",children:void 0!=t?s<l?o.jsx(c,{}):s==l&&1==a?o.jsx(u,{}):o.jsx(x,{}):o.jsx(x,{className:"text-textColor-secondary"})},s))})}},4919:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var l=s(10326),a=s(85428),r=s(17577),i=s.n(r);let o=({isLoading:e,children:t})=>{let s=i().isValidElement(t)&&"p"===t.type;return l.jsx(l.Fragment,{children:e?l.jsx(a.E.div,{initial:{backgroundPositionX:"100%"},animate:{backgroundPositionX:"0%"},transition:{duration:1,ease:"linear",repeat:1/0},className:`flex ${s&&"w-min h-min"} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]`,children:l.jsx("div",{className:`flex ${s&&"w-min h-min"} invisible`,children:t})}):t})}},50246:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(10326);function a({title:e,height:t=34,font:s="NotoSansKRSemiBold"}){return(0,l.jsxs)("div",{className:"flex flex-col w-min h-min pb-[3px] pt-[24px] origin-top-left",style:{scale:t/34},children:[l.jsx("div",{className:"w-full h-[8px] bg-primary"}),l.jsx("p",{className:`font-${s} whitespace-nowrap text-[22px] tracking-[-2px] pr-[7px] -mt-[30px]`,children:e})]})}},11008:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>o});var l=s(68570);let a=(0,l.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\(pages)\authordetail\[authorCode]\page.js`),{__esModule:r,$$typeof:i}=a;a.default;let o=(0,l.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\(pages)\authordetail\[authorCode]\page.js#default`)},46803:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_1.d387c62a.png",height:115,width:116,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVimEyiv5iWvnlhnEljnExel0iDsGthm0timk1MaXFel0fL6JxwqlmqzImz1Y55rmOixIeLuG5lo06cu5IrAAAAD3RSTlMs+fytqd/96vsAtv3///7gaKSzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAPElEQVR4nAXBiQHAIAgAsVNRwILf/sM2wZlmEwcNs63QooxaoqEjz1q3ozdzfdmRGCdrCOjb+yk40rvgP0g1AgoTnn9dAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5176:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_2.19d21172.png",height:115,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVuTzydd1lsTTvlyJxMaXFYOStUNilXOStfQjLQrojdwJnz1ahTOSlcOyt8XUdePCyRbVJkRjXYtI3JpICog2TCmnO4kWyGY0uxkHAWmtHzAAAAEnRSTlP6/eP8AOq1qir9/v4xL+Qu+fPhpfb3AAAACXBIWXMAAAsSAAALEgHS3X78AAAAQklEQVR4nAXBCQKAIAgEwFVBxA4KPPr/S5sBXRWoRjh59ONjgyTVUpIAM8Ldb7xrjhWaIfsJTVtgDO/gBmqSszT6AV3dApKvUIMRAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},75125:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_3.3d93e4a3.png",height:116,width:116,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVziI96jZaZpK7KztR1iJF7jpd1iZGmsbmuub9MaXGEkpqBlZ6cq7OPoKh3ipSEmKG2wMbCytCQnqaZtXo5AAAAD3RSTlMlovz96Oan/f0A9KT819iqgG6SAAAACXBIWXMAAAsSAAALEgHS3X78AAAAPElEQVR4nAXBiQHAIAgAsdOi4Au4/7BNGHSRzoDm7t5gvRqpezGnRlo9tGeRoYfiOz/zAuKaJjDo9xbGD1AtAjbVwSCYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},54806:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_4.f8546330.png",height:116,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEWhoaGbm5vknJu6vr7Sq6vey8uwsLCmpqako6NMaXH05+a1ubnIubhCQUFJSEapqamoqKisrq6Pj47GxcbtsKxTVVK9ra68vL0ZlACVAAAAFXRSTlPs7/3d/PytLK4A/tz++fmv//////4wOS9jAAAACXBIWXMAAAsSAAALEgHS3X78AAAAP0lEQVR4nAXBCRaAIAhAwW+pQNsD1Lr/TZvBREtRMQQfwxF63h5PdvCVuRzwt84rQKNus4UifO0YCCZ67ir2A14YApL9an57AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},80531:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_5.60503b92.png",height:115,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEV+Q0yARE7toJx2Pkh+RExMaXG5cXZ8QkzCdnuvaG6WVFx+Q02LS1WpaWyTVlyLTFXPgIXhlJPYjo6jXmaXZlmiAAAAD3RSTlMs/P7zsAD76v7++auw46iPugrOAAAACXBIWXMAAAsSAAALEgHS3X78AAAAP0lEQVR4nBXKwRHAIAgEwENBQJMA2n+vGfe9EHDvDAE0jocCzxnVzD9Mt12ZLyi2ZZsKJs8atG4edrOAVRfkB0ueAhKKfXpwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},68011:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_6.25b5735f.png",height:115,width:116,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXYo3uwhWXWoXq2h2bBkm/ep3+tfmDor4VMaXHpsIbRnHeLZEuidVqYbFPepX7TpXzrsIejd1vfsYR8m9HVAAAADXRSTlMs/tv59fD7rQDq6v75Gg/zzQAAAAlwSFlzAAALEgAACxIB0t1+/AAAADxJREFUeJwFwQkCgCAIAMG1UKDi0P8/thkMnVMx8IxIB80V+07lWaNK5GLuXWeMC+2vzmoF7zfawVARxX5K1wIY5CvvWQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},37106:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_7.b86781f2.png",height:115,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWXl5dMaXGOjo7k4+TDwcKdnZ2dnZ2SkpKZmZmurq/NysyUlJSOjo739Pi4uLhaWlhgX157eXinpKSiyqkMAAAADnRSTlMsAP78/q7+7+v+/q2t/iPEzbQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA8SURBVHicBcEHAoAgDACxq3QCMvz/Y00QLMIQyP08J8Hc21tuRKl/vYJY+96jwShd2taALO0rQZiZE/kBPakBz+zxsN8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},29407:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_8.02861834.png",height:116,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEXTiE3dk1risIznuJVMaXHbkFThlVfajlTiqH3aj1Tuqn3006LZkFbNmXLho3Dqs3vrpm7trYLjoXH5tIf2wY3nl1nytHcnQGb+AAAAEHRSTlMt/vz+AOaurf7x/vvd+ezr+DMaMgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAD9JREFUeJwFwYkBgCAMALFDCqWAWj73H9UEQc0UgcdD8BdyuccqO2OzjFU9YfMqI+5E9iu29imkM+tJIGjvivxR7wJN3WqBagAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},29732:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l={src:"/_next/static/media/Profile_9.6f06da8e.png",height:115,width:115,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEXaxc2/o6/Ksrzz5+pMaXGZdISPZnqhfo6de4qhfY23mqebd4edeoqmhZSujZvq2t/l09ekf5DSuMPOs76tiJgRAqePAAAAD3RSTlP+/fz9ALIu6yqq9uP47OlYWzKfAAAACXBIWXMAAAsSAAALEgHS3X78AAAAP0lEQVR4nAXBBwLAIAgEsFOR4Sig/v+tTUDc1+pM4O9mYjDsoKJ5h9zjzWNDCiIcG/ZKeH0GlRwlRUFqc5rSD1NHAlkFGuUeAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[948,351,621,428,298,36],()=>s(85208));module.exports=l})();