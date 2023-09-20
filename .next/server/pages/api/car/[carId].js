"use strict";
(() => {
var exports = {};
exports.id = 8422;
exports.ids = [8422];
exports.modules = {

/***/ 4414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const {
    method
  } = req;
  const {
    carId
  } = JSON.parse(req.query);

  switch (method) {
    case 'GET':
      // Get data from database with carId
      const car = await prisma.car.findUnique({
        where: {
          model: carId
        }
      });
      res.status(200).json(car);
      break;
  }
});

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4414));
module.exports = __webpack_exports__;

})();