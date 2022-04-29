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

/***/ "./components/AppContext.tsx":
/*!***********************************!*\
  !*** ./components/AppContext.tsx ***!
  \***********************************/
/*! exports provided: AppProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppProvider\", function() { return AppProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/near */ \"./utils/near.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config */ \"./utils/config.js\");\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/components/AppContext.tsx\";\n\n\n\nconst AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst AppProvider = props => {\n  const {\n    0: account,\n    1: setAccount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    accountId: undefined\n  });\n  const {\n    0: networkId,\n    1: setNetworkId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(`testnet`);\n  const {\n    0: config,\n    1: setConfig\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: balance,\n    1: setBalance\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    tokenBalance: 0,\n    nearBalance: 0\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    async function fetch() {\n      await Object(_utils_near__WEBPACK_IMPORTED_MODULE_2__[\"initializeContract\"])(); // @ts-ignore\n\n      const acc = window.walletConnection.account();\n      setAccount(acc);\n    }\n\n    fetch();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    async function fetch() {\n      // @ts-ignore\n      if (account.connection) {\n        // @ts-ignore\n        setNetworkId(account.connection.networkId); // @ts-ignore\n\n        setConfig(Object(_utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(networkId));\n\n        if (account.accountId) {\n          const near = await Object(_utils_near__WEBPACK_IMPORTED_MODULE_2__[\"accountBalance\"])(); // @ts-ignore\n\n          setBalance({\n            nearBalance: near\n          });\n        }\n      }\n    }\n\n    fetch();\n  }, [account]);\n  return (\n    /*#__PURE__*/\n    // @ts-ignore\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppContext.Provider, {\n      value: {\n        account,\n        config,\n        balance,\n        login: _utils_near__WEBPACK_IMPORTED_MODULE_2__[\"login\"],\n        logout: _utils_near__WEBPACK_IMPORTED_MODULE_2__[\"logout\"]\n      },\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, undefined)\n  );\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRleHQudHN4P2NiYWIiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBQcm92aWRlciIsInByb3BzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJ1c2VTdGF0ZSIsImFjY291bnRJZCIsInVuZGVmaW5lZCIsIm5ldHdvcmtJZCIsInNldE5ldHdvcmtJZCIsImNvbmZpZyIsInNldENvbmZpZyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwidG9rZW5CYWxhbmNlIiwibmVhckJhbGFuY2UiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImluaXRpYWxpemVDb250cmFjdCIsImFjYyIsIndpbmRvdyIsIndhbGxldENvbm5lY3Rpb24iLCJjb25uZWN0aW9uIiwiZW52aXJvbm1lbnQiLCJuZWFyIiwiYWNjb3VudEJhbGFuY2UiLCJsb2dpbiIsImxvZ291dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWhDO0FBRU8sTUFBTUMsV0FBVyxHQUFJQyxLQUFELElBQWdCO0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQztBQUFFQyxhQUFTLEVBQUVDO0FBQWIsR0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBRSxTQUFGLENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxFQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDTyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlIsc0RBQVEsQ0FBQztBQUFFUyxnQkFBWSxFQUFFLENBQWhCO0FBQW1CQyxlQUFXLEVBQUU7QUFBaEMsR0FBRCxDQUF0QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsS0FBZixHQUF1QjtBQUNyQixZQUFNQyxzRUFBa0IsRUFBeEIsQ0FEcUIsQ0FFckI7O0FBQ0EsWUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCbEIsT0FBeEIsRUFBWjtBQUNBQyxnQkFBVSxDQUFDZSxHQUFELENBQVY7QUFDRDs7QUFDREYsU0FBSztBQUNOLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLEtBQWYsR0FBdUI7QUFDckI7QUFDQSxVQUFJZCxPQUFPLENBQUNtQixVQUFaLEVBQXdCO0FBQ3RCO0FBQ0FiLG9CQUFZLENBQUNOLE9BQU8sQ0FBQ21CLFVBQVIsQ0FBbUJkLFNBQXBCLENBQVosQ0FGc0IsQ0FHdEI7O0FBQ0FHLGlCQUFTLENBQUNZLDZEQUFXLENBQUNmLFNBQUQsQ0FBWixDQUFUOztBQUNBLFlBQUlMLE9BQU8sQ0FBQ0csU0FBWixFQUF1QjtBQUNyQixnQkFBTWtCLElBQUksR0FBRyxNQUFNQyxrRUFBYyxFQUFqQyxDQURxQixDQUVyQjs7QUFDQVosb0JBQVUsQ0FBQztBQUFFRSx1QkFBVyxFQUFFUztBQUFmLFdBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRFAsU0FBSztBQUNOLEdBaEJRLEVBZ0JOLENBQUNkLE9BQUQsQ0FoQk0sQ0FBVDtBQWtCQTtBQUFBO0FBQ0U7QUFDQSx5RUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixXQUFLLEVBQUU7QUFDeEJBLGVBRHdCO0FBRXhCTyxjQUZ3QjtBQUd4QkUsZUFId0I7QUFJeEJjLGdFQUp3QjtBQUt4QkMsa0VBQU1BO0FBTGtCLE9BQTVCO0FBQUEsZ0JBUUd6QixLQUFLLENBQUMwQjtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWFELENBL0NNO0FBaURRN0IseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCBpbml0aWFsaXplQ29udHJhY3QsIGFjY291bnRCYWxhbmNlIH0gZnJvbSBcIi4uL3V0aWxzL25lYXJcIjtcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuLi91dGlscy9jb25maWcnO1xuXG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh7IGFjY291bnRJZDogdW5kZWZpbmVkIH0pO1xuICBjb25zdCBbbmV0d29ya0lkLCBzZXROZXR3b3JrSWRdID0gdXNlU3RhdGUoYHRlc3RuZXRgKTtcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKHsgdG9rZW5CYWxhbmNlOiAwLCBuZWFyQmFsYW5jZTogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoKCkge1xuICAgICAgYXdhaXQgaW5pdGlhbGl6ZUNvbnRyYWN0KCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBhY2MgPSB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5hY2NvdW50KCk7XG4gICAgICBzZXRBY2NvdW50KGFjYyk7XG4gICAgfVxuICAgIGZldGNoKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoKCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKGFjY291bnQuY29ubmVjdGlvbikge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNldE5ldHdvcmtJZChhY2NvdW50LmNvbm5lY3Rpb24ubmV0d29ya0lkKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzZXRDb25maWcoZW52aXJvbm1lbnQobmV0d29ya0lkKSk7XG4gICAgICAgIGlmIChhY2NvdW50LmFjY291bnRJZCkge1xuICAgICAgICAgIGNvbnN0IG5lYXIgPSBhd2FpdCBhY2NvdW50QmFsYW5jZSgpO1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBzZXRCYWxhbmNlKHsgbmVhckJhbGFuY2U6IG5lYXIgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2goKTtcbiAgfSwgW2FjY291bnRdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICBhY2NvdW50LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGJhbGFuY2UsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICBsb2dvdXQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppContext.tsx\n");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.tsx\");\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { setup } from 'twind';\n\n // import twindConfig from '../twind.config';\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const AnyComponent = Component;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"AppProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AnyComponent, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQW55Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtDQUdBOztDQUVBOztBQUdlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNoRSxRQUFNQyxZQUFZLEdBQUdGLFNBQXJCO0FBQ0Esc0JBQ0UscUVBQUMsa0VBQUQ7QUFBQSwyQkFDRSxxRUFBQyxZQUFELG9CQUFrQkMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9pbnRlcic7XG5cbi8vIGltcG9ydCB7IHNldHVwIH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRleHQnO1xuLy8gaW1wb3J0IHR3aW5kQ29uZmlnIGZyb20gJy4uL3R3aW5kLmNvbmZpZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBBbnlDb21wb25lbnQgPSBDb21wb25lbnQgYXMgYW55O1xuICByZXR1cm4gKFxuICAgIDxBcHBQcm92aWRlcj5cbiAgICAgIDxBbnlDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FwcFByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/global.css\n");

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line no-template-curly-in-string\nconst CONTRACT_NAME = process.env.CONTRACT_NAME || 'nyambura00.testnet'; // line 1\n\nfunction environment(env) {\n  switch (env) {\n    case 'mainnet':\n      // line 5\n      return {\n        networkId: 'mainnet',\n        nodeUrl: 'https://rpc.mainnet.near.org',\n        contractName: CONTRACT_NAME,\n        walletUrl: 'https://wallet.near.org',\n        helperUrl: 'https://helper.mainnet.near.org',\n        explorerUrl: 'https://explorer.mainnet.near.org'\n      };\n\n    case 'testnet':\n      // line 14\n      return {\n        networkId: 'testnet',\n        nodeUrl: 'https://rpc.testnet.near.org',\n        contractName: CONTRACT_NAME,\n        walletUrl: 'https://wallet.testnet.near.org',\n        helperUrl: 'https://helper.testnet.near.org',\n        explorerUrl: 'https://explorer.testnet.near.org'\n      };\n\n    default:\n      throw Error(`Unknown environment '${env}'.`);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (environment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25maWcuanM/ZDM0MSJdLCJuYW1lcyI6WyJDT05UUkFDVF9OQU1FIiwicHJvY2VzcyIsImVudiIsImVudmlyb25tZW50IiwibmV0d29ya0lkIiwibm9kZVVybCIsImNvbnRyYWN0TmFtZSIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQSxNQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaLElBQTZCLG9CQUFuRCxDLENBQXlFOztBQUV6RSxTQUFTRyxXQUFULENBQXFCRCxHQUFyQixFQUEwQjtBQUN4QixVQUFRQSxHQUFSO0FBQ0UsU0FBSyxTQUFMO0FBQWdCO0FBQ2QsYUFBTztBQUNMRSxpQkFBUyxFQUFFLFNBRE47QUFFTEMsZUFBTyxFQUFFLDhCQUZKO0FBR0xDLG9CQUFZLEVBQUVOLGFBSFQ7QUFJTE8saUJBQVMsRUFBRSx5QkFKTjtBQUtMQyxpQkFBUyxFQUFFLGlDQUxOO0FBTUxDLG1CQUFXLEVBQUU7QUFOUixPQUFQOztBQVFGLFNBQUssU0FBTDtBQUFnQjtBQUNkLGFBQU87QUFDTEwsaUJBQVMsRUFBRSxTQUROO0FBRUxDLGVBQU8sRUFBRSw4QkFGSjtBQUdMQyxvQkFBWSxFQUFFTixhQUhUO0FBSUxPLGlCQUFTLEVBQUUsaUNBSk47QUFLTEMsaUJBQVMsRUFBRSxpQ0FMTjtBQU1MQyxtQkFBVyxFQUFFO0FBTlIsT0FBUDs7QUFRRjtBQUNFLFlBQU1DLEtBQUssQ0FBRSx3QkFBdUJSLEdBQUksSUFBN0IsQ0FBWDtBQXBCSjtBQXNCRDs7QUFFY0MsMEVBQWYiLCJmaWxlIjoiLi91dGlscy9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nXG5jb25zdCBDT05UUkFDVF9OQU1FID0gcHJvY2Vzcy5lbnYuQ09OVFJBQ1RfTkFNRSB8fCAnbnlhbWJ1cmEwMC50ZXN0bmV0JzsgLy8gbGluZSAxXG5cbmZ1bmN0aW9uIGVudmlyb25tZW50KGVudikge1xuICBzd2l0Y2ggKGVudikge1xuICAgIGNhc2UgJ21haW5uZXQnOiAvLyBsaW5lIDVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ldHdvcmtJZDogJ21haW5uZXQnLFxuICAgICAgICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMubWFpbm5ldC5uZWFyLm9yZycsXG4gICAgICAgIGNvbnRyYWN0TmFtZTogQ09OVFJBQ1RfTkFNRSxcbiAgICAgICAgd2FsbGV0VXJsOiAnaHR0cHM6Ly93YWxsZXQubmVhci5vcmcnLFxuICAgICAgICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci5tYWlubmV0Lm5lYXIub3JnJyxcbiAgICAgICAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLm1haW5uZXQubmVhci5vcmcnLFxuICAgICAgfTtcbiAgICBjYXNlICd0ZXN0bmV0JzogLy8gbGluZSAxNFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV0d29ya0lkOiAndGVzdG5ldCcsXG4gICAgICAgIG5vZGVVcmw6ICdodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICAgICAgY29udHJhY3ROYW1lOiBDT05UUkFDVF9OQU1FLFxuICAgICAgICB3YWxsZXRVcmw6ICdodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICAgICAgaGVscGVyVXJsOiAnaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZycsXG4gICAgICAgIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBVbmtub3duIGVudmlyb25tZW50ICcke2Vudn0nLmApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/config.js\n");

/***/ }),

/***/ "./utils/near.js":
/*!***********************!*\
  !*** ./utils/near.js ***!
  \***********************/
/*! exports provided: initializeContract, accountBalance, getAccountId, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeContract\", function() { return initializeContract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accountBalance\", function() { return accountBalance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAccountId\", function() { return getAccountId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"near-api-js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! near-api-js/lib/utils/format */ \"near-api-js/lib/utils/format\");\n/* harmony import */ var near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./utils/config.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst nearEnv = Object(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('testnet');\nasync function initializeContract() {\n  const near = await Object(near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(_objectSpread({\n    deps: {\n      keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"keyStores\"].BrowserLocalStorageKeyStore()\n    }\n  }, nearEnv));\n  window.walletConnection = new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"WalletConnection\"](near);\n  window.accountId = window.walletConnection.getAccountId();\n  window.contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__[\"Contract\"](window.walletConnection.account(), nearEnv.contractName, {\n    viewMethods: ['getEvent', 'getEvents'],\n    changeMethods: ['addEvent']\n  });\n}\nasync function accountBalance() {\n  return Object(near_api_js_lib_utils_format__WEBPACK_IMPORTED_MODULE_1__[\"formatNearAmount\"])((await window.walletConnection.account().getAccountBalance()).total, 2);\n}\nasync function getAccountId() {\n  return window.walletConnection.getAccountId();\n}\nfunction login() {\n  window.walletConnection.requestSignIn(nearEnv.contractName);\n}\nfunction logout() {\n  window.walletConnection.signOut();\n  window.location.reload();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9uZWFyLmpzPzYxYjgiXSwibmFtZXMiOlsibmVhckVudiIsImVudmlyb25tZW50IiwiaW5pdGlhbGl6ZUNvbnRyYWN0IiwibmVhciIsImNvbm5lY3QiLCJkZXBzIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJ3aW5kb3ciLCJ3YWxsZXRDb25uZWN0aW9uIiwiV2FsbGV0Q29ubmVjdGlvbiIsImFjY291bnRJZCIsImdldEFjY291bnRJZCIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhY2NvdW50IiwiY29udHJhY3ROYW1lIiwidmlld01ldGhvZHMiLCJjaGFuZ2VNZXRob2RzIiwiYWNjb3VudEJhbGFuY2UiLCJmb3JtYXROZWFyQW1vdW50IiwiZ2V0QWNjb3VudEJhbGFuY2UiLCJ0b3RhbCIsImxvZ2luIiwicmVxdWVzdFNpZ25JbiIsImxvZ291dCIsInNpZ25PdXQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHVEQUFXLENBQUMsU0FBRCxDQUEzQjtBQUVPLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3pDLFFBQU1DLElBQUksR0FBRyxNQUFNQywyREFBTztBQUFHQyxRQUFJLEVBQUU7QUFBRUMsY0FBUSxFQUFFLElBQUlDLHFEQUFTLENBQUNDLDJCQUFkO0FBQVo7QUFBVCxLQUF1RVIsT0FBdkUsRUFBMUI7QUFDQVMsUUFBTSxDQUFDQyxnQkFBUCxHQUEwQixJQUFJQyw0REFBSixDQUFxQlIsSUFBckIsQ0FBMUI7QUFDQU0sUUFBTSxDQUFDRyxTQUFQLEdBQW1CSCxNQUFNLENBQUNDLGdCQUFQLENBQXdCRyxZQUF4QixFQUFuQjtBQUNBSixRQUFNLENBQUNLLFFBQVAsR0FBa0IsSUFBSUMsb0RBQUosQ0FBYU4sTUFBTSxDQUFDQyxnQkFBUCxDQUF3Qk0sT0FBeEIsRUFBYixFQUFnRGhCLE9BQU8sQ0FBQ2lCLFlBQXhELEVBQXNFO0FBQ3RGQyxlQUFXLEVBQUUsQ0FBQyxVQUFELEVBQWEsV0FBYixDQUR5RTtBQUV0RkMsaUJBQWEsRUFBRSxDQUFDLFVBQUQ7QUFGdUUsR0FBdEUsQ0FBbEI7QUFJRDtBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsU0FBT0MscUZBQWdCLENBQUMsQ0FBQyxNQUFNWixNQUFNLENBQUNDLGdCQUFQLENBQXdCTSxPQUF4QixHQUFrQ00saUJBQWxDLEVBQVAsRUFBOERDLEtBQS9ELEVBQXNFLENBQXRFLENBQXZCO0FBQ0Q7QUFFTSxlQUFlVixZQUFmLEdBQThCO0FBQ25DLFNBQU9KLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JHLFlBQXhCLEVBQVA7QUFDRDtBQUVNLFNBQVNXLEtBQVQsR0FBaUI7QUFDdEJmLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JlLGFBQXhCLENBQXNDekIsT0FBTyxDQUFDaUIsWUFBOUM7QUFDRDtBQUVNLFNBQVNTLE1BQVQsR0FBa0I7QUFDdkJqQixRQUFNLENBQUNDLGdCQUFQLENBQXdCaUIsT0FBeEI7QUFDQWxCLFFBQU0sQ0FBQ21CLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QiLCJmaWxlIjoiLi91dGlscy9uZWFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgQ29udHJhY3QsIGtleVN0b3JlcywgV2FsbGV0Q29ubmVjdGlvbiB9IGZyb20gJ25lYXItYXBpLWpzJztcbmltcG9ydCB7IGZvcm1hdE5lYXJBbW91bnQgfSBmcm9tICduZWFyLWFwaS1qcy9saWIvdXRpbHMvZm9ybWF0JztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IG5lYXJFbnYgPSBlbnZpcm9ubWVudCgndGVzdG5ldCcpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRyYWN0KCkge1xuICBjb25zdCBuZWFyID0gYXdhaXQgY29ubmVjdCh7IGRlcHM6IHsga2V5U3RvcmU6IG5ldyBrZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSwgLi4ubmVhckVudiB9KTtcbiAgd2luZG93LndhbGxldENvbm5lY3Rpb24gPSBuZXcgV2FsbGV0Q29ubmVjdGlvbihuZWFyKTtcbiAgd2luZG93LmFjY291bnRJZCA9IHdpbmRvdy53YWxsZXRDb25uZWN0aW9uLmdldEFjY291bnRJZCgpO1xuICB3aW5kb3cuY29udHJhY3QgPSBuZXcgQ29udHJhY3Qod2luZG93LndhbGxldENvbm5lY3Rpb24uYWNjb3VudCgpLCBuZWFyRW52LmNvbnRyYWN0TmFtZSwge1xuICAgIHZpZXdNZXRob2RzOiBbJ2dldEV2ZW50JywgJ2dldEV2ZW50cyddLFxuICAgIGNoYW5nZU1ldGhvZHM6IFsnYWRkRXZlbnQnXSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY2NvdW50QmFsYW5jZSgpIHtcbiAgcmV0dXJuIGZvcm1hdE5lYXJBbW91bnQoKGF3YWl0IHdpbmRvdy53YWxsZXRDb25uZWN0aW9uLmFjY291bnQoKS5nZXRBY2NvdW50QmFsYW5jZSgpKS50b3RhbCwgMik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50SWQoKSB7XG4gIHJldHVybiB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5nZXRBY2NvdW50SWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICB3aW5kb3cud2FsbGV0Q29ubmVjdGlvbi5yZXF1ZXN0U2lnbkluKG5lYXJFbnYuY29udHJhY3ROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgd2luZG93LndhbGxldENvbm5lY3Rpb24uc2lnbk91dCgpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/near.js\n");

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

/***/ "near-api-js/lib/utils/format":
/*!***********************************************!*\
  !*** external "near-api-js/lib/utils/format" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"near-api-js/lib/utils/format\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZWFyLWFwaS1qcy9saWIvdXRpbHMvZm9ybWF0XCI/MmE5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZWFyLWFwaS1qcy9saWIvdXRpbHMvZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVhci1hcGktanMvbGliL3V0aWxzL2Zvcm1hdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///near-api-js/lib/utils/format\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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