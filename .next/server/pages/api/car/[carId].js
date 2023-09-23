"use strict";
(() => {
var exports = {};
exports.id = 8422;
exports.ids = [8422,9376];
exports.modules = {

/***/ 9376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "EXTERNAL_API": () => (/* binding */ EXTERNAL_API),
/* harmony export */   "LINKS": () => (/* binding */ LINKS),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL)
/* harmony export */ });
// development server constants
const BASE_URL = "http://localhost:3000/";
const EXTERNAL_API = "https://backend-autorent-c39b3d74adff.herokuapp.com/car"; // test server constants
// export const BASE_URL = process.env.BASE_URL
// export const BASE_URL = "http://81.177.48.218:9995/"

const LINKS = {
  mapAddress: 'https://goo.gl/maps/GpNUmh4JMXHcN32w8',
  phone: 'tel:+3725535603',
  email: 'mailto:redautorent@gmail.com',
  facebook: 'https://www.facebook.com/www.redautorent.ee',
  instagram: 'https://www.instagram.com/redautorent/'
};
const EMAIL = 'redautorent@gmail.com'; // export const EMAIL = 'redautorentestonia@gmail.com'

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9376);




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
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(process.env.EXTERNAL_API + '/getCar', {
        id: carId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const resData = response.data.car; // const car = await prisma.car.findUnique({
      //     where: {
      //         model: carId
      //     }
      // });

      res.status(200).json(resData);
      break;
  }
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