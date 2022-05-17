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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTRACT_ID\": () => (/* binding */ CONTRACT_ID),\n/* harmony export */   \"accountBalance\": () => (/* binding */ accountBalance),\n/* harmony export */   \"accountId\": () => (/* binding */ accountId),\n/* harmony export */   \"addEvent\": () => (/* binding */ addEvent),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"near\": () => (/* binding */ near),\n/* harmony export */   \"viewFunction\": () => (/* binding */ viewFunction),\n/* harmony export */   \"wallet\": () => (/* binding */ wallet)\n/* harmony export */ });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CONTRACT_ID = \"dev-1648751639070-78408703513675\";\nconst near = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.Near({\n  networkId: \"testnet\",\n  keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_0__.keyStores.BrowserLocalStorageKeyStore(),\n  nodeUrl: \"https://rpc.testnet.near.org\",\n  walletUrl: \"https://wallet.testnet.near.org\"\n});\nconst wallet = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.WalletConnection(near, \"NEAR-meetups\");\nconst login = () => {\n  wallet.requestSignIn(CONTRACT_ID);\n};\nconst logout = () => {\n  wallet.signOut();\n  window.location.reload();\n};\nconst accountId = wallet.getAccountId();\nconst viewFunction = async (functionName, args = {}) => {\n  const result = await wallet.account().viewFunction(CONTRACT_ID, functionName, args);\n  return result;\n};\nconst addEvent = async (functionName, args = {}, deposit = \"0\") => {\n  const result = await wallet.account().functionCall({\n    contractId: CONTRACT_ID,\n    methodName: functionName,\n    args: args,\n    attachedDeposit: utils.format.parseNearAmount(deposit)\n  });\n  return result;\n};\nasync function accountBalance() {\n  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9uZWFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTyxNQUFNSyxXQUFXLEdBQUcsa0NBQXBCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlMLDZDQUFKLENBQVM7QUFDM0JNLEVBQUFBLFNBQVMsRUFBRSxTQURnQjtBQUUzQkMsRUFBQUEsUUFBUSxFQUFFLElBQUlSLDhFQUFKLEVBRmlCO0FBRzNCVSxFQUFBQSxPQUFPLEVBQUUsOEJBSGtCO0FBSTNCQyxFQUFBQSxTQUFTLEVBQUU7QUFKZ0IsQ0FBVCxDQUFiO0FBT0EsTUFBTUMsTUFBTSxHQUFHLElBQUlWLHlEQUFKLENBQXFCSSxJQUFyQixFQUEyQixjQUEzQixDQUFmO0FBRUEsTUFBTU8sS0FBSyxHQUFHLE1BQU07QUFDekJELEVBQUFBLE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQlQsV0FBckI7QUFDRCxDQUZNO0FBSUEsTUFBTVUsTUFBTSxHQUFHLE1BQU07QUFDMUJILEVBQUFBLE1BQU0sQ0FBQ0ksT0FBUDtBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsQ0FITTtBQUtBLE1BQU1DLFNBQVMsR0FBR1IsTUFBTSxDQUFDUyxZQUFQLEVBQWxCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLE9BQU9DLFlBQVAsRUFBcUJDLElBQUksR0FBRyxFQUE1QixLQUFtQztBQUM3RCxRQUFNQyxNQUFNLEdBQUcsTUFBTWIsTUFBTSxDQUN4QmMsT0FEa0IsR0FFbEJKLFlBRmtCLENBRUxqQixXQUZLLEVBRVFrQixZQUZSLEVBRXNCQyxJQUZ0QixDQUFyQjtBQUdBLFNBQU9DLE1BQVA7QUFDRCxDQUxNO0FBT0EsTUFBTUUsUUFBUSxHQUFHLE9BQU9KLFlBQVAsRUFBcUJDLElBQUksR0FBRyxFQUE1QixFQUFnQ0ksT0FBTyxHQUFHLEdBQTFDLEtBQWtEO0FBQ3hFLFFBQU1ILE1BQU0sR0FBRyxNQUFNYixNQUFNLENBQUNjLE9BQVAsR0FBaUJHLFlBQWpCLENBQThCO0FBQ2pEQyxJQUFBQSxVQUFVLEVBQUV6QixXQURxQztBQUVqRDBCLElBQUFBLFVBQVUsRUFBRVIsWUFGcUM7QUFHakRDLElBQUFBLElBQUksRUFBRUEsSUFIMkM7QUFJakRRLElBQUFBLGVBQWUsRUFBRTdCLEtBQUssQ0FBQzhCLE1BQU4sQ0FBYUMsZUFBYixDQUE2Qk4sT0FBN0I7QUFKZ0MsR0FBOUIsQ0FBckI7QUFNQSxTQUFPSCxNQUFQO0FBQ0QsQ0FSTTtBQVVBLGVBQWVVLGNBQWYsR0FBZ0M7QUFDckMsU0FBT0MsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNbkIsTUFBTSxDQUFDb0IsZ0JBQVAsQ0FBd0JYLE9BQXhCLEdBQWtDWSxpQkFBbEMsRUFBUCxFQUE4REMsS0FBL0QsRUFBc0UsQ0FBdEUsQ0FBdkI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL3V0aWxzL25lYXIuanM/NGM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBrZXlTdG9yZXMsXG4gIE5lYXIsXG4gIFdhbGxldENvbm5lY3Rpb24sXG4gIHV0aWxzIGFzIG5lYXJVdGlscyxcbn0gZnJvbSBcIm5lYXItYXBpLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UUkFDVF9JRCA9IFwiZGV2LTE2NDg3NTE2MzkwNzAtNzg0MDg3MDM1MTM2NzVcIjtcblxuZXhwb3J0IGNvbnN0IG5lYXIgPSBuZXcgTmVhcih7XG4gIG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG4gIGtleVN0b3JlOiBuZXcga2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuICBub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcbiAgd2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcbn0pO1xuXG5leHBvcnQgY29uc3Qgd2FsbGV0ID0gbmV3IFdhbGxldENvbm5lY3Rpb24obmVhciwgXCJORUFSLW1lZXR1cHNcIik7XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgd2FsbGV0LnJlcXVlc3RTaWduSW4oQ09OVFJBQ1RfSUQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgd2FsbGV0LnNpZ25PdXQoKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRJZCA9IHdhbGxldC5nZXRBY2NvdW50SWQoKTtcblxuZXhwb3J0IGNvbnN0IHZpZXdGdW5jdGlvbiA9IGFzeW5jIChmdW5jdGlvbk5hbWUsIGFyZ3MgPSB7fSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXRcbiAgICAuYWNjb3VudCgpXG4gICAgLnZpZXdGdW5jdGlvbihDT05UUkFDVF9JRCwgZnVuY3Rpb25OYW1lLCBhcmdzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFdmVudCA9IGFzeW5jIChmdW5jdGlvbk5hbWUsIGFyZ3MgPSB7fSwgZGVwb3NpdCA9IFwiMFwiKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5hY2NvdW50KCkuZnVuY3Rpb25DYWxsKHtcbiAgICBjb250cmFjdElkOiBDT05UUkFDVF9JRCxcbiAgICBtZXRob2ROYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgYXJnczogYXJncyxcbiAgICBhdHRhY2hlZERlcG9zaXQ6IHV0aWxzLmZvcm1hdC5wYXJzZU5lYXJBbW91bnQoZGVwb3NpdCksXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjb3VudEJhbGFuY2UoKSB7XG4gIHJldHVybiBmb3JtYXROZWFyQW1vdW50KChhd2FpdCB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5hY2NvdW50KCkuZ2V0QWNjb3VudEJhbGFuY2UoKSkudG90YWwsIDIpO1xufSJdLCJuYW1lcyI6WyJrZXlTdG9yZXMiLCJOZWFyIiwiV2FsbGV0Q29ubmVjdGlvbiIsInV0aWxzIiwibmVhclV0aWxzIiwiQ09OVFJBQ1RfSUQiLCJuZWFyIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwid2FsbGV0IiwibG9naW4iLCJyZXF1ZXN0U2lnbkluIiwibG9nb3V0Iiwic2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWNjb3VudElkIiwiZ2V0QWNjb3VudElkIiwidmlld0Z1bmN0aW9uIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsInJlc3VsdCIsImFjY291bnQiLCJhZGRFdmVudCIsImRlcG9zaXQiLCJmdW5jdGlvbkNhbGwiLCJjb250cmFjdElkIiwibWV0aG9kTmFtZSIsImF0dGFjaGVkRGVwb3NpdCIsImZvcm1hdCIsInBhcnNlTmVhckFtb3VudCIsImFjY291bnRCYWxhbmNlIiwiZm9ybWF0TmVhckFtb3VudCIsIndhbGxldENvbm5lY3Rpb24iLCJnZXRBY2NvdW50QmFsYW5jZSIsInRvdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/near.js\n");

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