"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/Blogs.tsx":
/*!**********************************!*\
  !*** ./src/components/Blogs.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\components\\\\Blogs.tsx\";\n\n\n\nconst Blogs = props => {\n  const {\n    blogs\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: blogs && blogs[0] && blogs.map((each, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-testid\": \"mainDiv\",\n        style: {\n          paddingRight: 30\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            justifyContent: \"space-between\",\n            lineHeight: 2\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n              fontSize: 20,\n              fontWeight: 500\n            },\n            children: each.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: each.user?.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: each.blog\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 15\n        }, undefined)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, undefined);\n    })\n  }, void 0, false);\n};\n\n_c = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blogs\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9ncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQThCQSxNQUFNQSxLQUFLLEdBQUlDLEtBQUQsSUFBMkI7RUFDdkMsTUFBTTtJQUFFQztFQUFGLElBQVlELEtBQWxCO0VBQ0Esb0JBQ0U7SUFBQSxVQUNHQyxLQUFLLElBQ0pBLEtBQUssQ0FBQyxDQUFELENBRE4sSUFFQ0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO01BQ3pCLG9CQUNFO1FBQUssZUFBWSxTQUFqQjtRQUF1QyxLQUFLLEVBQUU7VUFBRUMsWUFBWSxFQUFFO1FBQWhCLENBQTlDO1FBQUEsd0JBQ0U7VUFDRSxLQUFLLEVBQUU7WUFDTEMsT0FBTyxFQUFFLE1BREo7WUFFTEMsYUFBYSxFQUFFLEtBRlY7WUFHTEMsY0FBYyxFQUFFLGVBSFg7WUFJTEMsVUFBVSxFQUFFO1VBSlAsQ0FEVDtVQUFBLHdCQVFFO1lBQU0sS0FBSyxFQUFFO2NBQUVDLFFBQVEsRUFBRSxFQUFaO2NBQWdCQyxVQUFVLEVBQUU7WUFBNUIsQ0FBYjtZQUFBLFVBQWlEUixJQUFJLENBQUNTO1VBQXREO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFSRixlQVNFO1lBQUEsVUFBT1QsSUFBSSxDQUFDVSxJQUFMLEVBQVdDO1VBQWxCO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFURjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFERixlQVlFO1VBQUEsVUFBSVgsSUFBSSxDQUFDWTtRQUFUO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFaRixlQWFFO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFiRjtNQUFBLEdBQWdDWCxLQUFoQztRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREY7SUFpQkQsQ0FsQkQ7RUFISixpQkFERjtBQXlCRCxDQTNCRDs7S0FBTUw7QUE2Qk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZ3MudHN4P2U0ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEpTWEVsZW1lbnRDb25zdHJ1Y3RvcixcclxuICBLZXksXHJcbiAgUmVhY3RFbGVtZW50LFxyXG4gIFJlYWN0RnJhZ21lbnQsXHJcbiAgUmVhY3RQb3J0YWwsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBibG9nc0RhdGFQcm9wcyA9IHtcclxuICBibG9nczoge1xyXG4gICAgdGl0bGU6IFN0cmluZztcclxuICAgIGJsb2c6IFN0cmluZztcclxuICAgIGNyZWF0ZWRBdDogU3RyaW5nO1xyXG4gICAgTGFzdFVwZGF0ZWQ6IFN0cmluZztcclxuICAgIGlkOiBOdW1iZXI7XHJcbiAgICB1c2VyPzogVXNlckFycmF5O1xyXG4gIH1bXTtcclxufTtcclxuXHJcbnR5cGUgVXNlckFycmF5ID0ge1xyXG4gIExhc3RVcGRhdGVkOiBTdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBTdHJpbmc7XHJcbiAgZW1haWw6IFN0cmluZztcclxuICBuYW1lOiBTdHJpbmc7XHJcbiAgaWQ6IE51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IEJsb2dzID0gKHByb3BzOiBibG9nc0RhdGFQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYmxvZ3MgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YmxvZ3MgJiZcclxuICAgICAgICBibG9nc1swXSAmJlxyXG4gICAgICAgIGJsb2dzLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9J21haW5EaXYnIGtleT17aW5kZXh9IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMzB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IDUwMCB9fT57ZWFjaC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57ZWFjaC51c2VyPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD57ZWFjaC5ibG9nfTwvcD5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ3M7XHJcbiJdLCJuYW1lcyI6WyJCbG9ncyIsInByb3BzIiwiYmxvZ3MiLCJtYXAiLCJlYWNoIiwiaW5kZXgiLCJwYWRkaW5nUmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlIiwidXNlciIsIm5hbWUiLCJibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Blogs.tsx\n"));

/***/ })

});