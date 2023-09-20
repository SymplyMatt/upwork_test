"use strict";
exports.id = 4504;
exports.ids = [4504];
exports.modules = {

/***/ 2596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CarSlider)
/* harmony export */ });
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1596);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9682);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






swiper_core__WEBPACK_IMPORTED_MODULE_1___default().use([swiper_core__WEBPACK_IMPORTED_MODULE_1__.Pagination]);
const CarSlider = ({
  images
}) => {
  images = JSON.parse(images);
  const {
    0: slider,
    1: setSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "car-slider",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
      className: "slider",
      onSwiper: setSlider,
      pagination: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      breakpoints: {
        576: {
          slidesPerView: 1,
          pagination: false
        }
      },
      onActiveIndexChange: () => setActiveSlide(slider.activeIndex),
      children: images.map(image => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
          className: "car-slide",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
            src: image
          })
        }, image);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_responsive__WEBPACK_IMPORTED_MODULE_3___default()), {
      minWidth: 576,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "car-slider__thumbs",
        children: slider && images.map((img, index) => {
          if (index == activeSlide) {
            return;
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            onClick: () => slider.slideTo(index),
            className: "car-slider__thumb",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
              src: img
            })
          }, img);
        })
      })
    })]
  });
};

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