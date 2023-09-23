"use strict";
(() => {
var exports = {};
exports.id = 1675;
exports.ids = [1675];
exports.modules = {

/***/ 502:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);










const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({});

const cloudinary = __webpack_require__(6411).v2;

const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb'
    }
  }
};

function saveFile(file) {
  const fileName = uuidv4();
  const uploadPath = path.join(process.cwd(), 'public', 'upload');
  const fileP = base64Img.imgSync(file, uploadPath, fileName);
  const fileurl = '/' + fileP.split(path.sep).splice(-2).join('/');
  return fileurl;
} // Configure Cloudinary with your credentials


cloudinary.config({
  cloud_name: 'damltcdhl',
  api_key: '289714989896362',
  api_secret: 'wiqdgXyqTszEnWI_0POx6jM9P-0'
});
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
      const data = JSON.parse(body); // const images = JSON.parse(data.Images)

      const images = data.Images;
      const base64Images = images.filter(i => !i.includes('base64'));
      const nonBase64Images = images.filter(i => i.includes('base64')); // Base64-encoded image data

      const uploadImages = async () => {
        let imageUrls = [];
        const uploadResults = await base64Images.map(async image => {
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
      }; // const iPrep = images.map(image => {
      //     if (image.match('base64')) {
      //         return saveFile(image)
      //     } else {
      //         return image
      //     }
      // })
      // {...data, Images: JSON.stringify(iPrep)}


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
        // Images: JSON.stringify(iPrep)
        Images: [...(await uploadImages()), ...nonBase64Images]
      };
      console.log('nonBase64Images: ', nonBase64Images);
      console.log('base64Images: ', base64Images);
      console.log('dataUpdate images: ', dataUpdate.Images);
      const response = await axios__WEBPACK_IMPORTED_MODULE_8___default().post(_components_Constants__WEBPACK_IMPORTED_MODULE_5__.EXTERNAL_API + '/update', dataUpdate, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const resData = response.data.car;
      console.log(resData); // const updateCar = await prisma.car.update({
      //     where: {
      //         id: dataUpdate.id
      //     },
      //     data: dataUpdate
      // })
      // const deleteExcessImages = await excessimages()
      // res.status(200).json({ updateCar, deleteExcessImages })

      res.status(200).json({
        resData
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
var __webpack_exports__ = __webpack_require__.X(0, [6593], () => (__webpack_exec__(502)));
module.exports = __webpack_exports__;

})();