webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),\n    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),\n    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),\n    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);\n\n\n\n\n\nfunction logInAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', data);\n}\n\nfunction logIn(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_SUCCESS\"],\n            data: action.data\n          });\n\n        case 5:\n          _context.next = 11;\n          break;\n\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_FAILURE\"],\n            error: _context.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 7]]);\n}\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');\n}\n\nfunction logOut() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context2.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_SUCCESS\"]\n          });\n\n        case 5:\n          _context2.next = 11;\n          break;\n\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2[\"catch\"](0);\n          _context2.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_FAILURE\"],\n            error: _context2.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, null, [[0, 7]]);\n}\n\nfunction signUpAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');\n}\n\nfunction signUp() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context3.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_SUCCESS\"]\n          });\n\n        case 5:\n          _context3.next = 11;\n          break;\n\n        case 7:\n          _context3.prev = 7;\n          _context3.t0 = _context3[\"catch\"](0);\n          _context3.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_FAILURE\"],\n            error: _context3.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 7]]);\n}\n\nfunction watchFollow() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"FOLLOW_REQUEST\"], follow);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction watchUnfollow() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"UNFOLLOW_REQUEST\"], unfollow);\n\n        case 2:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5);\n}\n\nfunction watchLogIn() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_IN_REQUEST\"], logIn);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_REQUEST\"], logOut);\n\n        case 2:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7);\n}\n\nfunction watchSignUp() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_UP_REQUEST\"], signUp);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction userSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchSignUp)]);\n\n        case 2:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9hMzg2Il0sIm5hbWVzIjpbImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkZPTExPV19SRVFVRVNUIiwiZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsInVuZm9sbG93IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tHQWVVQSxLO21HQW9CQUMsTTttR0FtQkFDLE07bUdBZUFDLFc7bUdBSUFDLGE7bUdBSUFDLFU7bUdBSUFDLFc7bUdBSUFDLFc7bUdBSWVDLFE7O0FBekZ6QjtBQUNBO0FBRUE7O0FBUUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFVVixLQUFWLENBQWdCYSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUMsNkRBREU7QUFFUlAsZ0JBQUksRUFBRUcsTUFBTSxDQUFDSDtBQUZMLFdBQUQsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSSxpQkFBTUssOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFRSw2REFERTtBQUVSQyxpQkFBSyxFQUFFLFlBQUlDLFFBQUosQ0FBYVY7QUFGWixXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JBLFNBQVNXLFNBQVQsR0FBcUI7QUFDbkIsU0FBT1YsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVYLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTWEsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUlJLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVNLDhEQUFlQTtBQURiLFdBQUQsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSSxpQkFBTVAsOERBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFTyw4REFERTtBQUVSSixpQkFBSyxFQUFFLGFBQUlDLFFBQUosQ0FBYVY7QUFGWixXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBU2MsU0FBVCxHQUFxQjtBQUNuQixTQUFPYiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBVVYsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNWSxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRVMsOERBQWVBO0FBRGIsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFJLGlCQUFNViw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVVLDhEQURFO0FBRVJQLGlCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhVjtBQUZaLFdBQUQsQ0FBVDs7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFVUCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNd0IscUVBQVUsQ0FBQ0MsNkRBQUQsRUFBaUJDLE1BQWpCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVV6QixhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNdUIscUVBQVUsQ0FBQ0csK0RBQUQsRUFBbUJDLFFBQW5CLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVUxQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNc0IscUVBQVUsQ0FBQ0ssNkRBQUQsRUFBaUJoQyxLQUFqQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNcUIscUVBQVUsQ0FBQ00sOERBQUQsRUFBa0JoQyxNQUFsQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNb0IscUVBQVUsQ0FBQ08sOERBQUQsRUFBa0JoQyxNQUFsQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVTSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNMkIsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDakMsV0FBRCxDQURJLEVBRVJpQywrREFBSSxDQUFDaEMsYUFBRCxDQUZJLEVBR1JnQywrREFBSSxDQUFDL0IsVUFBRCxDQUhJLEVBSVIrQiwrREFBSSxDQUFDOUIsV0FBRCxDQUpJLEVBS1I4QiwrREFBSSxDQUFDN0IsV0FBRCxDQUxJLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIGRlbGF5LCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHtcbiAgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCxcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXG4gICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgXSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ })

})