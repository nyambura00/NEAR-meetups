webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ \"./components/button/index.tsx\");\n\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/components/navigation/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar links = [{\n  label: \"About us\",\n  href: \"/\"\n}, {\n  label: \"View events\",\n  href: \"/\"\n}];\nvar secondaryLinks = [{\n  label: \"Connect Wallet\",\n  href: \"/\"\n}];\n\nvar MenuButton = function MenuButton(_ref) {\n  var toggleMenu = _ref.toggleMenu,\n      showMenu = _ref.showMenu;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    type: \"button\",\n    \"aria-controls\": \"mobile-menu\",\n    \"aria-expanded\": showMenu,\n    onClick: toggleMenu,\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"p-2 text-gray-400\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"sr-only\"),\n      children: \"Open menu\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-6 w-6\"),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"aria-hidden\": \"true\",\n      width: 24,\n      height: 24,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        strokeWidth: 2,\n        d: \"M6 18L18 6M6 6l12 12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-6 w-6\"),\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"aria-hidden\": \"true\",\n      width: 24,\n      height: 24,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        strokeWidth: 2,\n        d: \"M4 6h16M4 12h16M4 18h16\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuButton;\n\nvar MobileMenu = function MobileMenu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"md:hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"px-2 pt-2 pb-3 space-y-1 sm:px-3\"),\n      children: links.map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: link.href,\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-500 block px-3 py-2 text-base font-medium\"),\n          children: link.label\n        }, link.label, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"pt-4 pb-3 border-t border-gray-400\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"px-2 space-y-1\"),\n        children: secondaryLinks.map(function (link) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: link.href,\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"block px-3 py-2 text-base font-medium text-gray-500\"),\n            children: link.label\n          }, \"mobile-\".concat(link.label), false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = MobileMenu;\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    return setShowMenu(!showMenu);\n  }; // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n  // @ts-ignore\n  // const { login } = useContext(AppContext);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"bg-white\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center justify-between h-24\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex-shrink-0\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-12 w-12\"),\n              src: \"logo.svg\",\n              alt: \"logo\",\n              width: 48,\n              height: 48\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"hidden md:block\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"ml-10 flex items-baseline space-x-4\"),\n              children: links.map(function (link) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: link.href,\n                  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium\"),\n                  children: link.label\n                }, link.label, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"hidden md:block\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"ml-4 flex items-center md:ml-6\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              onClick: login,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                primary: true,\n                children: \"Connect wallet\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 134,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this), \"}\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"-mr-2 flex md:hidden\"),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MenuButton, {\n            showMenu: showMenu,\n            toggleMenu: toggleMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MobileMenu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 19\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n\n_c3 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MenuButton\");\n$RefreshReg$(_c2, \"MobileMenu\");\n$RefreshReg$(_c3, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LnRzeD9mODA4Il0sIm5hbWVzIjpbImxpbmtzIiwibGFiZWwiLCJocmVmIiwic2Vjb25kYXJ5TGlua3MiLCJNZW51QnV0dG9uIiwidG9nZ2xlTWVudSIsInNob3dNZW51IiwidHciLCJNb2JpbGVNZW51IiwibWFwIiwibGluayIsIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsInNldFNob3dNZW51IiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFlQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxPQUFLLFlBRFA7QUFFRUMsTUFBSTtBQUZOLENBRFksRUFLWjtBQUNFRCxPQUFLLGVBRFA7QUFFRUMsTUFBSTtBQUZOLENBTFksQ0FBZDtBQVdBLElBQU1DLGNBQWMsR0FBRyxDQUNyQjtBQUNFRixPQUFLLGtCQURQO0FBRUVDLE1BQUk7QUFGTixDQURxQixDQUF2Qjs7QUFPQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLHNCQUNqQjtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUscUJBQWMsYUFGaEI7QUFHRSxxQkFBZUEsUUFIakI7QUFJRSxXQUFPLEVBQUVELFVBSlg7QUFLRSxhQUFTLEVBQUVFLGdEQUFFLHFCQUxmO0FBQUEsNEJBT0U7QUFBTSxlQUFTLEVBQUVBLGdEQUFFLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFRR0QsUUFBUSxnQkFDUDtBQUNFLGVBQVMsRUFBRUMsZ0RBQUUsV0FEZjtBQUVFLFdBQUssRUFBQyw0QkFGUjtBQUdFLFVBQUksRUFBQyxNQUhQO0FBSUUsYUFBTyxFQUFDLFdBSlY7QUFLRSxZQUFNLEVBQUMsY0FMVDtBQU1FLHFCQUFZLE1BTmQ7QUFPRSxXQUFLLEVBQUUs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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFtQ0dDLFFBQVEsZ0JBQUcscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBb0IsSUFuQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBL0NEOztHQUFNSyxVOztNQUFBQSxVO0FBaURTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuXG5cblxuIFxuaW50ZXJmYWNlIElNZW51QnV0dG9uIHtcbiAgdG9nZ2xlTWVudTogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuICBzaG93TWVudTogYm9vbGVhbjtcbn1cblxudHlwZSBMaW5rID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59O1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBgQWJvdXQgdXNgLFxuICAgIGhyZWY6IGAvYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBgVmlldyBldmVudHNgLFxuICAgIGhyZWY6IGAvYCxcbiAgfSxcbl07XG5cbmNvbnN0IHNlY29uZGFyeUxpbmtzID0gW1xuICB7XG4gICAgbGFiZWw6IGBDb25uZWN0IFdhbGxldGAsXG4gICAgaHJlZjogYC9gLFxuICB9LFxuXTtcblxuY29uc3QgTWVudUJ1dHRvbiA9ICh7IHRvZ2dsZU1lbnUsIHNob3dNZW51IH06IElNZW51QnV0dG9uKSA9PiAoXG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxuICAgIGFyaWEtZXhwYW5kZWQ9e3Nob3dNZW51fVxuICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgY2xhc3NOYW1lPXt0dyhgcC0yIHRleHQtZ3JheS00MDBgKX1cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17dHcoYHNyLW9ubHlgKX0+T3BlbiBtZW51PC9zcGFuPlxuICAgIHtzaG93TWVudSA/IChcbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXt0dyhgaC02IHctNmApfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgPlxuICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICApIDogKFxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9e3R3KGBoLTYgdy02YCl9XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgIGhlaWdodD17MjR9XG4gICAgICA+XG4gICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICl9XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgTW9iaWxlTWVudSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3R3KGBtZDpoaWRkZW5gKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGBweC0yIHB0LTIgcGItMyBzcGFjZS15LTEgc206cHgtM2ApfT5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbms6IExpbmspID0+IChcbiAgICAgICAgPGEgaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9e3R3KGB0ZXh0LWdyYXktNTAwIGJsb2NrIHB4LTMgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW1gKX0ga2V5PXtsaW5rLmxhYmVsfT5cbiAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGBwdC00IHBiLTMgYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwYCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBweC0yIHNwYWNlLXktMWApfT5cbiAgICAgICAge3NlY29uZGFyeUxpbmtzLm1hcCgobGluazogTGluaykgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBrZXk9e2Btb2JpbGUtJHtsaW5rLmxhYmVsfWB9XG4gICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3R3KGBibG9jayBweC0zIHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRTaG93TWVudSghc2hvd01lbnUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICAvLyBjb25zdCB7IGxvZ2luIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3R3KGBiZy13aGl0ZWApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThgKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjRgKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4IGl0ZW1zLWNlbnRlcmApfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleC1zaHJpbmstMGApfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3R3KGBoLTEyIHctMTJgKX0gc3JjPVwibG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGhpZGRlbiBtZDpibG9ja2ApfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtbC0xMCBmbGV4IGl0ZW1zLWJhc2VsaW5lIHNwYWNlLXgtNGApfT5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rOiBMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0dyhgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNjAwIHB4LTMgcHktMiByb3VuZGVkLW1kIGZvbnQtbWVkaXVtYCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgaGlkZGVuIG1kOmJsb2NrYCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtbC00IGZsZXggaXRlbXMtY2VudGVyIG1kOm1sLTZgKX0+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17bG9naW59PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5Db25uZWN0IHdhbGxldDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH0gICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYC1tci0yIGZsZXggbWQ6aGlkZGVuYCl9PlxuICAgICAgICAgICAgPE1lbnVCdXR0b24gc2hvd01lbnU9e3Nob3dNZW51fSB0b2dnbGVNZW51PXt0b2dnbGVNZW51fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dNZW51ID8gPE1vYmlsZU1lbnUgLz4gOiBudWxsfVxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation/index.tsx\n");

/***/ }),

/***/ "./node_modules/base-x/src/index.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/borsh/lib/index.js":
false,

/***/ "./node_modules/borsh/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/bs58/index.js":
false,

/***/ "./node_modules/capability/es5.js":
false,

/***/ "./node_modules/capability/index.js":
false,

/***/ "./node_modules/capability/lib/CapabilityDetector.js":
false,

/***/ "./node_modules/capability/lib/definitions.js":
false,

/***/ "./node_modules/capability/lib/index.js":
false,

/***/ "./node_modules/depd/lib/browser/index.js":
false,

/***/ "./node_modules/error-polyfill/index.js":
false,

/***/ "./node_modules/error-polyfill/lib/index.js":
false,

/***/ "./node_modules/error-polyfill/lib/non-v8/Frame.js":
false,

/***/ "./node_modules/error-polyfill/lib/non-v8/FrameStringParser.js":
false,

/***/ "./node_modules/error-polyfill/lib/non-v8/FrameStringSource.js":
false,

/***/ "./node_modules/error-polyfill/lib/non-v8/index.js":
false,

/***/ "./node_modules/error-polyfill/lib/prepareStackTrace.js":
false,

/***/ "./node_modules/error-polyfill/lib/unsupported.js":
false,

/***/ "./node_modules/error-polyfill/lib/v8.js":
false,

/***/ "./node_modules/http-errors/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/js-sha256/src/sha256.js":
false,

/***/ "./node_modules/mustache/mustache.js":
false,

/***/ "./node_modules/near-api-js/lib/account.js":
false,

/***/ "./node_modules/near-api-js/lib/account_creator.js":
false,

/***/ "./node_modules/near-api-js/lib/account_multisig.js":
false,

/***/ "./node_modules/near-api-js/lib/browser-connect.js":
false,

/***/ "./node_modules/near-api-js/lib/browser-index.js":
false,

/***/ "./node_modules/near-api-js/lib/common-index.js":
false,

/***/ "./node_modules/near-api-js/lib/connection.js":
false,

/***/ "./node_modules/near-api-js/lib/constants.js":
false,

/***/ "./node_modules/near-api-js/lib/contract.js":
false,

/***/ "./node_modules/near-api-js/lib/generated/rpc_error_schema.json":
false,

/***/ "./node_modules/near-api-js/lib/key_stores/browser-index.js":
false,

/***/ "./node_modules/near-api-js/lib/key_stores/browser_local_storage_key_store.js":
false,

/***/ "./node_modules/near-api-js/lib/key_stores/in_memory_key_store.js":
false,

/***/ "./node_modules/near-api-js/lib/key_stores/keystore.js":
false,

/***/ "./node_modules/near-api-js/lib/key_stores/merge_key_store.js":
false,

/***/ "./node_modules/near-api-js/lib/near.js":
false,

/***/ "./node_modules/near-api-js/lib/providers/index.js":
false,

/***/ "./node_modules/near-api-js/lib/providers/json-rpc-provider.js":
false,

/***/ "./node_modules/near-api-js/lib/providers/provider.js":
false,

/***/ "./node_modules/near-api-js/lib/res/error_messages.json":
false,

/***/ "./node_modules/near-api-js/lib/signer.js":
false,

/***/ "./node_modules/near-api-js/lib/transaction.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/enums.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/errors.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/exponential-backoff.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/format.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/index.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/key_pair.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/rpc_errors.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/serialize.js":
false,

/***/ "./node_modules/near-api-js/lib/utils/web.js":
false,

/***/ "./node_modules/near-api-js/lib/validators.js":
false,

/***/ "./node_modules/near-api-js/lib/wallet-account.js":
false,

/***/ "./node_modules/near-api-js/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/amd-options.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/o3/index.js":
false,

/***/ "./node_modules/o3/lib/Class.js":
false,

/***/ "./node_modules/o3/lib/abstractMethod.js":
false,

/***/ "./node_modules/o3/lib/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/setprototypeof/index.js":
false,

/***/ "./node_modules/statuses/codes.json":
false,

/***/ "./node_modules/statuses/index.js":
false,

/***/ "./node_modules/text-encoding-utf-8/lib/encoding.lib.mjs":
false,

/***/ "./node_modules/toidentifier/index.js":
false,

/***/ "./node_modules/tweetnacl/nacl-fast.js":
false,

/***/ "./node_modules/u3/index.js":
false,

/***/ "./node_modules/u3/lib/cache.js":
false,

/***/ "./node_modules/u3/lib/eachCombination.js":
false,

/***/ "./node_modules/u3/lib/index.js":
false,

/***/ "./utils/config.js":
false,

/***/ "./utils/near.js":
false,

/***/ 1:
false,

/***/ 2:
false,

/***/ 3:
false

})