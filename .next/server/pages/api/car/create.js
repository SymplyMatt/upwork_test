"use strict";
(() => {
var exports = {};
exports.id = 8556;
exports.ids = [8556,9376];
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
const EXTERNAL_API = "http://localhost:8000/car"; // test server constants
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

/***/ 6574:
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9376);








const cloudinary = __webpack_require__(6411).v2;

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({});

const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb'
    }
  }
}; // Configure Cloudinary with your credentials

cloudinary.config({
  cloud_name: 'damltcdhl',
  api_key: '289714989896362',
  api_secret: 'wiqdgXyqTszEnWI_0POx6jM9P-0'
});

function saveFile(file, index) {
  // const fileName = Date.now() + "_" + index
  const fileName = uuidv4();
  const uploadPath = path.join(process.cwd(), 'public', 'upload');
  const fileP = base64Img.imgSync(file, uploadPath, fileName);
  const fileurl = '/' + fileP.split(path.sep).splice(-2).join('/');
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
      const images = data.Images; // const iPrep = images.map((image, index) => {
      //     if (image.match('base64')) {
      //         return saveFile(image, index)
      //     } else {
      //         return image
      //     }
      // })
      // Base64-encoded image data

      const uploadImages = async () => {
        let imageUrls = [];
        const uploadResults = await images.map(async image => {
          // Upload the image
          try {
            const res = await cloudinary.uploader.upload(image, {
              resource_type: 'image'
            }, async (error, result) => {
              imageUrls.push(result.secure_url);

              if (error) {
                console.error('Error uploading image:', error);
              } else {
                console.log('Image uploaded:', result.secure_url);
              }
            });
          } catch (error) {}
        });
        const awaitPromises = await Promise.all(uploadResults);
        return imageUrls;
      };

      const dataToSend = {
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
        // Images: JSON.stringify(images)
        Images: await uploadImages()
      };
      console.log('data sent: ', dataToSend);
      const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(_components_Constants__WEBPACK_IMPORTED_MODULE_7__.EXTERNAL_API + '/create', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const resData = response.data.newCar;
      console.log('data received: ', resData); // const dataCreate = {
      //     model: data.model,
      //     Year: parseInt(data.Year),
      //     Engine: data.Engine,
      //     Fuel: data.Fuel,
      //     Transmission: data.Transmission,
      //     Doors: parseInt(data.Doors),
      //     Consumption: parseInt(data.Consumption),
      //     Day: parseInt(data.Day),
      //     Sixday: parseInt(data.Sixday),
      //     Week: parseInt(data.Week),
      //     Month: parseInt(data.Month),
      //     Images: JSON.stringify(iPrep)
      // }
      // const createCar = await prisma.car.create({
      //     data: dataCreate
      // })

      res.status(200).json(resData);
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

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9033:
/***/ ((module) => {

module.exports = require("base64-img");

/***/ }),

/***/ 6411:
/***/ ((module) => {

module.exports = require("cloudinary");

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
var __webpack_exports__ = (__webpack_exec__(6574));
module.exports = __webpack_exports__;

})();