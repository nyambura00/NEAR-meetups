module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fontsource/inter/index.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/inter/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9pbnRlci9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@fontsource/inter/index.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"react-spinners/ClipLoader\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { setup } from 'twind';\n// import { AppProvider } from '../components/AppContext';\n// import twindConfig from '../twind.config';\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true); //Loading the NEAR API and setting up the wallet and contract\n  //At the start of the app\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(() => {\n    Object(_utils_near__WEBPACK_IMPORTED_MODULE_3__[\"initializeContract\"])();\n    setIsLoading(false);\n  }, []);\n  const AnyComponent = Component;\n  return isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"center-div\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      color: \"#000\",\n      loading: true,\n      size: 50\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 6\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AnyComponent, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsaXplQ29udHJhY3QiLCJBbnlDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUMsQ0FEaUQsQ0FHakQ7QUFDQTs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLDBFQUFrQjtBQUNsQkgsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsUUFBTUksWUFBWSxHQUFHUCxTQUFyQjtBQUVBLFNBQU9FLFNBQVMsZ0JBQ2I7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNHLHFFQUFDLGdFQUFEO0FBQVksV0FBSyxFQUFFLE1BQW5CO0FBQTJCLGFBQU8sRUFBRSxJQUFwQztBQUEwQyxVQUFJLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEYSxnQkFJZCxxRUFBQyxZQUFELG9CQUFrQkQsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpGO0FBTUQ7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9pbnRlcic7XG5cbi8vIGltcG9ydCB7IHNldHVwIH0gZnJvbSAndHdpbmQnO1xuLy8gaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRleHQnO1xuLy8gaW1wb3J0IHR3aW5kQ29uZmlnIGZyb20gJy4uL3R3aW5kLmNvbmZpZyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVDb250cmFjdCB9IGZyb20gJy4uL3V0aWxzL25lYXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlclwiO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vTG9hZGluZyB0aGUgTkVBUiBBUEkgYW5kIHNldHRpbmcgdXAgdGhlIHdhbGxldCBhbmQgY29udHJhY3RcbiAgLy9BdCB0aGUgc3RhcnQgb2YgdGhlIGFwcFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWxpemVDb250cmFjdCgpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBBbnlDb21wb25lbnQgPSBDb21wb25lbnQgYXMgYW55O1xuXG4gIHJldHVybiBpc0xvYWRpbmcgPyBcbiAgICAoPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItZGl2XCI+XG4gICAgICAgIDxDbGlwTG9hZGVyIGNvbG9yPXtcIiMwMDBcIn0gbG9hZGluZz17dHJ1ZX0gc2l6ZT17NTB9IC8+XG4gICAgPC9kaXY+KSA6IChcbiAgICA8QW55Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global.css\n");

/***/ }),

/***/ "./utils/near.js":
/*!***********************!*\
  !*** ./utils/near.js ***!
  \***********************/
/*! exports provided: CONTRACT_ID, initializeContract, wallet, contract, utils, login, logout, viewFunction, callFunction, accountBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONTRACT_ID\", function() { return CONTRACT_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeContract\", function() { return initializeContract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wallet\", function() { return wallet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contract\", function() { return contract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewFunction\", function() { return viewFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callFunction\", function() { return callFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accountBalance\", function() { return accountBalance; });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CONTRACT_ID = \"dev-1648751639070-78408703513675\";\nconst initializeContract = () => {\n  //Testnet config\n  const near = new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"Near\"]({\n    networkId: \"testnet\",\n    keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"keyStores\"].BrowserLocalStorageKeyStore(),\n    nodeUrl: \"https://rpc.testnet.near.org\",\n    walletUrl: \"https://wallet.testnet.near.org\"\n  }); //Wallet init\n\n  wallet = new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"WalletConnection\"](near, \"NEAR-meetups\");\n}; //Loaded after the being server to the client\n//Due to keystore needing access to the window object\n\nlet wallet = null;\nlet contract = null;\nconst utils = near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"utils\"]; //Methods\n\nconst login = () => {\n  wallet.requestSignIn(CONTRACT_ID);\n};\nconst logout = () => {\n  wallet.signOut();\n}; //Function for view methods\n\nconst viewFunction = async (functionName, args = {}) => {\n  const result = await wallet.account().viewFunction(CONTRACT_ID, functionName, args);\n  return result;\n}; //Function for call method\n\nconst callFunction = async (functionName, args = {}, deposit = \"0\") => {\n  const result = await wallet.account().functionCall({\n    contractId: CONTRACT_ID,\n    methodName: functionName,\n    args: args,\n    attachedDeposit: utils.format.parseNearAmount(deposit)\n  });\n  return result;\n}; //for account balance\n\nasync function accountBalance() {\n  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9uZWFyLmpzPzYxYjgiXSwibmFtZXMiOlsiQ09OVFJBQ1RfSUQiLCJpbml0aWFsaXplQ29udHJhY3QiLCJuZWFyIiwiTmVhciIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsIndhbGxldCIsIldhbGxldENvbm5lY3Rpb24iLCJjb250cmFjdCIsInV0aWxzIiwibmVhclV0aWxzIiwibG9naW4iLCJyZXF1ZXN0U2lnbkluIiwibG9nb3V0Iiwic2lnbk91dCIsInZpZXdGdW5jdGlvbiIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJyZXN1bHQiLCJhY2NvdW50IiwiY2FsbEZ1bmN0aW9uIiwiZGVwb3NpdCIsImZ1bmN0aW9uQ2FsbCIsImNvbnRyYWN0SWQiLCJtZXRob2ROYW1lIiwiYXR0YWNoZWREZXBvc2l0IiwiZm9ybWF0IiwicGFyc2VOZWFyQW1vdW50IiwiYWNjb3VudEJhbGFuY2UiLCJmb3JtYXROZWFyQW1vdW50Iiwid2luZG93Iiwid2FsbGV0Q29ubmVjdGlvbiIsImdldEFjY291bnRCYWxhbmNlIiwidG90YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRTyxNQUFNQSxXQUFXLEdBQUcsa0NBQXBCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtBQUN0QztBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJQyxnREFBSixDQUFTO0FBQ3BCQyxhQUFTLEVBQUUsU0FEUztBQUVsQkMsWUFBUSxFQUFFLElBQUlDLHFEQUFTLENBQUNDLDJCQUFkLEVBRlE7QUFHbEJDLFdBQU8sRUFBRSw4QkFIUztBQUlwQkMsYUFBUyxFQUFFO0FBSlMsR0FBVCxDQUFiLENBRnNDLENBU3RDOztBQUNBQyxRQUFNLEdBQUcsSUFBSUMsNERBQUosQ0FBcUJULElBQXJCLEVBQTJCLGNBQTNCLENBQVQ7QUFDRCxDQVhNLEMsQ0FhUDtBQUNBOztBQUNPLElBQUlRLE1BQU0sR0FBRyxJQUFiO0FBQ0EsSUFBSUUsUUFBUSxHQUFHLElBQWY7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGlEQUFkLEMsQ0FFUDs7QUFFTyxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUN6QkwsUUFBTSxDQUFDTSxhQUFQLENBQXFCaEIsV0FBckI7QUFDRCxDQUZNO0FBSUEsTUFBTWlCLE1BQU0sR0FBRyxNQUFNO0FBQzFCUCxRQUFNLENBQUNRLE9BQVA7QUFDRCxDQUZNLEMsQ0FLUDs7QUFDTyxNQUFNQyxZQUFZLEdBQUcsT0FBT0MsWUFBUCxFQUFxQkMsSUFBSSxHQUFHLEVBQTVCLEtBQW1DO0FBQzdELFFBQU1DLE1BQU0sR0FBRyxNQUFNWixNQUFNLENBQ3hCYSxPQURrQixHQUVsQkosWUFGa0IsQ0FFTG5CLFdBRkssRUFFUW9CLFlBRlIsRUFFc0JDLElBRnRCLENBQXJCO0FBSUEsU0FBT0MsTUFBUDtBQUNELENBTk0sQyxDQVFQOztBQUNPLE1BQU1FLFlBQVksR0FBRyxPQUFPSixZQUFQLEVBQXFCQyxJQUFJLEdBQUcsRUFBNUIsRUFBZ0NJLE9BQU8sR0FBRyxHQUExQyxLQUFrRDtBQUM1RSxRQUFNSCxNQUFNLEdBQUcsTUFBTVosTUFBTSxDQUFDYSxPQUFQLEdBQWlCRyxZQUFqQixDQUE4QjtBQUNqREMsY0FBVSxFQUFFM0IsV0FEcUM7QUFFakQ0QixjQUFVLEVBQUVSLFlBRnFDO0FBR2pEQyxRQUFJLEVBQUVBLElBSDJDO0FBSWpEUSxtQkFBZSxFQUFFaEIsS0FBSyxDQUFDaUIsTUFBTixDQUFhQyxlQUFiLENBQTZCTixPQUE3QjtBQUpnQyxHQUE5QixDQUFyQjtBQU1BLFNBQU9ILE1BQVA7QUFDRCxDQVJNLEMsQ0FVUDs7QUFDTyxlQUFlVSxjQUFmLEdBQWdDO0FBQ3JDLFNBQU9DLGdCQUFnQixDQUFDLENBQUMsTUFBTUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlosT0FBeEIsR0FBa0NhLGlCQUFsQyxFQUFQLEVBQThEQyxLQUEvRCxFQUFzRSxDQUF0RSxDQUF2QjtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvbmVhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGtleVN0b3JlcyxcbiAgTmVhcixcbiAgV2FsbGV0Q29ubmVjdGlvbixcbiAgdXRpbHMgYXMgbmVhclV0aWxzLFxufSBmcm9tIFwibmVhci1hcGktanNcIjtcblxuXG5leHBvcnQgY29uc3QgQ09OVFJBQ1RfSUQgPSBcImRldi0xNjQ4NzUxNjM5MDcwLTc4NDA4NzAzNTEzNjc1XCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQ29udHJhY3QgPSAoKSA9PiB7XG4gIC8vVGVzdG5ldCBjb25maWdcbiAgY29uc3QgbmVhciA9IG5ldyBOZWFyKHtcbiAgICBuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuICAgICAga2V5U3RvcmU6IG5ldyBrZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG4gICAgICBub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICB3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICB9KTtcblxuICAvL1dhbGxldCBpbml0XG4gIHdhbGxldCA9IG5ldyBXYWxsZXRDb25uZWN0aW9uKG5lYXIsIFwiTkVBUi1tZWV0dXBzXCIpO1xufTtcblxuLy9Mb2FkZWQgYWZ0ZXIgdGhlIGJlaW5nIHNlcnZlciB0byB0aGUgY2xpZW50XG4vL0R1ZSB0byBrZXlzdG9yZSBuZWVkaW5nIGFjY2VzcyB0byB0aGUgd2luZG93IG9iamVjdFxuZXhwb3J0IGxldCB3YWxsZXQgPSBudWxsO1xuZXhwb3J0IGxldCBjb250cmFjdCA9IG51bGw7XG5leHBvcnQgY29uc3QgdXRpbHMgPSBuZWFyVXRpbHM7XG5cbi8vTWV0aG9kc1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIHdhbGxldC5yZXF1ZXN0U2lnbkluKENPTlRSQUNUX0lEKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIHdhbGxldC5zaWduT3V0KCk7XG59O1xuXG5cbi8vRnVuY3Rpb24gZm9yIHZpZXcgbWV0aG9kc1xuZXhwb3J0IGNvbnN0IHZpZXdGdW5jdGlvbiA9IGFzeW5jIChmdW5jdGlvbk5hbWUsIGFyZ3MgPSB7fSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXRcbiAgICAuYWNjb3VudCgpXG4gICAgLnZpZXdGdW5jdGlvbihDT05UUkFDVF9JRCwgZnVuY3Rpb25OYW1lLCBhcmdzKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy9GdW5jdGlvbiBmb3IgY2FsbCBtZXRob2RcbmV4cG9ydCBjb25zdCBjYWxsRnVuY3Rpb24gPSBhc3luYyAoZnVuY3Rpb25OYW1lLCBhcmdzID0ge30sIGRlcG9zaXQgPSBcIjBcIikgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXQuYWNjb3VudCgpLmZ1bmN0aW9uQ2FsbCh7XG4gICAgY29udHJhY3RJZDogQ09OVFJBQ1RfSUQsXG4gICAgbWV0aG9kTmFtZTogZnVuY3Rpb25OYW1lLFxuICAgIGFyZ3M6IGFyZ3MsXG4gICAgYXR0YWNoZWREZXBvc2l0OiB1dGlscy5mb3JtYXQucGFyc2VOZWFyQW1vdW50KGRlcG9zaXQpLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy9mb3IgYWNjb3VudCBiYWxhbmNlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjb3VudEJhbGFuY2UoKSB7XG4gIHJldHVybiBmb3JtYXROZWFyQW1vdW50KChhd2FpdCB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5hY2NvdW50KCkuZ2V0QWNjb3VudEJhbGFuY2UoKSkudG90YWwsIDIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/near.js\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "near-api-js":
/*!******************************!*\
  !*** external "near-api-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"near-api-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZWFyLWFwaS1qc1wiP2M3MWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmVhci1hcGktanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZWFyLWFwaS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///near-api-js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-spinners/ClipLoader":
/*!********************************************!*\
  !*** external "react-spinners/ClipLoader" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spinners/ClipLoader\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyXCI/MWE0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spinners/ClipLoader\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });