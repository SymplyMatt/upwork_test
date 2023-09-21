"use strict";
(() => {
var exports = {};
exports.id = 3291;
exports.ids = [3291,9376];
exports.modules = {

/***/ 9376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "LINKS": () => (/* binding */ LINKS),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL)
/* harmony export */ });
// development server constants
const BASE_URL = "https://upworktest-jprq.onrender.com/"; // test server constants
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

/***/ 2680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var base64_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9033);
/* harmony import */ var base64_img__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(base64_img__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9376);
/* harmony import */ var _utils_excessimages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9197);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);








const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
  __internal: {
    useUds: true
  }
});
const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb'
    }
  }
};

function saveFile(file) {
  const fileName = (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)();
  const uploadPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), 'public', 'upload');
  const fileP = base64_img__WEBPACK_IMPORTED_MODULE_4___default().imgSync(file, uploadPath, fileName);
  const fileurl = '/' + fileP.split((path__WEBPACK_IMPORTED_MODULE_3___default().sep)).splice(-2).join('/');
  return fileurl;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });

  if (session) {
    const {
      method,
      body
    } = req;

    if (method == 'PUT') {
      const data = JSON.parse(body);
      const images = JSON.parse(data.Images);
      const iPrep = images.map(image => {
        if (image.match('base64')) {
          return saveFile(image);
        } else {
          return image;
        }
      }); // {...data, Images: JSON.stringify(iPrep)}

      const dataUpdate = {
        id: parseInt(data.id),
        model: data.model,
        Year: parseInt(data.Year),
        Engine: data.Engine,
        Fuel: data.Fuel,
        Transmission: data.Transmission,
        Doors: parseInt(data.Doors),
        Consumption: parseInt(data.Consumption),
        Day: parseInt(data.Day),
        Sixday: parseInt(data.Sixday),
        Week: parseInt(data.Week),
        Month: parseInt(data.Month),
        Images: JSON.stringify(iPrep)
      };
      const updateCar = await prisma.car.update({
        where: {
          id: dataUpdate.id
        },
        data: dataUpdate
      });
      const deleteExcessImages = await (0,_utils_excessimages__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
      res.status(200).json({
        updateCar,
        deleteExcessImages
      });
    }
  } else {
    redirect('/admin/login');
  }
});

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9033:
/***/ ((module) => {

module.exports = require("base64-img");

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

/***/ }),

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9197], () => (__webpack_exec__(2680)));
module.exports = __webpack_exports__;

})();