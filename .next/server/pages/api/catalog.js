"use strict";
(() => {
var exports = {};
exports.id = 2527;
exports.ids = [2527];
exports.modules = {

/***/ 6767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
 // import initMiddleware from "../../utils/init-middleware"
// import Cors from 'cors'
// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const cars = await prisma.car.findMany();
  res.status(200).json(cars);
});

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6767));
module.exports = __webpack_exports__;

})();