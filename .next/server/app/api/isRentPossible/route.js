"use strict";(()=>{var e={};e.id=738,e.ids=[738],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},99388:(e,t,s)=>{s.r(t),s.d(t,{originalPathname:()=>h,patchFetch:()=>b,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var r={};s.r(r),s.d(r,{GET:()=>p});var o=s(49303),i=s(88716),n=s(60670),a=s(87070);async function p(e){let t=process.env.NARU_API_KEY,{searchParams:s}=new URL(e.url),r=s.get("libCode")||"20240819",o=s.get("isbn13")||"20240819",i=`http://data4library.kr/api/bookExist?authKey=${t}&libCode=${r}&isbn13=${o}&format=json`,n=await fetch(i),p=await n.json(),u=a.NextResponse.json(p);return u.headers.set("Access-Control-Allow-Origin","*"),u.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),u.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),u}let u=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/isRentPossible/route",pathname:"/api/isRentPossible",filename:"route",bundlePath:"app/api/isRentPossible/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\isRentPossible\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:c}=u,h="/api/isRentPossible/route";function b(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,972],()=>s(99388));module.exports=r})();