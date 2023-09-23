"use strict";
(() => {
var exports = {};
exports.id = 7052;
exports.ids = [7052];
exports.modules = {

/***/ 2163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_excessimages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9197);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9376);





const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });
  const {
    method,
    body
  } = req;
  const data = JSON.parse(body);
  if (!session) res.status(501).json({
    message: 'permission denied'
  });
  if (method !== 'DELETE') res.status(501).json({
    message: 'bad mathod'
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(_components_Constants__WEBPACK_IMPORTED_MODULE_4__.EXTERNAL_API + '/delete', {
    id: data.id
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const resData = response.data.car;
  console.log(resData); // const deleteCar = await prisma.car.delete({
  //     where: {
  //         id: data.id
  //     }
  // });
  // const deleteExcessImages = await excessimages();

  res.status(200).json(body);
});

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6593], () => (__webpack_exec__(2163)));
module.exports = __webpack_exports__;

})();