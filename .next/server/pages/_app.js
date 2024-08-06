/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/web3modal.tsx":
/*!***********************************!*\
  !*** ./src/context/web3modal.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Modal: () => (/* binding */ Web3Modal)\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethers5/react */ \"@web3modal/ethers5/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__]);\n_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ Web3Modal auto */ \n// Get projectId from WalletConnect Cloud\nconst projectId = \"5d16e2c0f85cdb58d7408b89cd47bf24\";\n// Define chains\nconst mainnet = {\n    chainId: 1,\n    name: \"Ethereum\",\n    currency: \"ETH\",\n    explorerUrl: \"https://etherscan.io\",\n    rpcUrl: \"https://cloudflare-eth.com\"\n};\nconst testnet = {\n    chainId: 54211,\n    name: \"HAQQ Testedge2\",\n    currency: \"ISLM\",\n    explorerUrl: \"https://explorer.testedge2.haqq.network\",\n    rpcUrl: \"https://rpc.eth.testedge2.haqq.network\"\n};\n// Metadata for your app\nconst metadata = {\n    name: \"DeFile\",\n    description: \"Decentralized File Locker\",\n    url: \"https://defile.vercel.app\",\n    icons: [\n        \"https://drive.google.com/uc?export=view&id=15E-Th6oVxc5iqNBNfHnkCCAy_6V858Tl\"\n    ]\n};\n// Create Ethers configuration with auth options\nconst ethersConfig = (0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.defaultConfig)({\n    metadata,\n    auth: {\n        email: true,\n        socials: [\n            \"google\",\n            \"x\"\n        ],\n        showWallets: true,\n        walletFeatures: true // Enable wallet features\n    },\n    enableEIP6963: true,\n    enableInjected: true,\n    enableCoinbase: true,\n    rpcUrl: \"...\",\n    defaultChainId: 1 // Default chain ID for Coinbase SDK\n});\n// Create Web3Modal instance\n(0,_web3modal_ethers5_react__WEBPACK_IMPORTED_MODULE_0__.createWeb3Modal)({\n    ethersConfig,\n    chains: [\n        testnet\n    ],\n    projectId,\n    enableOnramp: true,\n    enableAnalytics: true // Enable analytics\n});\nfunction Web3Modal({ children }) {\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OytEQUV5RTtBQUV6RSx5Q0FBeUM7QUFDekMsTUFBTUUsWUFBWTtBQUVsQixnQkFBZ0I7QUFDaEIsTUFBTUMsVUFBVTtJQUNkQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLFVBQVU7SUFDZEwsU0FBUztJQUNUQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxRQUFRO0FBQ1Y7QUFFQSx3QkFBd0I7QUFDeEIsTUFBTUUsV0FBVztJQUNmTCxNQUFNO0lBQ05NLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBK0U7QUFDekY7QUFFQSxnREFBZ0Q7QUFDaEQsTUFBTUMsZUFBZWIsdUVBQWFBLENBQUM7SUFDakNTO0lBQ0FLLE1BQUs7UUFDSEMsT0FBTztRQUNQQyxTQUFRO1lBQUM7WUFBUztTQUFJO1FBQ3RCQyxhQUFhO1FBQ2JDLGdCQUFnQixLQUFLLHlCQUF5QjtJQUNoRDtJQUNBQyxlQUFlO0lBQ2ZDLGdCQUFnQjtJQUNoQkMsZ0JBQWdCO0lBQ2hCZCxRQUFRO0lBQ1JlLGdCQUFnQixFQUFFLG9DQUFvQztBQUN4RDtBQUVBLDRCQUE0QjtBQUM1QnZCLHlFQUFlQSxDQUFDO0lBQ2RjO0lBQ0FVLFFBQVE7UUFBQ2Y7S0FBUTtJQUNqQlA7SUFDQXVCLGNBQWM7SUFDZEMsaUJBQWlCLEtBQUssbUJBQW1CO0FBQzNDO0FBRU8sU0FBU0MsVUFBVSxFQUFFQyxRQUFRLEVBQUU7SUFDcEMsT0FBT0E7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZmlsZS8uL3NyYy9jb250ZXh0L3dlYjNtb2RhbC50c3g/NmMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgY3JlYXRlV2ViM01vZGFsLCBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcnM1L3JlYWN0J1xuXG4vLyBHZXQgcHJvamVjdElkIGZyb20gV2FsbGV0Q29ubmVjdCBDbG91ZFxuY29uc3QgcHJvamVjdElkID0gJzVkMTZlMmMwZjg1Y2RiNThkNzQwOGI4OWNkNDdiZjI0J1xuXG4vLyBEZWZpbmUgY2hhaW5zXG5jb25zdCBtYWlubmV0ID0ge1xuICBjaGFpbklkOiAxLFxuICBuYW1lOiAnRXRoZXJldW0nLFxuICBjdXJyZW5jeTogJ0VUSCcsXG4gIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9ldGhlcnNjYW4uaW8nLFxuICBycGNVcmw6ICdodHRwczovL2Nsb3VkZmxhcmUtZXRoLmNvbScsXG59XG5cbmNvbnN0IHRlc3RuZXQgPSB7XG4gIGNoYWluSWQ6IDU0MjExLFxuICBuYW1lOiAnSEFRUSBUZXN0ZWRnZTInLFxuICBjdXJyZW5jeTogJ0lTTE0nLFxuICBleHBsb3JlclVybDogJ2h0dHBzOi8vZXhwbG9yZXIudGVzdGVkZ2UyLmhhcXEubmV0d29yaycsXG4gIHJwY1VybDogJ2h0dHBzOi8vcnBjLmV0aC50ZXN0ZWRnZTIuaGFxcS5uZXR3b3JrJyxcbn1cblxuLy8gTWV0YWRhdGEgZm9yIHlvdXIgYXBwXG5jb25zdCBtZXRhZGF0YSA9IHtcbiAgbmFtZTogJ0RlRmlsZScsXG4gIGRlc2NyaXB0aW9uOiAnRGVjZW50cmFsaXplZCBGaWxlIExvY2tlcicsXG4gIHVybDogJ2h0dHBzOi8vZGVmaWxlLnZlcmNlbC5hcHAnLCAvLyBFbnN1cmUgdGhpcyBtYXRjaGVzIHlvdXIgZG9tYWluXG4gIGljb25zOiBbJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xNUUtVGg2b1Z4YzVpcU5CTmZIbmtDQ0F5XzZWODU4VGwnXVxufVxuXG4vLyBDcmVhdGUgRXRoZXJzIGNvbmZpZ3VyYXRpb24gd2l0aCBhdXRoIG9wdGlvbnNcbmNvbnN0IGV0aGVyc0NvbmZpZyA9IGRlZmF1bHRDb25maWcoe1xuICBtZXRhZGF0YSxcbiAgYXV0aDp7XG4gICAgZW1haWw6IHRydWUsXG4gICAgc29jaWFsczpbJ2dvb2dsZScsJ3gnXSxcbiAgICBzaG93V2FsbGV0czogdHJ1ZSwgLy8gU2hvdyB3YWxsZXRzICBcbiAgICB3YWxsZXRGZWF0dXJlczogdHJ1ZSAvLyBFbmFibGUgd2FsbGV0IGZlYXR1cmVzXG4gIH0sXG4gIGVuYWJsZUVJUDY5NjM6IHRydWUsIC8vIEVuYWJsZSBFSVA2OTYzXG4gIGVuYWJsZUluamVjdGVkOiB0cnVlLCAvLyBFbmFibGUgaW5qZWN0ZWQgd2FsbGV0c1xuICBlbmFibGVDb2luYmFzZTogdHJ1ZSwgLy8gRW5hYmxlIENvaW5iYXNlIHdhbGxldFxuICBycGNVcmw6ICcuLi4nLCAvLyBSUEMgVVJMIGZvciBDb2luYmFzZSBTREtcbiAgZGVmYXVsdENoYWluSWQ6IDEgLy8gRGVmYXVsdCBjaGFpbiBJRCBmb3IgQ29pbmJhc2UgU0RLXG59KVxuXG4vLyBDcmVhdGUgV2ViM01vZGFsIGluc3RhbmNlXG5jcmVhdGVXZWIzTW9kYWwoe1xuICBldGhlcnNDb25maWcsXG4gIGNoYWluczogW3Rlc3RuZXRdLFxuICBwcm9qZWN0SWQsXG4gIGVuYWJsZU9ucmFtcDogdHJ1ZSxcbiAgZW5hYmxlQW5hbHl0aWNzOiB0cnVlIC8vIEVuYWJsZSBhbmFseXRpY3Ncbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBXZWIzTW9kYWwoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlV2ViM01vZGFsIiwiZGVmYXVsdENvbmZpZyIsInByb2plY3RJZCIsIm1haW5uZXQiLCJjaGFpbklkIiwibmFtZSIsImN1cnJlbmN5IiwiZXhwbG9yZXJVcmwiLCJycGNVcmwiLCJ0ZXN0bmV0IiwibWV0YWRhdGEiLCJkZXNjcmlwdGlvbiIsInVybCIsImljb25zIiwiZXRoZXJzQ29uZmlnIiwiYXV0aCIsImVtYWlsIiwic29jaWFscyIsInNob3dXYWxsZXRzIiwid2FsbGV0RmVhdHVyZXMiLCJlbmFibGVFSVA2OTYzIiwiZW5hYmxlSW5qZWN0ZWQiLCJlbmFibGVDb2luYmFzZSIsImRlZmF1bHRDaGFpbklkIiwiY2hhaW5zIiwiZW5hYmxlT25yYW1wIiwiZW5hYmxlQW5hbHl0aWNzIiwiV2ViM01vZGFsIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/web3modal.tsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/web3modal */ \"./src/context/web3modal.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_web3modal__WEBPACK_IMPORTED_MODULE_2__]);\n_context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_web3modal__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/adee/Movies/HaqqDefile/src/pages/_app.js\",\n            lineNumber: 4,\n            columnNumber: 24\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adee/Movies/HaqqDefile/src/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ29CO0FBQ2hELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQVEsOERBQUNILHlEQUFTQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUMvQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVmaWxlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2FwcC9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBXZWIzTW9kYWwgfSBmcm9tICcuLi9jb250ZXh0L3dlYjNtb2RhbCdcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAgPFdlYjNNb2RhbD48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9XZWIzTW9kYWw+ICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiV2ViM01vZGFsIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethers5/react":
/*!*******************************************!*\
  !*** external "@web3modal/ethers5/react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethers5/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();