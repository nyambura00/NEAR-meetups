webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ \"./components/button/index.tsx\");\n/* harmony import */ var _utils_near__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../utils/near */ \"./utils/near.js\");\n\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/components/navigation/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n // import AppContext from '../AppContext';\n\nvar links = [{\n  label: \"About us\",\n  href: \"/\"\n}, {\n  label: \"View events\",\n  href: \"/\"\n}];\nvar secondaryLinks = [{\n  label: \"Connect Wallet\",\n  href: \"/\"\n}];\n\nvar MenuButton = function MenuButton(_ref) {\n  var toggleMenu = _ref.toggleMenu,\n      showMenu = _ref.showMenu;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    type: \"button\",\n    \"aria-controls\": \"mobile-menu\",\n    \"aria-expanded\": showMenu,\n    onClick: toggleMenu,\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"p-2 text-gray-400\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"sr-only\"),\n      children: \"Open menu\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-6 w-6\"),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"aria-hidden\": \"true\",\n      width: 24,\n      height: 24,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        strokeWidth: 2,\n        d: \"M6 18L18 6M6 6l12 12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-6 w-6\"),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"aria-hidden\": \"true\",\n      width: 24,\n      height: 24,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        strokeWidth: 2,\n        d: \"M4 6h16M4 12h16M4 18h16\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuButton;\n\nvar MobileMenu = function MobileMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"md:hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"px-2 pt-2 pb-3 space-y-1 sm:px-3\"),\n      children: links.map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: link.href,\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-500 block px-3 py-2 text-base font-medium\"),\n          children: link.label\n        }, link.label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"pt-4 pb-3 border-t border-gray-400\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"px-2 space-y-1\"),\n        children: secondaryLinks.map(function (link) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: link.href,\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"block px-3 py-2 text-base font-medium text-gray-500\"),\n            children: link.label\n          }, \"mobile-\".concat(link.label), false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = MobileMenu;\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    return setShowMenu(!showMenu);\n  }; // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n  // @ts-ignore\n  // const { login } = useContext(AppContext);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"bg-white\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center justify-between h-24\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex-shrink-0\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-12 w-12\"),\n              src: \"logo.svg\",\n              alt: \"logo\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"hidden md:block\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"ml-10 flex items-baseline space-x-4\"),\n              children: links.map(function (link) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: link.href,\n                  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium\"),\n                  children: link.label\n                }, link.label, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"hidden md:block\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"ml-4 flex items-center md:ml-6\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              onClick: _utils_near__WEBPACK_IMPORTED_MODULE_4__[\"login\"],\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                primary: true,\n                children: \"Connect wallet\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 134,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"-mr-2 flex md:hidden\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuButton, {\n            showMenu: showMenu,\n            toggleMenu: toggleMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MobileMenu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 19\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n\n_c3 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MenuButton\");\n$RefreshReg$(_c2, \"MobileMenu\");\n$RefreshReg$(_c3, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LnRzeD9mODA4Il0sIm5hbWVzIjpbImxpbmtzIiwibGFiZWwiLCJocmVmIiwic2Vjb25kYXJ5TGlua3MiLCJNZW51QnV0dG9uIiwidG9nZ2xlTWVudSIsInNob3dNZW51IiwidHciLCJNb2JpbGVNZW51IiwibWFwIiwibGluayIsIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsInNldFNob3dNZW51IiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBWUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxZQURQO0FBRUVDLE1BQUk7QUFGTixDQURZLEVBS1o7QUFDRUQsT0FBSyxlQURQO0FBRUVDLE1BQUk7QUFGTixDQUxZLENBQWQ7QUFXQSxJQUFNQyxjQUFjLEdBQUcsQ0FDckI7QUFDRUYsT0FBSyxrQkFEUDtBQUVFQyxNQUFJO0FBRk4sQ0FEcUIsQ0FBdkI7O0FBT0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxNQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSxzQkFDakI7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFjLGFBRmhCO0FBR0UscUJBQWVBLFFBSGpCO0FBSUUsV0FBTyxFQUFFRCxVQUpYO0FBS0UsYUFBUyxFQUFFRSxnREFBRSxxQkFMZjtBQUFBLDRCQU9FO0FBQU0sZUFBUyxFQUFFQSxnREFBRSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLEVBUUdELFFBQVEsZ0JBQ1A7QUFDRSxlQUFTLEVBQUVDLGdEQUFFLFdBRGY7QUFFRSxXQUFLLEVBQUMsNEJBRlI7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLGFBQU8sRUFBQyxXQUpWO0FBS0UsWUFBTSxFQUFDLGNBTFQ7QUFNRSxxQkFBWSxNQU5kO0FBT0UsV0FBSyxFQUFFLEVBUFQ7QUFRRSxZQUFNLEVBQUUsRUFSVjtBQUFBLDZCQVVFO0FBQU0scUJBQWEsRUFBQyxPQUFwQjtBQUE0QixzQkFBYyxFQUFDLE9BQTNDO0FBQW1ELG1CQUFXLEVBQUUsQ0FBaEU7QUFBbUUsU0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBY1A7QUFDRSxlQUFTLEVBQUVBLGdEQUFFLFdBRGY7QUFFRSxXQUFLLEVBQUMsNEJBRlI7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLGFBQU8sRUFBQyxXQUpWO0FBS0UsWUFBTSxFQUFDLGNBTFQ7QUFNRSxxQkFBWSxNQU5kO0FBT0UsV0FBSyxFQUFFLEVBUFQ7QUFRRSxZQUFNLEVBQUUsRUFSVjtBQUFBLDZCQVVFO0FBQU0scUJBQWEsRUFBQyxPQUFwQjtBQUE0QixzQkFBYyxFQUFDLE9BQTNDO0FBQW1ELG1CQUFXLEVBQUUsQ0FBaEU7QUFBbUUsU0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQW5COztLQUFNSCxVOztBQXVDTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHNCQUNqQjtBQUFLLGFBQVMsRUFBRUQsZ0RBQUUsYUFBbEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsZ0RBQUUsb0NBQWxCO0FBQUEsZ0JBQ0dQLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDVDtBQUFHLGNBQUksRUFBRUEsSUFBSSxDQUFDUixJQUFkO0FBQW9CLG1CQUFTLEVBQUVLLGdEQUFFLHVEQUFqQztBQUFBLG9CQUNHRyxJQUFJLENBQUNUO0FBRFIsV0FBK0ZTLElBQUksQ0FBQ1QsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRTtBQUFLLGVBQVMsRUFBRU0sZ0RBQUUsc0NBQWxCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxnREFBRSxrQkFBbEI7QUFBQSxrQkFDR0osY0FBYyxDQUFDTSxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSw4QkFDbEI7QUFFRSxnQkFBSSxFQUFFQSxJQUFJLENBQUNSLElBRmI7QUFHRSxxQkFBUyxFQUFFSyxnREFBRSx1REFIZjtBQUFBLHNCQUtHRyxJQUFJLENBQUNUO0FBTFIsOEJBQ2lCUyxJQUFJLENBQUNULEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGtCO0FBQUEsU0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQW5COztNQUFNTyxVOztBQXlCTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ2hCTixRQURnQjtBQUFBLE1BQ05PLFdBRE07O0FBRXZCLE1BQU1SLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTVEsV0FBVyxDQUFDLENBQUNQLFFBQUYsQ0FBakI7QUFBQSxHQUFuQixDQUZ1QixDQUl2QjtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxnREFBRSxZQUFsQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSxnREFBRSwwQ0FBbEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLGdEQUFFLDBDQUFsQjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsZ0RBQUUscUJBQWxCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFQSxnREFBRSxpQkFBbEI7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUVBLGdEQUFFLGFBQWxCO0FBQWlDLGlCQUFHLEVBQUMsVUFBckM7QUFBZ0QsaUJBQUcsRUFBQyxNQUFwRDtBQUEyRCxtQkFBSyxFQUFFLEVBQWxFO0FBQXNFLG9CQUFNLEVBQUU7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUVBLGdEQUFFLG1CQUFsQjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRUEsZ0RBQUUsdUNBQWxCO0FBQUEsd0JBQ0dQLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxvQ0FDVDtBQUVFLHNCQUFJLEVBQUVBLElBQUksQ0FBQ1IsSUFGYjtBQUdFLDJCQUFTLEVBQUVLLGdEQUFFLHNFQUhmO0FBQUEsNEJBS0dHLElBQUksQ0FBQ1Q7QUFMUixtQkFDT1MsSUFBSSxDQUFDVCxLQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFM7QUFBQSxlQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBb0JFO0FBQUssbUJBQVMsRUFBRU0sZ0RBQUUsbUJBQWxCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQSxnREFBRSxrQ0FBbEI7QUFBQSxtQ0FDRTtBQUFLLHFCQUFPLEVBQUVPLGlEQUFkO0FBQUEscUNBQ0UscUVBQUMsK0NBQUQ7QUFBUSx1QkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRixlQTZCRTtBQUFLLG1CQUFTLEVBQUVQLGdEQUFFLHdCQUFsQjtBQUFBLGlDQUNFLHFFQUFDLFVBQUQ7QUFBWSxvQkFBUSxFQUFFRCxRQUF0QjtBQUFnQyxzQkFBVSxFQUFFRDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBb0NHQyxRQUFRLGdCQUFHLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQW9CLElBcEMvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdDRCxDQWhERDs7R0FBTUssVTs7TUFBQUEsVTtBQWtEU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHcgfSBmcm9tICd0d2luZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnQC8uLi91dGlscy9uZWFyJztcblxuLy8gaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vQXBwQ29udGV4dCc7XG5cbmludGVyZmFjZSBJTWVudUJ1dHRvbiB7XG4gIHRvZ2dsZU1lbnU6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgc2hvd01lbnU6IGJvb2xlYW47XG59XG5cbnR5cGUgTGluayA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufTtcblxuY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogYEFib3V0IHVzYCxcbiAgICBocmVmOiBgL2AsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogYFZpZXcgZXZlbnRzYCxcbiAgICBocmVmOiBgL2AsXG4gIH0sXG5dO1xuXG5jb25zdCBzZWNvbmRhcnlMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBgQ29ubmVjdCBXYWxsZXRgLFxuICAgIGhyZWY6IGAvYCxcbiAgfSxcbl07XG5cbmNvbnN0IE1lbnVCdXR0b24gPSAoeyB0b2dnbGVNZW51LCBzaG93TWVudSB9OiBJTWVudUJ1dHRvbikgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcbiAgICBhcmlhLWV4cGFuZGVkPXtzaG93TWVudX1cbiAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgIGNsYXNzTmFtZT17dHcoYHAtMiB0ZXh0LWdyYXktNDAwYCl9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9e3R3KGBzci1vbmx5YCl9Pk9wZW4gbWVudTwvc3Bhbj5cbiAgICB7c2hvd01lbnUgPyAoXG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17dHcoYGgtNiB3LTZgKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgID5cbiAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgKSA6IChcbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXt0dyhgaC02IHctNmApfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgPlxuICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICApfVxuICA8L2J1dHRvbj5cbik7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWQ6aGlkZGVuYCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTNgKX0+XG4gICAgICB7bGlua3MubWFwKChsaW5rOiBMaW5rKSA9PiAoXG4gICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0gY2xhc3NOYW1lPXt0dyhgdGV4dC1ncmF5LTUwMCBibG9jayBweC0zIHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtYCl9IGtleT17bGluay5sYWJlbH0+XG4gICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgIDwvYT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHQtNCBwYi0zIGJvcmRlci10IGJvcmRlci1ncmF5LTQwMGApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHgtMiBzcGFjZS15LTFgKX0+XG4gICAgICAgIHtzZWNvbmRhcnlMaW5rcy5tYXAoKGxpbms6IExpbmspID0+IChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAga2V5PXtgbW9iaWxlLSR7bGluay5sYWJlbH1gfVxuICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0dyhgYmxvY2sgcHgtMyBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwYCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgLy8gY29uc3QgeyBsb2dpbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXt0dyhgYmctd2hpdGVgKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04YCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTI0YCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBpdGVtcy1jZW50ZXJgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXgtc2hyaW5rLTBgKX0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXt0dyhgaC0xMiB3LTEyYCl9IHNyYz1cImxvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBoaWRkZW4gbWQ6YmxvY2tgKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTRgKX0+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluazogTGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHcoYHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTYwMCBweC0zIHB5LTIgcm91bmRlZC1tZCBmb250LW1lZGl1bWApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBoaWRkZW4gbWQ6YmxvY2tgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1sLTQgZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWwtNmApfT5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtsb2dpbn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkNvbm5lY3Qgd2FsbGV0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGAtbXItMiBmbGV4IG1kOmhpZGRlbmApfT5cbiAgICAgICAgICAgIDxNZW51QnV0dG9uIHNob3dNZW51PXtzaG93TWVudX0gdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93TWVudSA/IDxNb2JpbGVNZW51IC8+IDogbnVsbH1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation/index.tsx\n");

/***/ })

})