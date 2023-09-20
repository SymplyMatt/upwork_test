"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



const isCorrectCredentials = credentials => credentials.username === process.env.NEXTAUTH_USERNAME && credentials.password === process.env.NEXTAUTH_PASSWORD;

const options = {
  providers: [providers_default().Credentials({
    name: 'credentials',
    credentials: {
      username: {
        label: "Username",
        type: "text"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },
    authorize: async (credentials, req) => {
      if (isCorrectCredentials(credentials)) {
        const user = {
          id: 1,
          name: "Admin"
        };
        return Promise.resolve(user);
      } else {
        return Promise.resolve(null);
      }
    }
  })],
  callbacks: {
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    }

  },
  pages: {
    signIn: '/admin/login' // signOut: '/admin/login',
    // error: '/admin/login', // Error code passed in query string as ?error=
    // verifyRequest: '/admin/login', // (used for check email message)
    // newUser: null 

  }
};
/* harmony default export */ const _nextauth_ = ((req, res) => external_next_auth_default()(req, res, options));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(555));
module.exports = __webpack_exports__;

})();