"use strict";
exports.id = 6593;
exports.ids = [6593,9376];
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

/***/ 9197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);




 // import { redirect } from 'next/dist/next-server/server/api-utils'

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_4__.PrismaClient({});
const uploadPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public', 'upload');

async function getImageUrlsFromDatabase() {
  let images = await prisma.car.findMany({
    select: {
      Images: true
    }
  });
  prisma.$disconnect();
  images = await images.map((img, index) => JSON.parse(img.Images.replaceAll('/upload/', ''))).flat();
  return images;
}

async function getFiles() {
  let files = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(uploadPath, (err, data) => {
    if (err) throw err;
    return data;
  });
  return files;
}

function removeFiles(files) {
  // Удаляет все файлы входящего массива
  files.forEach(file => {
    (0,fs__WEBPACK_IMPORTED_MODULE_3__.unlink)(path__WEBPACK_IMPORTED_MODULE_1___default().join(uploadPath, file), err => {
      if (err) throw err;
    });
  });
}

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  // const session = await getSession({ req })
  // if (session) {
  // Получает все ссылки на изображения в базе
  const urls = await getImageUrlsFromDatabase(); // Получает все файлы в папке upload

  const files = await getFiles(); // Находит файлы которых нет в базе

  let removed = files.filter(file => {
    return !urls.includes(file);
  }); // Удаляет невостребованные файлы

  removed.length > 0 ? removeFiles(removed) : removed = 'нет невостребованных файлов'; // res.json({urls,files,removed})

  fs__WEBPACK_IMPORTED_MODULE_3___default().appendFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'logs', 'deleted_images.log'), "[" + (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(Date.now(), 'dd/MM/yyyy - k:m:s') + "] --- " + removed + "\n");
  return removed; // } else {
  // redirect('/admin/login')
  // }
}

/***/ })

};
;