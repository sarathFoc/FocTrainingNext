"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logIn",{

/***/ "./src/pages/logIn.tsx":
/*!*****************************!*\
  !*** ./src/pages/logIn.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _subcomponents_textInputWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/textInputWithLabel */ \"./src/subcomponents/textInputWithLabel.tsx\");\n/* harmony import */ var _subcomponents_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcomponents/button */ \"./src/subcomponents/button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\logIn.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LogIn = props => {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    0: textInputForms,\n    1: setTextInputForms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: welcomeText,\n    1: setWelcomeText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: buttonForms,\n    1: setButtonForms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: inputDatas,\n    1: setInputDats\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n\n  const handleButtonAction = async () => {\n    console.log(\"inputDatas\", inputDatas);\n\n    if (!inputDatas.password) {\n      return alert(\"Please enter your password\");\n    } else if (!/\\S+@\\S+\\.\\S+/.test(inputDatas.email)) {\n      return alert(\"Please enter a valid email\");\n    }\n\n    await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://localhost:8000/auth/login\", inputDatas).then(res => {\n      localStorage.setItem(\"access_token\", res.data.access_token);\n      router.push(\"/home\");\n    }).catch(err => {\n      console.log(\"err\", err);\n      alert(\"Log In failed\");\n    });\n  };\n\n  const handleInputData = e => {\n    setInputDats(oldState => {\n      oldState[e.target.name] = e.target.value;\n      return oldState;\n    });\n  };\n\n  const getLogInPageData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:8000/logInPage\").then(res => {\n      console.log(\"3FlD6Q9CUIdP4AkM7GZFwn\", res.data);\n      res.data?.includes.Entry.forEach(each => {\n        if (each.fields.placeholder) {\n          setTextInputForms(oldElement => [...oldElement, each]);\n        } else if (each.fields.welcomeText) {\n          setWelcomeText(each.fields.welcomeText.content[0].content[0].value);\n        } else if (each.fields.theme) {\n          setButtonForms(oldElement => [...oldElement, each]);\n        }\n      });\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getLogInPageData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    \"data-test-id\": \"container\",\n    fluid: true,\n    style: {\n      width: \"100%\",\n      marginLeft: \"10%\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n      style: {\n        marginTop: \"25vh\",\n        marginBottom: 50,\n        color: \"#d40c0c\"\n      },\n      children: welcomeText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, undefined), textInputForms && textInputForms[0] && textInputForms.map((each, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        style: {\n          marginRight: \"50%\",\n          marginBottom: 20\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_subcomponents_textInputWithLabel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          each: each[\"fields\"],\n          handleChangeData: e => handleInputData(e)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 15\n        }, undefined)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }, undefined);\n    }), buttonForms && buttonForms[0] && buttonForms.map((each, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        style: {\n          marginTop: 10,\n          display: \"flex\"\n        },\n        children: [each[\"fields\"][\"text\"] === \"Log In\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          style: {\n            marginRight: 10\n          },\n          children: \"Already have an acoount?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_subcomponents_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          color: each[\"fields\"][\"theme\"],\n          text: each[\"fields\"][\"text\"],\n          handleButtonAction: () => handleButtonAction()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, undefined);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(LogIn, \"EgmThT0JGR8I5i60RIySFwnT5hM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = LogIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogIn);\n\nvar _c;\n\n$RefreshReg$(_c, \"LogIn\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRTtVQUFFSixTQUFTLEVBQUUsRUFBYjtVQUFpQk0sT0FBTyxFQUFFO1FBQTFCLENBQVo7UUFBQSxXQUNHZCxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWUsTUFBZixNQUEyQixRQUEzQixpQkFDQztVQUFHLEtBQUssRUFBRTtZQUFFYSxXQUFXLEVBQUU7VUFBZixDQUFWO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBRkosZUFLRSw4REFBQyw2REFBRDtVQUNFLEtBQUssRUFBRWIsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlLE9BQWYsQ0FEVDtVQUVFLElBQUksRUFBRUEsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlLE1BQWYsQ0FGUjtVQUdFLGtCQUFrQixFQUFFLE1BQU01QixrQkFBa0I7UUFIOUM7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUxGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGO0lBYUQsQ0FkRCxDQTFCSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQTRDRCxDQW5HRDs7R0FBTVg7VUFDV0g7OztLQURYRztBQXFHTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9nSW4udHN4P2MyMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFRleHRJbnB1dFdpdGhMYWJlbCBmcm9tIFwiLi4vc3ViY29tcG9uZW50cy90ZXh0SW5wdXRXaXRoTGFiZWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc3ViY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmNvbnN0IExvZ0luID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3RleHRJbnB1dEZvcm1zLCBzZXRUZXh0SW5wdXRGb3Jtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3dlbGNvbWVUZXh0LCBzZXRXZWxjb21lVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV0dG9uRm9ybXMsIHNldEJ1dHRvbkZvcm1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXREYXRhcywgc2V0SW5wdXREYXRzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbnB1dERhdGFzXCIsIGlucHV0RGF0YXMpO1xyXG5cclxuICAgIGlmICghaW5wdXREYXRhcy5wYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGlucHV0RGF0YXMuZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1dGgvbG9naW5cIiwgaW5wdXREYXRhcylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIsIHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XHJcbiAgICAgICAgYWxlcnQoXCJMb2cgSW4gZmFpbGVkXCIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dERhdGEgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRJbnB1dERhdHMoKG9sZFN0YXRlKSA9PiB7XHJcbiAgICAgIG9sZFN0YXRlW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIHJldHVybiBvbGRTdGF0ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldExvZ0luUGFnZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbG9nSW5QYWdlXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIjNGbEQ2UTlDVUlkUDRBa003R1pGd25cIiwgcmVzLmRhdGEpO1xyXG4gICAgICByZXMuZGF0YT8uaW5jbHVkZXMuRW50cnkuZm9yRWFjaCgoZWFjaDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGVhY2guZmllbGRzLnBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICBzZXRUZXh0SW5wdXRGb3Jtcygob2xkRWxlbWVudCkgPT4gWy4uLm9sZEVsZW1lbnQsIGVhY2hdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVhY2guZmllbGRzLndlbGNvbWVUZXh0KSB7XHJcbiAgICAgICAgICBzZXRXZWxjb21lVGV4dChlYWNoLmZpZWxkcy53ZWxjb21lVGV4dC5jb250ZW50WzBdLmNvbnRlbnRbMF0udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWFjaC5maWVsZHMudGhlbWUpIHtcclxuICAgICAgICAgIHNldEJ1dHRvbkZvcm1zKChvbGRFbGVtZW50KSA9PiBbLi4ub2xkRWxlbWVudCwgZWFjaF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TG9nSW5QYWdlRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgZGF0YS10ZXN0LWlkPSdjb250YWluZXInIGZsdWlkIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luTGVmdDogXCIxMCVcIiB9fT5cclxuICAgICAgPGgyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpblRvcDogXCIyNXZoXCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDUwLFxyXG4gICAgICAgICAgY29sb3I6IFwiI2Q0MGMwY1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7d2VsY29tZVRleHR9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICB7dGV4dElucHV0Rm9ybXMgJiZcclxuICAgICAgICB0ZXh0SW5wdXRGb3Jtc1swXSAmJlxyXG4gICAgICAgIHRleHRJbnB1dEZvcm1zLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogMjAgfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFRleHRJbnB1dFdpdGhMYWJlbFxyXG4gICAgICAgICAgICAgICAgZWFjaD17ZWFjaFtcImZpZWxkc1wiXX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZURhdGE9eyhlKSA9PiBoYW5kbGVJbnB1dERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG5cclxuICAgICAge2J1dHRvbkZvcm1zICYmXHJcbiAgICAgICAgYnV0dG9uRm9ybXNbMF0gJiZcclxuICAgICAgICBidXR0b25Gb3Jtcy5tYXAoKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgIHtlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXSA9PT0gXCJMb2cgSW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+QWxyZWFkeSBoYXZlIGFuIGFjb291bnQ/PC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtlYWNoW1wiZmllbGRzXCJdW1widGhlbWVcIl19XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUJ1dHRvbkFjdGlvbj17KCkgPT4gaGFuZGxlQnV0dG9uQWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0luO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsInVzZVJvdXRlciIsIlRleHRJbnB1dFdpdGhMYWJlbCIsIkJ1dHRvbiIsIkxvZ0luIiwicHJvcHMiLCJyb3V0ZXIiLCJ0ZXh0SW5wdXRGb3JtcyIsInNldFRleHRJbnB1dEZvcm1zIiwid2VsY29tZVRleHQiLCJzZXRXZWxjb21lVGV4dCIsImJ1dHRvbkZvcm1zIiwic2V0QnV0dG9uRm9ybXMiLCJpbnB1dERhdGFzIiwic2V0SW5wdXREYXRzIiwiaGFuZGxlQnV0dG9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhc3N3b3JkIiwiYWxlcnQiLCJ0ZXN0IiwiZW1haWwiLCJwb3N0IiwidGhlbiIsInJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiYWNjZXNzX3Rva2VuIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiaGFuZGxlSW5wdXREYXRhIiwiZSIsIm9sZFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0TG9nSW5QYWdlRGF0YSIsImdldCIsImluY2x1ZGVzIiwiRW50cnkiLCJmb3JFYWNoIiwiZWFjaCIsImZpZWxkcyIsInBsYWNlaG9sZGVyIiwib2xkRWxlbWVudCIsImNvbnRlbnQiLCJ0aGVtZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwibWFwIiwiaW5kZXgiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/logIn.tsx\n"));

/***/ })

});