"use strict";(()=>{var e={};e.id=383,e.ids=[383],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},41649:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>A,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c});var a={};r.r(a),r.d(a,{GET:()=>u});var o=r(49303),s=r(88716),n=r(60670),i=r(87070);async function u(e){let t=process.env.ALADIN_API_KEY,{searchParams:r}=new URL(e.url),a=r.get("Query")||null,o=r.get("Start")||1,s=`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${t}&Query=${a}&QueryType=Author&SearchTarget=Book&output=js&Version=20131101&MaxResults=50&Start=${o}`,n=await fetch(s),u=await n.json(),p=i.NextResponse.json(u);return p.headers.set("Access-Control-Allow-Origin","*"),p.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),p.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),p}let p=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/aladinAuthorSearch/route",pathname:"/api/aladinAuthorSearch",filename:"route",bundlePath:"app/api/aladinAuthorSearch/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\aladinAuthorSearch\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:d}=p,h="/api/aladinAuthorSearch/route";function A(){return(0,n.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,972],()=>r(41649));module.exports=a})();