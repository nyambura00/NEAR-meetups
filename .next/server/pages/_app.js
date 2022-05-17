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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"react-spinners/ClipLoader\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { setup } from 'twind';\n// import { AppProvider } from '../components/AppContext';\n// import twindConfig from '../twind.config';\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); //Loading the NEAR API and setting up the wallet and contract\n  //At the start of the app\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    (0,_utils_near__WEBPACK_IMPORTED_MODULE_2__.near)();\n    setIsLoading(false);\n  }, []);\n  const AnyComponent = Component;\n  return isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"center-div\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {\n      color: \"#000\",\n      loading: true,\n      size: 50\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 6\n  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AnyComponent, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU0ksS0FBVCxDQUFnQjtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBaEIsRUFBbUQ7QUFDakQsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUMsQ0FEaUQsQ0FHakQ7QUFDQTs7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RELElBQUFBLGlEQUFJO0FBQ0pRLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsUUFBTUMsWUFBWSxHQUFHSixTQUFyQjtBQUVBLFNBQU9FLFNBQVMsZ0JBQ2I7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNHLDhEQUFDLGtFQUFEO0FBQVksV0FBSyxFQUFFLE1BQW5CO0FBQTJCLGFBQU8sRUFBRSxJQUFwQztBQUEwQyxVQUFJLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEYSxnQkFJZCw4REFBQyxZQUFELG9CQUFrQkQsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpGO0FBTUQ7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyLW1lZXR1cHMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL2ludGVyJztcblxuLy8gaW1wb3J0IHsgc2V0dXAgfSBmcm9tICd0d2luZCc7XG4vLyBpbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGV4dCc7XG4vLyBpbXBvcnQgdHdpbmRDb25maWcgZnJvbSAnLi4vdHdpbmQuY29uZmlnJztcblxuaW1wb3J0IHsgbmVhciB9ICBmcm9tIFwiLi4vdXRpbHMvbmVhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OkFwcFByb3BzKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvL0xvYWRpbmcgdGhlIE5FQVIgQVBJIGFuZCBzZXR0aW5nIHVwIHRoZSB3YWxsZXQgYW5kIGNvbnRyYWN0XG4gIC8vQXQgdGhlIHN0YXJ0IG9mIHRoZSBhcHBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuZWFyKCk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IEFueUNvbXBvbmVudCA9IENvbXBvbmVudCBhcyBhbnk7XG5cbiAgcmV0dXJuIGlzTG9hZGluZyA/IFxuICAgICg8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1kaXZcIj5cbiAgICAgICAgPENsaXBMb2FkZXIgY29sb3I9e1wiIzAwMFwifSBsb2FkaW5nPXt0cnVlfSBzaXplPXs1MH0gLz5cbiAgICA8L2Rpdj4pIDogKFxuICAgIDxBbnlDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuIl0sIm5hbWVzIjpbIm5lYXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsaXBMb2FkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIkFueUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/near.js":
/*!***********************!*\
  !*** ./utils/near.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTRACT_ID\": () => (/* binding */ CONTRACT_ID),\n/* harmony export */   \"accountBalance\": () => (/* binding */ accountBalance),\n/* harmony export */   \"accountId\": () => (/* binding */ accountId),\n/* harmony export */   \"addEvent\": () => (/* binding */ addEvent),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"near\": () => (/* binding */ near),\n/* harmony export */   \"utils\": () => (/* binding */ utils),\n/* harmony export */   \"viewFunction\": () => (/* binding */ viewFunction),\n/* harmony export */   \"wallet\": () => (/* binding */ wallet)\n/* harmony export */ });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CONTRACT_ID = \"dev-1648751639070-78408703513675\";\nconst near = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Near({\n  networkId: \"testnet\",\n  keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.BrowserLocalStorageKeyStore(),\n  nodeUrl: \"https://rpc.testnet.near.org\",\n  walletUrl: \"https://wallet.testnet.near.org\"\n});\nconst wallet = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.WalletConnection(near, \"NEAR-meetups\");\nconst utils = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils;\nconst login = () => {\n  wallet.requestSignIn(CONTRACT_ID);\n};\nconst logout = () => {\n  wallet.signOut();\n  window.location.reload();\n};\nconst accountId = wallet.getAccountId();\nconst viewFunction = async (functionName, args = {}) => {\n  const result = await wallet.account().viewFunction(CONTRACT_ID, functionName, args);\n  return result;\n};\nconst addEvent = async (functionName, args = {}, deposit = \"0\") => {\n  const result = await wallet.account().functionCall({\n    contractId: CONTRACT_ID,\n    methodName: functionName,\n    args: args,\n    attachedDeposit: utils.format.parseNearAmount(deposit)\n  });\n  return result;\n};\nasync function accountBalance() {\n  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9uZWFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT08sTUFBTUssV0FBVyxHQUFHLGtDQUFwQjtBQUVBLE1BQU1DLElBQUksR0FBRyxJQUFJTCw2Q0FBSixDQUFTO0FBQzNCTSxFQUFBQSxTQUFTLEVBQUUsU0FEZ0I7QUFFM0JDLEVBQUFBLFFBQVEsRUFBRSxJQUFJUiw4RUFBSixFQUZpQjtBQUczQlUsRUFBQUEsT0FBTyxFQUFFLDhCQUhrQjtBQUkzQkMsRUFBQUEsU0FBUyxFQUFFO0FBSmdCLENBQVQsQ0FBYjtBQU9BLE1BQU1DLE1BQU0sR0FBRyxJQUFJVix5REFBSixDQUFxQkksSUFBckIsRUFBMkIsY0FBM0IsQ0FBZjtBQUVBLE1BQU1ILEtBQUssR0FBR0MsOENBQWQ7QUFFQSxNQUFNUyxLQUFLLEdBQUcsTUFBTTtBQUN6QkQsRUFBQUEsTUFBTSxDQUFDRSxhQUFQLENBQXFCVCxXQUFyQjtBQUNELENBRk07QUFJQSxNQUFNVSxNQUFNLEdBQUcsTUFBTTtBQUMxQkgsRUFBQUEsTUFBTSxDQUFDSSxPQUFQO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxDQUhNO0FBS0EsTUFBTUMsU0FBUyxHQUFHUixNQUFNLENBQUNTLFlBQVAsRUFBbEI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsT0FBT0MsWUFBUCxFQUFxQkMsSUFBSSxHQUFHLEVBQTVCLEtBQW1DO0FBQzdELFFBQU1DLE1BQU0sR0FBRyxNQUFNYixNQUFNLENBQ3hCYyxPQURrQixHQUVsQkosWUFGa0IsQ0FFTGpCLFdBRkssRUFFUWtCLFlBRlIsRUFFc0JDLElBRnRCLENBQXJCO0FBR0EsU0FBT0MsTUFBUDtBQUNELENBTE07QUFPQSxNQUFNRSxRQUFRLEdBQUcsT0FBT0osWUFBUCxFQUFxQkMsSUFBSSxHQUFHLEVBQTVCLEVBQWdDSSxPQUFPLEdBQUcsR0FBMUMsS0FBa0Q7QUFDeEUsUUFBTUgsTUFBTSxHQUFHLE1BQU1iLE1BQU0sQ0FBQ2MsT0FBUCxHQUFpQkcsWUFBakIsQ0FBOEI7QUFDakRDLElBQUFBLFVBQVUsRUFBRXpCLFdBRHFDO0FBRWpEMEIsSUFBQUEsVUFBVSxFQUFFUixZQUZxQztBQUdqREMsSUFBQUEsSUFBSSxFQUFFQSxJQUgyQztBQUlqRFEsSUFBQUEsZUFBZSxFQUFFN0IsS0FBSyxDQUFDOEIsTUFBTixDQUFhQyxlQUFiLENBQTZCTixPQUE3QjtBQUpnQyxHQUE5QixDQUFyQjtBQU1BLFNBQU9ILE1BQVA7QUFDRCxDQVJNO0FBVUEsZUFBZVUsY0FBZixHQUFnQztBQUNyQyxTQUFPQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU1uQixNQUFNLENBQUNvQixnQkFBUCxDQUF3QlgsT0FBeEIsR0FBa0NZLGlCQUFsQyxFQUFQLEVBQThEQyxLQUEvRCxFQUFzRSxDQUF0RSxDQUF2QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1tZWV0dXBzLy4vdXRpbHMvbmVhci5qcz80YzllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGtleVN0b3JlcyxcbiAgTmVhcixcbiAgV2FsbGV0Q29ubmVjdGlvbixcbiAgdXRpbHMgYXMgbmVhclV0aWxzLFxufSBmcm9tIFwibmVhci1hcGktanNcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRSQUNUX0lEID0gXCJkZXYtMTY0ODc1MTYzOTA3MC03ODQwODcwMzUxMzY3NVwiO1xuXG5leHBvcnQgY29uc3QgbmVhciA9IG5ldyBOZWFyKHtcbiAgbmV0d29ya0lkOiBcInRlc3RuZXRcIixcbiAga2V5U3RvcmU6IG5ldyBrZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG4gIG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICB3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCB3YWxsZXQgPSBuZXcgV2FsbGV0Q29ubmVjdGlvbihuZWFyLCBcIk5FQVItbWVldHVwc1wiKTtcblxuZXhwb3J0IGNvbnN0IHV0aWxzID0gbmVhclV0aWxzO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIHdhbGxldC5yZXF1ZXN0U2lnbkluKENPTlRSQUNUX0lEKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIHdhbGxldC5zaWduT3V0KCk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY2NvdW50SWQgPSB3YWxsZXQuZ2V0QWNjb3VudElkKCk7XG5cbmV4cG9ydCBjb25zdCB2aWV3RnVuY3Rpb24gPSBhc3luYyAoZnVuY3Rpb25OYW1lLCBhcmdzID0ge30pID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0XG4gICAgLmFjY291bnQoKVxuICAgIC52aWV3RnVuY3Rpb24oQ09OVFJBQ1RfSUQsIGZ1bmN0aW9uTmFtZSwgYXJncyk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnQgPSBhc3luYyAoZnVuY3Rpb25OYW1lLCBhcmdzID0ge30sIGRlcG9zaXQgPSBcIjBcIikgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXQuYWNjb3VudCgpLmZ1bmN0aW9uQ2FsbCh7XG4gICAgY29udHJhY3RJZDogQ09OVFJBQ1RfSUQsXG4gICAgbWV0aG9kTmFtZTogZnVuY3Rpb25OYW1lLFxuICAgIGFyZ3M6IGFyZ3MsXG4gICAgYXR0YWNoZWREZXBvc2l0OiB1dGlscy5mb3JtYXQucGFyc2VOZWFyQW1vdW50KGRlcG9zaXQpLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjY291bnRCYWxhbmNlKCkge1xuICByZXR1cm4gZm9ybWF0TmVhckFtb3VudCgoYXdhaXQgd2luZG93LndhbGxldENvbm5lY3Rpb24uYWNjb3VudCgpLmdldEFjY291bnRCYWxhbmNlKCkpLnRvdGFsLCAyKTtcbn0iXSwibmFtZXMiOlsia2V5U3RvcmVzIiwiTmVhciIsIldhbGxldENvbm5lY3Rpb24iLCJ1dGlscyIsIm5lYXJVdGlscyIsIkNPTlRSQUNUX0lEIiwibmVhciIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsIndhbGxldCIsImxvZ2luIiwicmVxdWVzdFNpZ25JbiIsImxvZ291dCIsInNpZ25PdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFjY291bnRJZCIsImdldEFjY291bnRJZCIsInZpZXdGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJyZXN1bHQiLCJhY2NvdW50IiwiYWRkRXZlbnQiLCJkZXBvc2l0IiwiZnVuY3Rpb25DYWxsIiwiY29udHJhY3RJZCIsIm1ldGhvZE5hbWUiLCJhdHRhY2hlZERlcG9zaXQiLCJmb3JtYXQiLCJwYXJzZU5lYXJBbW91bnQiLCJhY2NvdW50QmFsYW5jZSIsImZvcm1hdE5lYXJBbW91bnQiLCJ3YWxsZXRDb25uZWN0aW9uIiwiZ2V0QWNjb3VudEJhbGFuY2UiLCJ0b3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/near.js\n");

/***/ }),

/***/ "./node_modules/@fontsource/inter/index.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/inter/index.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "near-api-js":
/*!******************************!*\
  !*** external "near-api-js" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("near-api-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-spinners/ClipLoader":
/*!********************************************!*\
  !*** external "react-spinners/ClipLoader" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners/ClipLoader");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();