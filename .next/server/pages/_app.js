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

/***/ "./components/AppContext.tsx":
/*!***********************************!*\
  !*** ./components/AppContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/components/AppContext.tsx\";\n\n\n\n;\nconst AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst AppWrapper = ({\n  children\n}) => {\n  const {\n    0: account,\n    1: setaccount\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const {\n    0: contract,\n    1: setContract\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const {\n    0: balance,\n    1: setBalance\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"0\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    var _window$walletConnect;\n\n    setaccount((_window$walletConnect = window.walletConnection) === null || _window$walletConnect === void 0 ? void 0 : _window$walletConnect.account());\n    setContract(window.contract);\n  }, []);\n  const getBalance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {\n    if (account !== null && account !== void 0 && account.accountId) {\n      setBalance(await (0,_utils_near__WEBPACK_IMPORTED_MODULE_1__.accountBalance)());\n    }\n  }, [account]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getBalance();\n  }, [getBalance]);\n  const state = {\n    account,\n    contract,\n    balance\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AppContext.Provider, {\n    value: state,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined);\n};\nfunction useAppContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFbUU7QUFTbkUsTUFBTU8sVUFBVSxnQkFBR04sb0RBQWEsQ0FBUSxFQUFSLENBQWhDO0FBRU8sTUFBTU8sVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWlEO0FBQ3pFLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qk4sK0NBQVEsQ0FBTSxJQUFOLENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCUiwrQ0FBUSxDQUFNLElBQU4sQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JWLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFBQTs7QUFDZE8sSUFBQUEsVUFBVSwwQkFBQ0ssTUFBTSxDQUFDQyxnQkFBUiwwREFBQyxzQkFBeUJQLE9BQXpCLEVBQUQsQ0FBVjtBQUNBRyxJQUFBQSxXQUFXLENBQUNHLE1BQU0sQ0FBQ0osUUFBUixDQUFYO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQU1BLFFBQU1NLFVBQVUsR0FBR2hCLGtEQUFXLENBQUMsWUFBWTtBQUN6QyxRQUFJUSxPQUFKLGFBQUlBLE9BQUosZUFBSUEsT0FBTyxDQUFFUyxTQUFiLEVBQXdCO0FBQ3RCSixNQUFBQSxVQUFVLENBQUMsTUFBTVQsMkRBQWMsRUFBckIsQ0FBVjtBQUNEO0FBQ0YsR0FKNkIsRUFJM0IsQ0FBQ0ksT0FBRCxDQUoyQixDQUE5QjtBQUtBTixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZGMsSUFBQUEsVUFBVTtBQUNYLEdBRlEsRUFFTixDQUFDQSxVQUFELENBRk0sQ0FBVDtBQUlBLFFBQU1FLEtBQVksR0FBRztBQUNuQlYsSUFBQUEsT0FEbUI7QUFFbkJFLElBQUFBLFFBRm1CO0FBR25CRSxJQUFBQTtBQUhtQixHQUFyQjtBQUtBLHNCQUNFLDhEQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRU0sS0FBNUI7QUFBQSxjQUNHWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBOUJNO0FBZ0NBLFNBQVNZLGFBQVQsR0FBeUI7QUFDOUIsU0FBT2xCLGlEQUFVLENBQUNJLFVBQUQsQ0FBakI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL2NvbXBvbmVudHMvQXBwQ29udGV4dC50c3g/NWE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCwgV2FsbGV0Q29ubmVjdGlvbiB9IGZyb20gJ25lYXItYXBpLWpzJztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBSZWFjdEVsZW1lbnQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWNjb3VudEJhbGFuY2UgfSBmcm9tICcuLi91dGlscy9uZWFyJztcblxuaW50ZXJmYWNlIFN0YXRlIHsgYWNjb3VudD86IGFueTsgY29udHJhY3Q/OiBhbnk7IGJhbGFuY2U/OiBzdHJpbmcgfTtcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IHtcbiAgd2FsbGV0Q29ubmVjdGlvbjogV2FsbGV0Q29ubmVjdGlvbjtcbiAgYWNjb3VudElkOiBhbnk7XG4gIGNvbnRyYWN0OiBDb250cmFjdDtcbiAgbG9jYXRpb246IGFueTtcbn07XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0YXRlPih7fSk7XG5cbmV4cG9ydCBjb25zdCBBcHBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCIwXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0YWNjb3VudCh3aW5kb3cud2FsbGV0Q29ubmVjdGlvbj8uYWNjb3VudCgpKVxuICAgIHNldENvbnRyYWN0KHdpbmRvdy5jb250cmFjdClcbiAgfSwgW10pXG5cblxuICBjb25zdCBnZXRCYWxhbmNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChhY2NvdW50Py5hY2NvdW50SWQpIHtcbiAgICAgIHNldEJhbGFuY2UoYXdhaXQgYWNjb3VudEJhbGFuY2UoKSk7XG4gICAgfVxuICB9LCBbYWNjb3VudF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJhbGFuY2UoKTtcbiAgfSwgW2dldEJhbGFuY2VdKTtcblxuICBjb25zdCBzdGF0ZTogU3RhdGUgPSB7XG4gICAgYWNjb3VudCxcbiAgICBjb250cmFjdCxcbiAgICBiYWxhbmNlXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFjY291bnRCYWxhbmNlIiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsImFjY291bnQiLCJzZXRhY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwid2luZG93Iiwid2FsbGV0Q29ubmVjdGlvbiIsImdldEJhbGFuY2UiLCJhY2NvdW50SWQiLCJzdGF0ZSIsInVzZUFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: nearLoaded,\n    1: setnearLoaded\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    window.nearInitPromise = (0,_utils_near__WEBPACK_IMPORTED_MODULE_1__.initializeContract)().then(() => {\n      setnearLoaded(true);\n    }).catch(err => {\n      console.log(err);\n    });\n  }, []);\n  return nearLoaded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppWrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 36\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 24\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFJQSxTQUFTSSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDakQsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RRLElBQUFBLE1BQU0sQ0FBQ0MsZUFBUCxHQUF5QlYsK0RBQWtCLEdBQUdXLElBQXJCLENBQTBCLE1BQU07QUFDdkRILE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxLQUZ3QixFQUV0QkksS0FGc0IsQ0FFZkMsR0FBRCxJQUFTO0FBQUVDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQWtCLEtBRmIsQ0FBekI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FBT04sVUFBVSxpQkFBSSw4REFBQyw4REFBRDtBQUFBLDJCQUFZLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBckI7QUFDRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IGluaXRpYWxpemVDb250cmFjdCB9IGZyb20gXCIuLi91dGlscy9uZWFyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGV4dCc7XG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW25lYXJMb2FkZWQsIHNldG5lYXJMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubmVhckluaXRQcm9taXNlID0gaW5pdGlhbGl6ZUNvbnRyYWN0KCkudGhlbigoKSA9PiB7XG4gICAgICBzZXRuZWFyTG9hZGVkKHRydWUpXG4gICAgfSkuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhlcnIpIH0pO1xuICB9LCBbXSlcblxuICByZXR1cm4gbmVhckxvYWRlZCAmJiA8QXBwV3JhcHBlcj48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9BcHBXcmFwcGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUNvbnRyYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuZWFyTG9hZGVkIiwic2V0bmVhckxvYWRlZCIsIndpbmRvdyIsIm5lYXJJbml0UHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line no-template-curly-in-string\nconst CONTRACT_NAME = process.env.CONTRACT_NAME || 'nyambura00.testnet';\n\nfunction environment(env) {\n  switch (env) {\n    case 'mainnet':\n      return {\n        networkId: 'mainnet',\n        nodeUrl: 'https://rpc.mainnet.near.org',\n        contractName: CONTRACT_NAME,\n        walletUrl: 'https://wallet.near.org',\n        helperUrl: 'https://helper.mainnet.near.org',\n        explorerUrl: 'https://explorer.mainnet.near.org'\n      };\n\n    case 'testnet':\n      return {\n        networkId: 'testnet',\n        nodeUrl: 'https://rpc.testnet.near.org',\n        contractName: CONTRACT_NAME,\n        walletUrl: 'https://wallet.testnet.near.org',\n        helperUrl: 'https://helper.testnet.near.org',\n        explorerUrl: 'https://explorer.testnet.near.org'\n      };\n\n    default:\n      throw Error(`Unknown environment '${env}'.`);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWixJQUE2QixvQkFBbkQ7O0FBRUEsU0FBU0csV0FBVCxDQUFxQkQsR0FBckIsRUFBMEI7QUFDeEIsVUFBUUEsR0FBUjtBQUNFLFNBQUssU0FBTDtBQUNFLGFBQU87QUFDTEUsUUFBQUEsU0FBUyxFQUFFLFNBRE47QUFFTEMsUUFBQUEsT0FBTyxFQUFFLDhCQUZKO0FBR0xDLFFBQUFBLFlBQVksRUFBRU4sYUFIVDtBQUlMTyxRQUFBQSxTQUFTLEVBQUUseUJBSk47QUFLTEMsUUFBQUEsU0FBUyxFQUFFLGlDQUxOO0FBTUxDLFFBQUFBLFdBQVcsRUFBRTtBQU5SLE9BQVA7O0FBUUYsU0FBSyxTQUFMO0FBQ0UsYUFBTztBQUNMTCxRQUFBQSxTQUFTLEVBQUUsU0FETjtBQUVMQyxRQUFBQSxPQUFPLEVBQUUsOEJBRko7QUFHTEMsUUFBQUEsWUFBWSxFQUFFTixhQUhUO0FBSUxPLFFBQUFBLFNBQVMsRUFBRSxpQ0FKTjtBQUtMQyxRQUFBQSxTQUFTLEVBQUUsaUNBTE47QUFNTEMsUUFBQUEsV0FBVyxFQUFFO0FBTlIsT0FBUDs7QUFRRjtBQUNFLFlBQU1DLEtBQUssQ0FBRSx3QkFBdUJSLEdBQUksSUFBN0IsQ0FBWDtBQXBCSjtBQXNCRDs7QUFFRCxpRUFBZUMsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXItbWVldHVwcy8uL3V0aWxzL2NvbmZpZy5qcz83ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmdcbmNvbnN0IENPTlRSQUNUX05BTUUgPSBwcm9jZXNzLmVudi5DT05UUkFDVF9OQU1FIHx8ICdueWFtYnVyYTAwLnRlc3RuZXQnO1xuXG5mdW5jdGlvbiBlbnZpcm9ubWVudChlbnYpIHtcbiAgc3dpdGNoIChlbnYpIHtcbiAgICBjYXNlICdtYWlubmV0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ldHdvcmtJZDogJ21haW5uZXQnLFxuICAgICAgICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMubWFpbm5ldC5uZWFyLm9yZycsXG4gICAgICAgIGNvbnRyYWN0TmFtZTogQ09OVFJBQ1RfTkFNRSxcbiAgICAgICAgd2FsbGV0VXJsOiAnaHR0cHM6Ly93YWxsZXQubmVhci5vcmcnLFxuICAgICAgICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci5tYWlubmV0Lm5lYXIub3JnJyxcbiAgICAgICAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLm1haW5uZXQubmVhci5vcmcnLFxuICAgICAgfTtcbiAgICBjYXNlICd0ZXN0bmV0JzogXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXR3b3JrSWQ6ICd0ZXN0bmV0JyxcbiAgICAgICAgbm9kZVVybDogJ2h0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmcnLFxuICAgICAgICBjb250cmFjdE5hbWU6IENPTlRSQUNUX05BTUUsXG4gICAgICAgIHdhbGxldFVybDogJ2h0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmcnLFxuICAgICAgICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICAgICAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmcnLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYFVua25vd24gZW52aXJvbm1lbnQgJyR7ZW52fScuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iXSwibmFtZXMiOlsiQ09OVFJBQ1RfTkFNRSIsInByb2Nlc3MiLCJlbnYiLCJlbnZpcm9ubWVudCIsIm5ldHdvcmtJZCIsIm5vZGVVcmwiLCJjb250cmFjdE5hbWUiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/config.js\n");

/***/ }),

/***/ "./utils/near.ts":
/*!***********************!*\
  !*** ./utils/near.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accountBalance\": () => (/* binding */ accountBalance),\n/* harmony export */   \"getAccountId\": () => (/* binding */ getAccountId),\n/* harmony export */   \"initializeContract\": () => (/* binding */ initializeContract),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./utils/config.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js/lib/utils/format */ \"near-api-js/lib/utils/format\");\n/* harmony import */ var near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst nearEnv = (0,_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"testnet\");\nasync function initializeContract() {\n  const near = await (0,near_api_js__WEBPACK_IMPORTED_MODULE_1__.connect)(Object.assign({\n    deps: {\n      keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_1__.keyStores.BrowserLocalStorageKeyStore()\n    },\n    headers: {}\n  }, nearEnv));\n  window.walletConnection = new near_api_js__WEBPACK_IMPORTED_MODULE_1__.WalletConnection(near, null);\n  window.accountId = window.walletConnection.getAccountId();\n  window.contract = new near_api_js__WEBPACK_IMPORTED_MODULE_1__.Contract(window.walletConnection.account(), nearEnv.contractName, {\n    viewMethods: [\"getEvent\", \"getEvents\"],\n    changeMethods: [\"addEvent\", \"editEvent\", \"deleteEvent\"]\n  });\n}\nasync function accountBalance() {\n  return (0,near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatNearAmount)((await window.walletConnection.account().getAccountBalance()).total, 2);\n}\nasync function getAccountId() {\n  return window.walletConnection.getAccountId();\n}\nfunction login() {\n  window.walletConnection.requestSignIn(nearEnv.contractName);\n}\nfunction logout() {\n  window.walletConnection.signOut();\n  window.location.reload();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9uZWFyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxPQUFPLEdBQUdOLG1EQUFXLENBQUMsU0FBRCxDQUEzQjtBQVNPLGVBQWVPLGtCQUFmLEdBQW9DO0FBQ3pDLFFBQU1DLElBQUksR0FBRyxNQUFNUCxvREFBTyxDQUN4QlEsTUFBTSxDQUFDQyxNQUFQLENBQ0U7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFJVCw4RUFBSjtBQUFaLEtBQVI7QUFBbUVXLElBQUFBLE9BQU8sRUFBRTtBQUE1RSxHQURGLEVBRUVSLE9BRkYsQ0FEd0IsQ0FBMUI7QUFNQVMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxHQUEwQixJQUFJWix5REFBSixDQUFxQkksSUFBckIsRUFBMkIsSUFBM0IsQ0FBMUI7QUFDQU8sRUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CRixNQUFNLENBQUNDLGdCQUFQLENBQXdCRSxZQUF4QixFQUFuQjtBQUNBSCxFQUFBQSxNQUFNLENBQUNJLFFBQVAsR0FBa0IsSUFBSWpCLGlEQUFKLENBQ2hCYSxNQUFNLENBQUNDLGdCQUFQLENBQXdCSSxPQUF4QixFQURnQixFQUVoQmQsT0FBTyxDQUFDZSxZQUZRLEVBR2hCO0FBQ0VDLElBQUFBLFdBQVcsRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLENBRGY7QUFFRUMsSUFBQUEsYUFBYSxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsYUFBMUI7QUFGakIsR0FIZ0IsQ0FBbEI7QUFRRDtBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsU0FBT25CLDhFQUFnQixDQUNyQixDQUFDLE1BQU1VLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JJLE9BQXhCLEdBQWtDSyxpQkFBbEMsRUFBUCxFQUE4REMsS0FEekMsRUFFckIsQ0FGcUIsQ0FBdkI7QUFJRDtBQUVNLGVBQWVSLFlBQWYsR0FBOEI7QUFDbkMsU0FBT0gsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QkUsWUFBeEIsRUFBUDtBQUNEO0FBRU0sU0FBU1MsS0FBVCxHQUFpQjtBQUN0QlosRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlksYUFBeEIsQ0FBc0N0QixPQUFPLENBQUNlLFlBQTlDO0FBQ0Q7QUFFTSxTQUFTUSxNQUFULEdBQWtCO0FBQ3ZCZCxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCYyxPQUF4QjtBQUNBZixFQUFBQSxNQUFNLENBQUNnQixRQUFQLENBQWdCQyxNQUFoQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVhci1tZWV0dXBzLy4vdXRpbHMvbmVhci50cz84ZjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbnZpcm9ubWVudCBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IGNvbm5lY3QsIENvbnRyYWN0LCBrZXlTdG9yZXMsIE5lYXIsIFdhbGxldENvbm5lY3Rpb24gfSBmcm9tIFwibmVhci1hcGktanNcIjtcbmltcG9ydCB7IGZvcm1hdE5lYXJBbW91bnQgfSBmcm9tIFwibmVhci1hcGktanMvbGliL3V0aWxzL2Zvcm1hdFwiO1xuXG5jb25zdCBuZWFyRW52ID0gZW52aXJvbm1lbnQoXCJ0ZXN0bmV0XCIpO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdyA6IHtcbiAgd2FsbGV0Q29ubmVjdGlvbjogV2FsbGV0Q29ubmVjdGlvbjtcbiAgYWNjb3VudElkOiBhbnk7XG4gIGNvbnRyYWN0OiBDb250cmFjdDtcbiAgbG9jYXRpb246IGFueTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplQ29udHJhY3QoKSB7XG4gIGNvbnN0IG5lYXIgPSBhd2FpdCBjb25uZWN0KFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGRlcHM6IHsga2V5U3RvcmU6IG5ldyBrZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSwgaGVhZGVyczoge30gfSxcbiAgICAgIG5lYXJFbnZcbiAgICApXG4gICk7XG4gIHdpbmRvdy53YWxsZXRDb25uZWN0aW9uID0gbmV3IFdhbGxldENvbm5lY3Rpb24obmVhciwgbnVsbCk7XG4gIHdpbmRvdy5hY2NvdW50SWQgPSB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5nZXRBY2NvdW50SWQoKTtcbiAgd2luZG93LmNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgIHdpbmRvdy53YWxsZXRDb25uZWN0aW9uLmFjY291bnQoKSxcbiAgICBuZWFyRW52LmNvbnRyYWN0TmFtZSxcbiAgICB7XG4gICAgICB2aWV3TWV0aG9kczogW1wiZ2V0RXZlbnRcIiwgXCJnZXRFdmVudHNcIl0sXG4gICAgICBjaGFuZ2VNZXRob2RzOiBbXCJhZGRFdmVudFwiLCBcImVkaXRFdmVudFwiLCBcImRlbGV0ZUV2ZW50XCJdLFxuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjY291bnRCYWxhbmNlKCkge1xuICByZXR1cm4gZm9ybWF0TmVhckFtb3VudChcbiAgICAoYXdhaXQgd2luZG93LndhbGxldENvbm5lY3Rpb24uYWNjb3VudCgpLmdldEFjY291bnRCYWxhbmNlKCkpLnRvdGFsLFxuICAgIDJcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRJZCgpIHtcbiAgcmV0dXJuIHdpbmRvdy53YWxsZXRDb25uZWN0aW9uLmdldEFjY291bnRJZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKSB7XG4gIHdpbmRvdy53YWxsZXRDb25uZWN0aW9uLnJlcXVlc3RTaWduSW4obmVhckVudi5jb250cmFjdE5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xuICB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5zaWduT3V0KCk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0iXSwibmFtZXMiOlsiZW52aXJvbm1lbnQiLCJjb25uZWN0IiwiQ29udHJhY3QiLCJrZXlTdG9yZXMiLCJXYWxsZXRDb25uZWN0aW9uIiwiZm9ybWF0TmVhckFtb3VudCIsIm5lYXJFbnYiLCJpbml0aWFsaXplQ29udHJhY3QiLCJuZWFyIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVwcyIsImtleVN0b3JlIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwiaGVhZGVycyIsIndpbmRvdyIsIndhbGxldENvbm5lY3Rpb24iLCJhY2NvdW50SWQiLCJnZXRBY2NvdW50SWQiLCJjb250cmFjdCIsImFjY291bnQiLCJjb250cmFjdE5hbWUiLCJ2aWV3TWV0aG9kcyIsImNoYW5nZU1ldGhvZHMiLCJhY2NvdW50QmFsYW5jZSIsImdldEFjY291bnRCYWxhbmNlIiwidG90YWwiLCJsb2dpbiIsInJlcXVlc3RTaWduSW4iLCJsb2dvdXQiLCJzaWduT3V0IiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/near.ts\n");

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

/***/ "near-api-js/lib/utils/format":
/*!***********************************************!*\
  !*** external "near-api-js/lib/utils/format" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("near-api-js/lib/utils/format");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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