webpackHotUpdate_N_E("pages/index",{

/***/ "./components/social-proof/index.tsx":
/*!*******************************************!*\
  !*** ./components/social-proof/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ \"./node_modules/twind/twind.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_svg_quote_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/svg/quote.svg */ \"./constants/svg/quote.svg\");\n\n\nvar _jsxFileName = \"/home/nyambura00/Desktop/blockchain devt/NEAR-meetups/components/social-proof/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar socialProofs = [{\n  name: \"Kevin Kimani\",\n  company: \"ABC company\",\n  image: \"/images/avatar-3.png\",\n  text: \"NEAR-meetups gives anyone a chance to quickly immmerse themselves to the web3 world.\\n    I love it here.\"\n}, {\n  name: \"Everlyn Wanini\",\n  company: \"Techworld org\",\n  image: \"/images/avatar-1.png\",\n  text: \"I uploaded my event swiftly. I love the idea of distributed finance.\"\n}];\n\nvar SocialProof = function SocialProof() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentIndex = _useState[0],\n      setCurrentIndex = _useState[1];\n\n  var next = function next() {\n    if (currentIndex + 1 < socialProofs.length) {\n      setCurrentIndex(currentIndex + 1);\n    }\n  };\n\n  var previous = function previous() {\n    if (currentIndex - 1 >= 0) {\n      setCurrentIndex(currentIndex - 1);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"container mx-auto my-8\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"max-w-7xl mx-auto\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"relative bg-white\"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_constants_svg_quote_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"pt-20 px-6 md:px-0\"),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-600 text-base pb-6\"),\n                children: socialProofs[currentIndex].text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center justify-between\"),\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"flex items-center pb-12\"),\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-12 w-12\"),\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: socialProofs[currentIndex].image,\n                      alt: socialProofs[currentIndex].name,\n                      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"h-full w-full object-cover overflow-hidden rounded-full\"),\n                      height: 48,\n                      width: 48\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 48,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-600 font-bold ml-3\"),\n                    children: [socialProofs[currentIndex].name, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 57,\n                      columnNumber: 57\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"text-gray-600 text-base font-light\"),\n                      children: socialProofs[currentIndex].company\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 58,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 56,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__[\"tw\"])(\"cursor-pointer flex pb-12\"),\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: 44,\n                    height: 44,\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"#CBD5E0\",\n                    fill: \"none\",\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\",\n                    onClick: previous,\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                      stroke: \"none\",\n                      d: \"M0 0h24v24H0z\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polyline\", {\n                      points: \"15 6 9 12 15 18\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 64,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: 44,\n                    height: 44,\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"#CBD5E0\",\n                    fill: \"none\",\n                    strokeLinecap: \"round\",\n                    strokeLinejoin: \"round\",\n                    onClick: next,\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                      stroke: \"none\",\n                      d: \"M0 0h24v24H0z\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 91,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polyline\", {\n                      points: \"9 6 15 12 9 18\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 92,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SocialProof, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n\n_c = SocialProof;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialProof);\n\nvar _c;\n\n$RefreshReg$(_c, \"SocialProof\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2NpYWwtcHJvb2YvaW5kZXgudHN4P2ZlMTkiXSwibmFtZXMiOlsic29jaWFsUHJvb2ZzIiwibmFtZSIsImNvbXBhbnkiLCJpbWFnZSIsInRleHQiLCJTb2NpYWxQcm9vZiIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwibmV4dCIsImxlbmd0aCIsInByZXZpb3VzIiwidHciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsTUFBSSxnQkFETjtBQUVFQyxTQUFPLGVBRlQ7QUFHRUMsT0FBSyx3QkFIUDtBQUlFQyxNQUFJO0FBSk4sQ0FEbUIsRUFRbkI7QUFDRUgsTUFBSSxrQkFETjtBQUVFQyxTQUFPLGlCQUZUO0FBR0VDLE9BQUssd0JBSFA7QUFJRUMsTUFBSTtBQUpOLENBUm1CLENBQXJCOztBQWdCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLENBQUQsQ0FEeEI7QUFBQSxNQUNqQkMsWUFEaUI7QUFBQSxNQUNIQyxlQURHOztBQUd4QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUlGLFlBQVksR0FBRyxDQUFmLEdBQW1CUCxZQUFZLENBQUNVLE1BQXBDLEVBQTRDO0FBQzFDRixxQkFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUlKLFlBQVksR0FBRyxDQUFmLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCQyxxQkFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUssZ0RBQUUsMEJBQWxCO0FB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eUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUVELENBbEZEOztHQUFNSixXOztLQUFBQSxXO0FBb0ZTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29jaWFsLXByb29mL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR3IH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVvdGUgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3N2Zy9xdW90ZS5zdmcnO1xuXG5jb25zdCBzb2NpYWxQcm9vZnMgPSBbXG4gIHtcbiAgICBuYW1lOiBgS2V2aW4gS2ltYW5pYCxcbiAgICBjb21wYW55OiBgQUJDIGNvbXBhbnlgLFxuICAgIGltYWdlOiBgL2ltYWdlcy9hdmF0YXItMy5wbmdgLFxuICAgIHRleHQ6IGBORUFSLW1lZXR1cHMgZ2l2ZXMgYW55b25lIGEgY2hhbmNlIHRvIHF1aWNrbHkgaW1tbWVyc2UgdGhlbXNlbHZlcyB0byB0aGUgd2ViMyB3b3JsZC5cbiAgICBJIGxvdmUgaXQgaGVyZS5gLFxuICB9LFxuICB7XG4gICAgbmFtZTogYEV2ZXJseW4gV2FuaW5pYCxcbiAgICBjb21wYW55OiBgVGVjaHdvcmxkIG9yZ2AsXG4gICAgaW1hZ2U6IGAvaW1hZ2VzL2F2YXRhci0xLnBuZ2AsXG4gICAgdGV4dDogYEkgdXBsb2FkZWQgbXkgZXZlbnQgc3dpZnRseS4gSSBsb3ZlIHRoZSBpZGVhIG9mIGRpc3RyaWJ1dGVkIGZpbmFuY2UuYCxcbiAgfSxcbl07XG5cbmNvbnN0IFNvY2lhbFByb29mID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEluZGV4ICsgMSA8IHNvY2lhbFByb29mcy5sZW5ndGgpIHtcbiAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCAtIDEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgY29udGFpbmVyIG14LWF1dG8gbXktOGApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWF4LXctN3hsIG14LWF1dG9gKX0+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYHJlbGF0aXZlIGJnLXdoaXRlYCl9PlxuICAgICAgICAgICAgICA8UXVvdGUgY2xhc3NOYW1lPXt0dyhgdy0xNiBtZDp3LTEyIGxlZnQtMCBtZDotbGVmdC0yIGFic29sdXRlIHRvcC0wIHBsLTQgbWQ6cGwtMCB0ZXh0LWdyYXktMzAwYCl9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHQtMjAgcHgtNiBtZDpweC0wYCl9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dHcoYHRleHQtZ3JheS02MDAgdGV4dC1iYXNlIHBiLTZgKX0+e3NvY2lhbFByb29mc1tjdXJyZW50SW5kZXhdLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuYCl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4IGl0ZW1zLWNlbnRlciBwYi0xMmApfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBoLTEyIHctMTJgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzb2NpYWxQcm9vZnNbY3VycmVudEluZGV4XS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c29jaWFsUHJvb2ZzW2N1cnJlbnRJbmRleF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHcoYGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGxgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDh9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDh9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dHcoYHRleHQtZ3JheS02MDAgZm9udC1ib2xkIG1sLTNgKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3NvY2lhbFByb29mc1tjdXJyZW50SW5kZXhdLm5hbWV9IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dHcoYHRleHQtZ3JheS02MDAgdGV4dC1iYXNlIGZvbnQtbGlnaHRgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c29jaWFsUHJvb2ZzW2N1cnJlbnRJbmRleF0uY29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBjdXJzb3ItcG9pbnRlciBmbGV4IHBiLTEyYCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ0fVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDR9XG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNDQkQ1RTBcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZpb3VzfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTUgNiA5IDEyIDE1IDE4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDR9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NH1cbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0NCRDVFMFwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV4dH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjkgNiAxNSAxMiA5IDE4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxQcm9vZjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/social-proof/index.tsx\n");

/***/ })

})