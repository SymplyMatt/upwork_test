"use strict";
exports.id = 2303;
exports.ids = [2303,9376];
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

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _ui_FetchLoading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7287);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const AddressMap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => __webpack_require__.e(/* import() */ 6427).then(__webpack_require__.bind(__webpack_require__, 6427)), {
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ui_FetchLoading_js__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLoading */ .i, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6427)],
    modules: ["..\\components\\Content\\en\\Contacts\\ContactPage.js -> " + '../../../ui/AddressMap']
  }
});
function ContactPage() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_0__/* .MainLayout */ .Z, {
    title: 'Contacts',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      className: "home-contacts",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "home-contacts__info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
          children: ["Contact ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "red",
            children: "us"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: "Fast customer service is extremely important to us. Contact us in a way that suits you and we will answer you as soon as possible."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
          children: "Red Autorent O\xDC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: "Reg.nr: 14576442"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "icon icon__marker"
          }), "Akadeemia tee 6, Tallinn (Tallinna Tehnika\xFClikooli / TalTech vastas). Estonia, 12611"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "icon icon__phone-red"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            href: "tel:+3725535603",
            children: "+3725535603"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            href: "mailto:redautorent@gmail.com",
            children: "redautorent@gmail.com"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "home-contacts__map",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AddressMap, {})
      })]
    })
  });
}

/***/ }),

/***/ 7287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ FetchLoading),
/* harmony export */   "i": () => (/* binding */ ComponentLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const FetchLoading = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "loading-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "lds-ellipsis",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})]
    })
  });
};
const ComponentLoading = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "component-loading-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "lds-ellipsis",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})]
    })
  });
};

/***/ })

};
;