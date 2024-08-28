"use strict";
(() => {
var exports = {};
exports.id = 436;
exports.ids = [436];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/getLibraryPicture/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6783);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(6649);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(4908);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(1517);
;// CONCATENATED MODULE: ./src/app/api/getLibraryPicture/route.js

async function GET(request) {
    const authKey = process.env.NARU_API_KEY; // Environment variable
    const { searchParams } = new URL(request.url);
    const libCode = searchParams.get("libCode") || null; // libCode
    const apiUrl = `http://data4library.kr/api/extends/libSrch?authKey=${authKey}&libCode=${libCode}&format=json`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return next_response/* default */.Z.json(data);
}

;// CONCATENATED MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FgetLibraryPicture%2Froute&name=app%2Fapi%2FgetLibraryPicture%2Froute&pagePath=private-next-app-dir%2Fapi%2FgetLibraryPicture%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&appPaths=%2Fapi%2FgetLibraryPicture%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/getLibraryPicture/route",
        pathname: "/api/getLibraryPicture",
        filename: "route",
        bundlePath: "app/api/getLibraryPicture/route"
    },
    resolvedPagePath: "C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\getLibraryPicture\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/getLibraryPicture/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [284,792,324,517], () => (__webpack_exec__(3375)));
module.exports = __webpack_exports__;

})();