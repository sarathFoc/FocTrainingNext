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

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getBlogHeader\": function() { return /* binding */ getBlogHeader; }\n/* harmony export */ });\n/* harmony import */ var _components_BlogModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BlogModal */ \"./src/components/BlogModal.tsx\");\n/* harmony import */ var _components_Blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Blogs */ \"./src/components/Blogs.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _subcomponents_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcomponents/button */ \"./src/subcomponents/button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // import { getblogModal } from \"../apis/apis\";\n\n\n\n\nconst Home = props => {\n  _s();\n\n  console.log(\"props\", props.blogHeader);\n  const blogHeder = props.blogHeader[0].fields;\n  const {\n    0: blogData,\n    1: setBlogData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: showBlogModal,\n    1: setShowBlogModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: blogPageForm,\n    1: setBlogPageForm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: blogModal,\n    1: setBlogModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n\n  const fetchBlogPageData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogPage\").then(res => {\n      setBlogPageForm(res.data?.includes.Entry);\n    });\n  };\n\n  const getBlogs = () => {\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blog\").then(res => {\n      setBlogData(res.data);\n    });\n  };\n\n  const getblogModal = () => {\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogModal\").then(res => {\n      console.log(\"blogModal data\", res);\n      setBlogModal(res.data?.includes.Entry);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    fetchBlogPageData();\n    getBlogs();\n    getblogModal();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      blogHeader: blogHeder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      \"data-testid\": \"NavigationBarmainDiv\",\n      children: [blogPageForm && blogPageForm[0] && blogPageForm.map((each, index) => {\n        console.log(\"each\", each);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            \"data-testid\": each[\"fields\"][\"friendlyName\"],\n            style: {\n              display: \"flex\",\n              justifyContent: \"space-between\",\n              paddingLeft: 20\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              \"data-testid\": \"tertiary-div\",\n              style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                marginTop: 20,\n                justifyContent: \"space-between\",\n                paddingRight: 20\n              },\n              children: each[\"fields\"][\"friendlyName\"] === \"create\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_subcomponents_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                color: each[\"fields\"][\"theme\"],\n                text: each[\"fields\"][\"text\"],\n                handleButtonAction: () => setShowBlogModal(true)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 25\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        \"data-testid\": \"blogsDiv\",\n        style: {\n          marginLeft: 20\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Blogs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          blogs: blogData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, undefined), blogPageForm && blogPageForm[0] && blogPageForm.map((each, index) => {\n        if (each[\"fields\"][\"friendlyName\"] === \"footer\") {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            blogFooter: each[\"fields\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 22\n          }, undefined);\n        }\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_BlogModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      closeBlogModal: () => setShowBlogModal(false),\n      showBlogModal: showBlogModal,\n      blogdata: blogModal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Home, \"yP7m+g4bBXWXVx5eR+65t6cmVkc=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst getBlogHeader = async () => {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogHeader\").then(res => {\n    return res.data; // setBlogData(res.data)\n  });\n  return result.items;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBZjtBQUVPLE1BQU1rQyxhQUFhLEdBQUcsWUFBWTtFQUN2QyxNQUFNQyxNQUFNLEdBQUcsTUFBTXZDLGlEQUFBLENBQ2Qsa0NBRGMsRUFFbEJxQixJQUZrQixDQUVaQyxHQUFELElBQVM7SUFDYixPQUFPQSxHQUFHLENBQUNDLElBQVgsQ0FEYSxDQUViO0VBQ0QsQ0FMa0IsQ0FBckI7RUFNQSxPQUFPZ0IsTUFBTSxDQUFDQyxLQUFkO0FBQ0QsQ0FSTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS50c3g/OTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQmxvZ01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dNb2RhbFwiO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQnV0dG9uTW9kZWwgZnJvbSBcIi4uL3N1YmNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbi8vIGltcG9ydCB7IGdldGJsb2dNb2RhbCB9IGZyb20gXCIuLi9hcGlzL2FwaXNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHM6IHsgYmxvZ0hlYWRlcjogYW55IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzLmJsb2dIZWFkZXIpXHJcbiAgY29uc3QgYmxvZ0hlZGVyID0gcHJvcHMuYmxvZ0hlYWRlclswXS5maWVsZHM7XHJcblxyXG4gIGNvbnN0IFtibG9nRGF0YSwgc2V0QmxvZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG93QmxvZ01vZGFsLCBzZXRTaG93QmxvZ01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYmxvZ1BhZ2VGb3JtLCBzZXRCbG9nUGFnZUZvcm1dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtibG9nTW9kYWwsIHNldEJsb2dNb2RhbF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoQmxvZ1BhZ2VEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Jsb2dQYWdlXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRCbG9nUGFnZUZvcm0ocmVzLmRhdGE/LmluY2x1ZGVzLkVudHJ5KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEJsb2dzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Jsb2dcIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEJsb2dEYXRhKHJlcy5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldGJsb2dNb2RhbCA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nTW9kYWxcIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmxvZ01vZGFsIGRhdGFcIiwgcmVzKTtcclxuICAgICAgc2V0QmxvZ01vZGFsKHJlcy5kYXRhPy5pbmNsdWRlcy5FbnRyeSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hCbG9nUGFnZURhdGEoKTtcclxuICAgIGdldEJsb2dzKCk7XHJcbiAgICBnZXRibG9nTW9kYWwoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2aWdhdGlvbkJhciAgIGJsb2dIZWFkZXI9e2Jsb2dIZWRlcn0gLz5cclxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD0nTmF2aWdhdGlvbkJhcm1haW5EaXYnPlxyXG4gICAgICAgIHtibG9nUGFnZUZvcm0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybVswXSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlYWNoXCIsZWFjaClcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17ZWFjaFtcImZpZWxkc1wiXVtcImZyaWVuZGx5TmFtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD0ndGVydGlhcnktZGl2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VhY2hbXCJmaWVsZHNcIl1bXCJmcmllbmRseU5hbWVcIl0gPT09IFwiY3JlYXRlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uTW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZWFjaFtcImZpZWxkc1wiXVtcInRoZW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2VhY2hbXCJmaWVsZHNcIl1bXCJ0ZXh0XCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJ1dHRvbkFjdGlvbj17KCkgPT4gc2V0U2hvd0Jsb2dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgIGRhdGEtdGVzdGlkPSdibG9nc0Rpdicgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX0+XHJcbiAgICAgICAgICA8QmxvZ3MgYmxvZ3M9e2Jsb2dEYXRhfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7YmxvZ1BhZ2VGb3JtICYmXHJcbiAgICAgICAgICBibG9nUGFnZUZvcm1bMF0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybS5tYXAoKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlYWNoW1wiZmllbGRzXCJdW1wiZnJpZW5kbHlOYW1lXCJdID09PSBcImZvb3RlclwiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxGb290ZXIgYmxvZ0Zvb3Rlcj17ZWFjaFtcImZpZWxkc1wiXX0gLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJsb2dNb2RhbFxyXG4gICAgICAgIGNsb3NlQmxvZ01vZGFsPXsoKSA9PiBzZXRTaG93QmxvZ01vZGFsKGZhbHNlKX1cclxuICAgICAgICBzaG93QmxvZ01vZGFsPXtzaG93QmxvZ01vZGFsfVxyXG4gICAgICAgIGJsb2dkYXRhPXtibG9nTW9kYWx9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9nSGVhZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Jsb2dIZWFkZXJcIilcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgICAvLyBzZXRCbG9nRGF0YShyZXMuZGF0YSlcclxuICAgIH0pO1xyXG4gIHJldHVybiByZXN1bHQuaXRlbXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6ICgpID0+IFByb21pc2U8e1xyXG4gIHByb3BzOiB7XHJcbiAgICBibG9nSGVhZGVyOiBhbnk7XHJcbiAgfTtcclxufT4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCbG9nSGVhZGVyKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGJsb2dIZWFkZXI6IHJlc3BvbnNlLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiQmxvZ01vZGFsIiwiQmxvZ3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTmF2aWdhdGlvbkJhciIsIkZvb3RlciIsIkJ1dHRvbk1vZGVsIiwiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImJsb2dIZWFkZXIiLCJibG9nSGVkZXIiLCJmaWVsZHMiLCJibG9nRGF0YSIsInNldEJsb2dEYXRhIiwic2hvd0Jsb2dNb2RhbCIsInNldFNob3dCbG9nTW9kYWwiLCJibG9nUGFnZUZvcm0iLCJzZXRCbG9nUGFnZUZvcm0iLCJibG9nTW9kYWwiLCJzZXRCbG9nTW9kYWwiLCJmZXRjaEJsb2dQYWdlRGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaW5jbHVkZXMiLCJFbnRyeSIsImdldEJsb2dzIiwiZ2V0YmxvZ01vZGFsIiwibWFwIiwiZWFjaCIsImluZGV4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luTGVmdCIsImdldEJsb2dIZWFkZXIiLCJyZXN1bHQiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});