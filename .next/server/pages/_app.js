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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"react-spinners/ClipLoader\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { setup } from 'twind';\n// import { AppProvider } from '../components/AppContext';\n// import twindConfig from '../twind.config';\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); //Loading the NEAR API and setting up the wallet and contract\n  //At the start of the app\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    (0,_utils_near__WEBPACK_IMPORTED_MODULE_2__.initializeContract)();\n    setIsLoading(false);\n  }, []);\n  const AnyComponent = Component;\n  return isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"center-div\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {\n      color: \"#000\",\n      loading: true,\n      size: 50\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 6\n  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AnyComponent, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsU0FBU0ksS0FBVCxDQUFnQjtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBaEIsRUFBbUQ7QUFDakQsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUMsQ0FEaUQsQ0FHakQ7QUFDQTs7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RELElBQUFBLCtEQUFrQjtBQUNsQlEsSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxRQUFNQyxZQUFZLEdBQUdKLFNBQXJCO0FBRUEsU0FBT0UsU0FBUyxnQkFDYjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0csOERBQUMsa0VBQUQ7QUFBWSxXQUFLLEVBQUUsTUFBbkI7QUFBMkIsYUFBTyxFQUFFLElBQXBDO0FBQTBDLFVBQUksRUFBRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURhLGdCQUlkLDhEQUFDLFlBQUQsb0JBQWtCRCxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkY7QUFNRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXInO1xuXG4vLyBpbXBvcnQgeyBzZXR1cCB9IGZyb20gJ3R3aW5kJztcbi8vIGltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0Jztcbi8vIGltcG9ydCB0d2luZENvbmZpZyBmcm9tICcuLi90d2luZC5jb25maWcnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplQ29udHJhY3QgfSBmcm9tIFwiLi4vdXRpbHMvbmVhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OkFwcFByb3BzKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvL0xvYWRpbmcgdGhlIE5FQVIgQVBJIGFuZCBzZXR0aW5nIHVwIHRoZSB3YWxsZXQgYW5kIGNvbnRyYWN0XG4gIC8vQXQgdGhlIHN0YXJ0IG9mIHRoZSBhcHBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0aWFsaXplQ29udHJhY3QoKTtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQW55Q29tcG9uZW50ID0gQ29tcG9uZW50IGFzIGFueTtcblxuICByZXR1cm4gaXNMb2FkaW5nID8gXG4gICAgKDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWRpdlwiPlxuICAgICAgICA8Q2xpcExvYWRlciBjb2xvcj17XCIjMDAwXCJ9IGxvYWRpbmc9e3RydWV9IHNpemU9ezUwfSAvPlxuICAgIDwvZGl2PikgOiAoXG4gICAgPEFueUNvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUNvbnRyYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDbGlwTG9hZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJBbnlDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/near.js":
/*!***********************!*\
  !*** ./utils/near.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTRACT_ID\": () => (/* binding */ CONTRACT_ID),\n/* harmony export */   \"accountBalance\": () => (/* binding */ accountBalance),\n/* harmony export */   \"callFunction\": () => (/* binding */ callFunction),\n/* harmony export */   \"contract\": () => (/* binding */ contract),\n/* harmony export */   \"initializeContract\": () => (/* binding */ initializeContract),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"utils\": () => (/* binding */ utils),\n/* harmony export */   \"viewFunction\": () => (/* binding */ viewFunction),\n/* harmony export */   \"wallet\": () => (/* binding */ wallet)\n/* harmony export */ });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CONTRACT_ID = \"dev-1648751639070-78408703513675\";\nconst initializeContract = () => {\n  //Testnet config\n  const near = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Near({\n    networkId: \"testnet\",\n    keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.BrowserLocalStorageKeyStore(),\n    nodeUrl: \"https://rpc.testnet.near.org\",\n    walletUrl: \"https://wallet.testnet.near.org\"\n  }); //Wallet init\n\n  wallet = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.WalletConnection(near, \"NEAR-meetups\");\n}; //Loaded after the being server to the client\n//Due to keystore needing access to the window object\n\nlet wallet = null;\nlet contract = null;\nconst utils = near_api_js__WEBPACK_IMPORTED_MODULE_0__.utils; //Methods\n\nconst login = () => {\n  wallet.requestSignIn(CONTRACT_ID);\n};\nconst logout = () => {\n  wallet.signOut();\n}; //Function for view methods\n\nconst viewFunction = async (functionName, args = {}) => {\n  const result = await wallet.account().viewFunction(CONTRACT_ID, functionName, args);\n  return result;\n}; //Function for call method\n\nconst callFunction = async (functionName, args = {}, deposit = \"0\") => {\n  const result = await wallet.account().functionCall({\n    contractId: CONTRACT_ID,\n    methodName: functionName,\n    args: args,\n    attachedDeposit: utils.format.parseNearAmount(deposit)\n  });\n  return result;\n}; //for account balance\n\nasync function accountBalance() {\n  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9uZWFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUU8sTUFBTUssV0FBVyxHQUFHLGtDQUFwQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDdEM7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSU4sNkNBQUosQ0FBUztBQUNwQk8sSUFBQUEsU0FBUyxFQUFFLFNBRFM7QUFFbEJDLElBQUFBLFFBQVEsRUFBRSxJQUFJVCw4RUFBSixFQUZRO0FBR2xCVyxJQUFBQSxPQUFPLEVBQUUsOEJBSFM7QUFJcEJDLElBQUFBLFNBQVMsRUFBRTtBQUpTLEdBQVQsQ0FBYixDQUZzQyxDQVN0Qzs7QUFDQUMsRUFBQUEsTUFBTSxHQUFHLElBQUlYLHlEQUFKLENBQXFCSyxJQUFyQixFQUEyQixjQUEzQixDQUFUO0FBQ0QsQ0FYTSxFQWFQO0FBQ0E7O0FBQ08sSUFBSU0sTUFBTSxHQUFHLElBQWI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQU1YLEtBQUssR0FBR0MsOENBQWQsRUFFUDs7QUFFTyxNQUFNVyxLQUFLLEdBQUcsTUFBTTtBQUN6QkYsRUFBQUEsTUFBTSxDQUFDRyxhQUFQLENBQXFCWCxXQUFyQjtBQUNELENBRk07QUFJQSxNQUFNWSxNQUFNLEdBQUcsTUFBTTtBQUMxQkosRUFBQUEsTUFBTSxDQUFDSyxPQUFQO0FBQ0QsQ0FGTSxFQUtQOztBQUNPLE1BQU1DLFlBQVksR0FBRyxPQUFPQyxZQUFQLEVBQXFCQyxJQUFJLEdBQUcsRUFBNUIsS0FBbUM7QUFDN0QsUUFBTUMsTUFBTSxHQUFHLE1BQU1ULE1BQU0sQ0FDeEJVLE9BRGtCLEdBRWxCSixZQUZrQixDQUVMZCxXQUZLLEVBRVFlLFlBRlIsRUFFc0JDLElBRnRCLENBQXJCO0FBSUEsU0FBT0MsTUFBUDtBQUNELENBTk0sRUFRUDs7QUFDTyxNQUFNRSxZQUFZLEdBQUcsT0FBT0osWUFBUCxFQUFxQkMsSUFBSSxHQUFHLEVBQTVCLEVBQWdDSSxPQUFPLEdBQUcsR0FBMUMsS0FBa0Q7QUFDNUUsUUFBTUgsTUFBTSxHQUFHLE1BQU1ULE1BQU0sQ0FBQ1UsT0FBUCxHQUFpQkcsWUFBakIsQ0FBOEI7QUFDakRDLElBQUFBLFVBQVUsRUFBRXRCLFdBRHFDO0FBRWpEdUIsSUFBQUEsVUFBVSxFQUFFUixZQUZxQztBQUdqREMsSUFBQUEsSUFBSSxFQUFFQSxJQUgyQztBQUlqRFEsSUFBQUEsZUFBZSxFQUFFMUIsS0FBSyxDQUFDMkIsTUFBTixDQUFhQyxlQUFiLENBQTZCTixPQUE3QjtBQUpnQyxHQUE5QixDQUFyQjtBQU1BLFNBQU9ILE1BQVA7QUFDRCxDQVJNLEVBVVA7O0FBQ08sZUFBZVUsY0FBZixHQUFnQztBQUNyQyxTQUFPQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU1DLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JaLE9BQXhCLEdBQWtDYSxpQkFBbEMsRUFBUCxFQUE4REMsS0FBL0QsRUFBc0UsQ0FBdEUsQ0FBdkI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL3V0aWxzL25lYXIuanM/NGM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBrZXlTdG9yZXMsXG4gIE5lYXIsXG4gIFdhbGxldENvbm5lY3Rpb24sXG4gIHV0aWxzIGFzIG5lYXJVdGlscyxcbn0gZnJvbSBcIm5lYXItYXBpLWpzXCI7XG5cblxuZXhwb3J0IGNvbnN0IENPTlRSQUNUX0lEID0gXCJkZXYtMTY0ODc1MTYzOTA3MC03ODQwODcwMzUxMzY3NVwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUNvbnRyYWN0ID0gKCkgPT4ge1xuICAvL1Rlc3RuZXQgY29uZmlnXG4gIGNvbnN0IG5lYXIgPSBuZXcgTmVhcih7XG4gICAgbmV0d29ya0lkOiBcInRlc3RuZXRcIixcbiAgICAgIGtleVN0b3JlOiBuZXcga2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuICAgICAgbm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgd2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcbiAgfSk7XG5cbiAgLy9XYWxsZXQgaW5pdFxuICB3YWxsZXQgPSBuZXcgV2FsbGV0Q29ubmVjdGlvbihuZWFyLCBcIk5FQVItbWVldHVwc1wiKTtcbn07XG5cbi8vTG9hZGVkIGFmdGVyIHRoZSBiZWluZyBzZXJ2ZXIgdG8gdGhlIGNsaWVudFxuLy9EdWUgdG8ga2V5c3RvcmUgbmVlZGluZyBhY2Nlc3MgdG8gdGhlIHdpbmRvdyBvYmplY3RcbmV4cG9ydCBsZXQgd2FsbGV0ID0gbnVsbDtcbmV4cG9ydCBsZXQgY29udHJhY3QgPSBudWxsO1xuZXhwb3J0IGNvbnN0IHV0aWxzID0gbmVhclV0aWxzO1xuXG4vL01ldGhvZHNcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICB3YWxsZXQucmVxdWVzdFNpZ25JbihDT05UUkFDVF9JRCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICB3YWxsZXQuc2lnbk91dCgpO1xufTtcblxuXG4vL0Z1bmN0aW9uIGZvciB2aWV3IG1ldGhvZHNcbmV4cG9ydCBjb25zdCB2aWV3RnVuY3Rpb24gPSBhc3luYyAoZnVuY3Rpb25OYW1lLCBhcmdzID0ge30pID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0XG4gICAgLmFjY291bnQoKVxuICAgIC52aWV3RnVuY3Rpb24oQ09OVFJBQ1RfSUQsIGZ1bmN0aW9uTmFtZSwgYXJncyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vRnVuY3Rpb24gZm9yIGNhbGwgbWV0aG9kXG5leHBvcnQgY29uc3QgY2FsbEZ1bmN0aW9uID0gYXN5bmMgKGZ1bmN0aW9uTmFtZSwgYXJncyA9IHt9LCBkZXBvc2l0ID0gXCIwXCIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LmFjY291bnQoKS5mdW5jdGlvbkNhbGwoe1xuICAgIGNvbnRyYWN0SWQ6IENPTlRSQUNUX0lELFxuICAgIG1ldGhvZE5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICBhcmdzOiBhcmdzLFxuICAgIGF0dGFjaGVkRGVwb3NpdDogdXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudChkZXBvc2l0KSxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vZm9yIGFjY291bnQgYmFsYW5jZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjY291bnRCYWxhbmNlKCkge1xuICByZXR1cm4gZm9ybWF0TmVhckFtb3VudCgoYXdhaXQgd2luZG93LndhbGxldENvbm5lY3Rpb24uYWNjb3VudCgpLmdldEFjY291bnRCYWxhbmNlKCkpLnRvdGFsLCAyKTtcbn0iXSwibmFtZXMiOlsia2V5U3RvcmVzIiwiTmVhciIsIldhbGxldENvbm5lY3Rpb24iLCJ1dGlscyIsIm5lYXJVdGlscyIsIkNPTlRSQUNUX0lEIiwiaW5pdGlhbGl6ZUNvbnRyYWN0IiwibmVhciIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsIndhbGxldCIsImNvbnRyYWN0IiwibG9naW4iLCJyZXF1ZXN0U2lnbkluIiwibG9nb3V0Iiwic2lnbk91dCIsInZpZXdGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJyZXN1bHQiLCJhY2NvdW50IiwiY2FsbEZ1bmN0aW9uIiwiZGVwb3NpdCIsImZ1bmN0aW9uQ2FsbCIsImNvbnRyYWN0SWQiLCJtZXRob2ROYW1lIiwiYXR0YWNoZWREZXBvc2l0IiwiZm9ybWF0IiwicGFyc2VOZWFyQW1vdW50IiwiYWNjb3VudEJhbGFuY2UiLCJmb3JtYXROZWFyQW1vdW50Iiwid2luZG93Iiwid2FsbGV0Q29ubmVjdGlvbiIsImdldEFjY291bnRCYWxhbmNlIiwidG90YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/near.js\n");

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