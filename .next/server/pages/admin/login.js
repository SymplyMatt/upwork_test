"use strict";
(() => {
var exports = {};
exports.id = 2300;
exports.ids = [2300];
exports.modules = {

/***/ 3494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _styles_admin_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3861);
/* harmony import */ var _styles_admin_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function Login({
  csrfToken
}) {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  function hundleSubmit(e) {
    e.preventDefault();
    (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.signIn)('credentials', {
      username,
      password,
      callbackUrl: `${window.location.origin}/admin`
    });
  }

  function hundleChange(e) {
    const field = e.target;

    if (field.name == 'username') {
      setUsername(field.value);
    }

    if (field.name == 'password') {
      setPassword(field.value);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_styles_admin_module_sass__WEBPACK_IMPORTED_MODULE_4___default().auth),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
      children: "Sign In"
    }), router.query.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_styles_admin_module_sass__WEBPACK_IMPORTED_MODULE_4___default()["auth-error"]),
      children: "Error!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
      onSubmit: hundleSubmit,
      onChange: hundleChange,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        name: "csrfToken",
        type: "hidden",
        defaultValue: csrfToken
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          value: username,
          type: "text",
          name: "username"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          value: password,
          type: "password",
          name: "password"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        type: "submit",
        className: "button",
        children: "Login"
      })]
    })]
  });
}
async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getCsrfToken)(context)
    }
  };
} //   import styles from '../../styles/admin.module.sass'
// import { getCsrfToken } from 'next-auth/client'
// export default function SignIn({ csrfToken }) {
//     return (
//         <div className={styles["auth"]}>
//             <h1>Sign In</h1>
//             <form method='post' action='/api/auth/signin/credentials'>
//             <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
//                 <label>
//                     <input type="text" name="username" />
//                 </label>
//                 <label>
//                     <input type="password" name="password" />
//                 </label>
//                 <button type="submit" className="button">Login</button>
//             </form>
//         </div>
//     )
// }
// export async function getServerSideProps(context) {
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context)
//       }
//     }
//   }

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3861], () => (__webpack_exec__(3494)));
module.exports = __webpack_exports__;

})();