"use strict";(()=>{var e={};e.id=584,e.ids=[584],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29814:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>I,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var a={};r.r(a),r.d(a,{GET:()=>p});var o=r(49303),s=r(88716),n=r(60670),i=r(87070);async function p(e){let t=process.env.ALADIN_API_KEY,{searchParams:r}=new URL(e.url),a=r.get("ItemId")||null,o=r.get("OptResult")||null,s=`http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${t}&itemIdType=ISBN13&ItemId=${a}&output=js&Version=20131101${null==o?"":`&OptResult=${o}`}`,n=await fetch(s),p=await n.json(),u=i.NextResponse.json(p);return u.headers.set("Access-Control-Allow-Origin","*"),u.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),u.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),u}let u=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/aladinISBNSearch/route",pathname:"/api/aladinISBNSearch",filename:"route",bundlePath:"app/api/aladinISBNSearch/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\aladinISBNSearch\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:c}=u,h="/api/aladinISBNSearch/route";function I(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,972],()=>r(29814));module.exports=a})();