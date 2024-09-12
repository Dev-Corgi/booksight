(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{4150:function(e,l,s){Promise.resolve().then(s.bind(s,8144))},6648:function(e,l,s){"use strict";s.d(l,{default:function(){return a.a}});var t=s(5601),a=s.n(t)},5601:function(e,l,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var s in l)Object.defineProperty(e,s,{enumerable:!0,get:l[s]})}(l,{default:function(){return x},getImageProps:function(){return r}});let t=s(9920),a=s(497),o=s(8173),i=t._(s(1241));function r(e){let{props:l}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(l))void 0===s&&delete l[e];return{props:l}}let x=o.Image},8144:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return b}});var t=s(7437),a=s(2265),o=s(4480),i=s(9039),r=s(147),x=s(6648),c=s(4202),n=s(4839);function d(e){let{books:l,authorName:s,authorCode:o,authorScore:d,authorBookCount:p}=e,[f,u]=(0,a.useState)(void 0!=d?d:void 0),[m,h]=(0,a.useState)(void 0!=p?p:void 0),[v,j]=(0,a.useState)("https://image.aladin.co.kr/Author/Photo/".concat(o,"/").concat(o,"_2.jpg")),[N,g]=(0,a.useState)(!0);(0,a.useEffect)(()=>{l.some(e=>void 0==e)||g(!1)},[l]),(0,a.useEffect)(()=>{!1==N&&void 0==f&&u(w(l)),!1==N&&void 0==p&&h(l.length)},[N]);let w=e=>{let l=e.filter(e=>0!=e.customerReviewRank);return 0===l.length?0:parseFloat((l.reduce((e,l)=>e+l.customerReviewRank,0)/l.length).toFixed(1))};return(0,t.jsxs)("div",{className:"flex flex-row text-nowrap",children:[(0,t.jsx)("div",{className:"relative w-[138px] h-[138px] rounded-full border-[2.5px] overflow-hidden",children:(0,t.jsx)(x.default,{alt:"ProfilePic",src:v,fill:!0,sizes:1,className:"object-cover",onError:()=>{j(c.Z)}})}),(0,t.jsxs)("div",{className:"flex flex-col ml-[26px]",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center mt-[14px] gap-[25px]",children:[(0,t.jsx)("p",{className:"font-KopubWorldBold text-[33px]",children:s}),(0,t.jsxs)("div",{className:"flex justify-center items-center w-[101px] h-[33px] rounded-full bg-primary",children:[(0,t.jsx)("div",{className:"flex flex-row gap-[5px]"}),(0,t.jsx)("div",{className:"relative w-[18px] h-[18px]",children:(0,t.jsx)(i.Z,{})}),(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[13px]",children:"구독하기"})]})]}),(0,t.jsx)("div",{className:"flex flex-row mt-[32px] gap-[4.5px]",children:(0,t.jsx)("div",{className:"flex px-[9.6px] py-[5px] rounded-full outline outline-[1.5px] outline-black",children:(0,t.jsx)("p",{className:"text-[14px] font-NotoSansKRSemiBold whitespace-nowrap",children:"#영미소설"})})}),(0,t.jsxs)("div",{className:"flex flex-row mt-[9px] gap-[9px]",children:[(0,t.jsx)(n.default,{isLoading:void 0==f,children:(0,t.jsx)("div",{className:"w-[111px] h-[21px]",children:(0,t.jsx)(r.Z,{score:f,width:111})})}),(0,t.jsx)(n.default,{isLoading:N,children:(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[15px]",children:void 0!=f?"".concat(f," / 10"):"- / 10"})})]}),(0,t.jsx)(n.default,{isLoading:void 0==m,children:(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[16px] text-black mt-[8px]",children:void 0!=m?"등록된 저서 : ".concat(m," 권"):"등록된 저서: ?? 권"})})]})]})}var p=s(7212);async function f(e){async function l(e){try{let l=await fetch("/api/authorCrawler?url=".concat(e),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3001"}});if(!l.ok)throw Error("Failed to fetch authorCrawler");return(await l.json()).description}catch(e){console.log(e)}}return await l(e)}function u(e){let{authorCode:l}=e,[s,o]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{void 0!=l&&async function(){o(await f("https://www.aladin.co.kr/author/wauthor_overview.aspx?AuthorSearch=@".concat(l,"&amp;partner=openAPI")))}()},[l]),(0,t.jsxs)("div",{className:"flex flex-col w-full",children:[(0,t.jsx)(p.Z,{title:"저자 소개"}),(0,t.jsx)("div",{className:"flex ml-[28px]",children:(0,t.jsx)(n.default,{isLoading:void 0==s,children:(0,t.jsx)("div",{className:" flex flex-col justify-start items-center w-full h-[218px] mt-[16px] rounded-[15px] bg-background",children:(0,t.jsx)("div",{className:"flex flex-col justify-start items-start mx-[18px] my-[17px] overflow-y-scroll scroll no-scrollbar",children:(0,t.jsx)("p",{className:"font-NotoSansKRRegular text-[16px] -tracking-[2px] whitespace-pre-wrap",children:void 0!=s?s:"스웨덴의 한 블로거에서 전 세계를 사로잡은 초대형 작가가 된 프레드릭 배크만. 데뷔작이자 첫 장편소설인 『오베라는 남자』는 출간되자마자 스웨덴 인구의 열 명 중 한 명이 소장하는 책이 되었으며, 46개국에 판권이 수출되었다. 미국에서는 77주간 뉴욕타임스 베스트셀러 목록에 올랐고, 아시아, 유럽, 아프리카의 여러 나라에서 베스트셀러로 등극해 그 이름을 알렸다. 뒤이어 출간한 『할머니가 미안하다고 전해달랬어요』 『브릿마리 여기 있다』 등이 역시 세계인에게 사랑받는 베스트셀러가 되며 초대형 작가로 자리매김했다. 이후 『베어타운』과 후속작 『우리와 당신들』로 돌아온 배크만은 이 소설로 “『오베라는 남자』를 뛰어넘었다” “이 시대의 디킨스다”라는 언론의 열광적인 찬사와 함께 아마존 및 굿리즈 올해의 소설에 오르며 또 한번 커다란 도약을 이루어냈다. 5년 만에 국내에 소개되는 신작 『위너』는 ‘베어타운 3부작’의 정점을 찍는 소설로 현지 및 해외 출간과 동시에 아마존, 굿리즈, 애플북스 베스트셀러에 오르며 ‘문학계의 승리자’라는 평을 받았다. 이 외의 작품으로 『하루하루가 이별의 날』 『일생일대의 거래』 등이 있다."})})})})})]})}function m(){return(0,t.jsxs)("div",{className:"flex flex-col w-full",children:[(0,t.jsx)(p.Z,{title:"응원의 한마디"}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow ml-[28px] mt-[16px] gap-[17px] w-full",children:[(0,t.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[(0,t.jsx)("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,t.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[(0,t.jsx)("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:(0,t.jsx)(x.default,{src:o.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]}),(0,t.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[(0,t.jsx)("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,t.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[(0,t.jsx)("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:(0,t.jsx)(x.default,{src:o.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]}),(0,t.jsxs)("div",{className:"relative w-full h-[77px] rounded-[15px] bg-background",children:[(0,t.jsx)("div",{className:"font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]",children:"12:45 am"}),(0,t.jsxs)("div",{className:"flex flex-row gap-[13px] mt-[13px]",children:[(0,t.jsx)("div",{className:"relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden",children:(0,t.jsx)(x.default,{src:o.default,alt:"ProfilePic",fill:!0,sizes:1,className:"object-cover"})}),(0,t.jsxs)("div",{className:"flex flex-col gap-[2px]",children:[(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[16px]",children:"꾸준한 독서가"}),(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[15px] text-textColor-secondary",children:"더미 데이터 입니다."})]})]})]})]})]})}var h=s(8803),v=s(6463);function j(e){let{book:l}=e,s=(0,v.useRouter)(),[o,i]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{void 0!=l&&i((0,h.Z)(l))},[l]),(0,t.jsxs)("div",{className:"flex flex-col w-[366px] h-[155px] text-nowrap",children:[(0,t.jsx)(n.default,{isLoading:void 0==l,children:(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[15px] bg-discriptionPanel",children:void 0!=l?l.pubDate.replace(/-/g,"."):"????.??.??"})}),(0,t.jsxs)("div",{className:"flex flex-row ml-[11px] mt-[8px]",children:[(0,t.jsxs)("div",{className:"relative flex items-center justify-center w-[10px] h-[125px]",children:[(0,t.jsx)("div",{className:"absolute w-[0.5px] h-[125px] bg-primary"}),(0,t.jsx)("div",{className:"absolute w-[10px] h-[10px] bg-primary rounded-full"})]}),(0,t.jsxs)("div",{onClick:function(){void 0!=l&&s.push("/bookdetail/".concat(l.isbn13))},className:"ml-[22px] mt-[11px] flex flex-row rounded-l-[15px] bg-background w-[323px] h-[106px] gap-[25px]",children:[(0,t.jsx)(n.default,{isLoading:void 0==l,children:(0,t.jsx)("div",{className:"relative ml-[13px] mt-[8px] w-[60px] h-[90px] rounded-[5px] overflow-hidden",children:void 0!=l&&(0,t.jsx)(x.default,{alt:"bookCoverImg",src:l.cover.replace(/coversum/,"cover200"),fill:!0,sizes:1,className:"object-fill"})})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)(n.default,{isLoading:void 0==l,children:(0,t.jsx)("p",{className:"font-NotoSansKRSemiBold text-[17px] mt-[15px] w-[190px] truncate",children:void 0!=l?l.title:"도서제목 로딩중"})}),(0,t.jsx)(n.default,{isLoading:void 0==l,children:(0,t.jsx)("p",{className:"font-NotoSansKRMedium text-[12px] text-textColor-secondary",children:void 0!=l?l.author:"작가 로딩중"})}),(0,t.jsx)(n.default,{isLoading:void 0==l,children:(0,t.jsx)(r.Z,{score:o,width:74.21,className:"mt-[3px]"})})]})]})]})]})}function N(e){let{books:l}=e;return(0,t.jsxs)("div",{className:"relative flex flex-col w-[394px] h-full  shrink-0",children:[(0,t.jsx)(p.Z,{title:"타임 라인"}),(0,t.jsx)("div",{className:"flex flex-col ml-[28px] mt-[31px] overflow-y-scroll scroll no-scrollbar",children:l.sort((e,l)=>new Date(e.pubDate)-new Date(l.pubDate)).map((e,l)=>(0,t.jsx)(j,{book:e},l))}),(0,t.jsx)("div",{className:"absolute left-[43.75px] top-[95px] w-[0.5px] h-[555px] bg-primary -z-10"})]})}var g=s(7341),w=s(1318);function b(e){let{params:l}=e,s=(0,v.useSearchParams)(),o=l.authorCode,i=s.get("authorName"),[r,x]=(0,a.useState)(Array.from({length:10}));return(0,a.useEffect)(()=>{void 0!=i&&void 0!=o&&async function(){x(await (0,w.Z)(i,o))}()},[i,o]),(0,t.jsx)("div",{className:"flex overflow-y-scroll scroll no-scrollbar overflow-x-clip",children:(0,t.jsx)("div",{className:"flex flex-col mt-[179px] w-full h-min bg-discriptionPanel text-black",children:(0,t.jsxs)("div",{className:"flex flex-col flex-grow ml-[60px] -mt-[79px]",children:[(0,t.jsx)(d,{books:r,authorName:i,authorCode:o}),(0,t.jsxs)("div",{className:"flex flex-col w-full mt-[28px] gap-[60px]",children:[(0,t.jsxs)("div",{className:"flex flex-row  gap-[54px] h-[639px]",children:[(0,t.jsxs)("div",{className:"flex flex-col flex-grow gap-[60px]",children:[(0,t.jsx)(u,{authorCode:o}),(0,t.jsx)(m,{})]}),(0,t.jsx)(N,{books:r})]}),(0,t.jsx)(g.Z,{title:"작가의 다른책",books:r})]})]})})})}},4839:function(e,l,s){"use strict";var t=s(7437),a=s(5678),o=s(2265);l.default=e=>{let{isLoading:l,children:s}=e,i=o.isValidElement(s)&&"p"===s.type;return(0,t.jsx)(t.Fragment,{children:l?(0,t.jsx)(a.E.div,{initial:{backgroundPositionX:"100%"},animate:{backgroundPositionX:"0%"},transition:{duration:1,ease:"linear",repeat:1/0},className:"flex ".concat(i&&"w-min h-min"," bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]"),children:(0,t.jsx)("div",{className:"flex ".concat(i&&"w-min h-min"," invisible"),children:s})}):s})}}},function(e){e.O(0,[534,190,718,971,23,744],function(){return e(e.s=4150)}),_N_E=e.O()}]);