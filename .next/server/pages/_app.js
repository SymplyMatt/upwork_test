(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 8797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1631);
// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(4730);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: ./store/formContext.js
var formContext = __webpack_require__(2189);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/ui/FetchLoading.js
var FetchLoading = __webpack_require__(7287);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./utils/gtag.js
const GA_TRACKING_ID = "UA-209149390-1"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const gtag_event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function MyApp({
  Component,
  pageProps
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      pageview(url);
    };

    function handleStart() {
      setLoading(true);
    }

    function handleStop() {
      setLoading(false);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]); // useEffect(() => {
  //     function handleStart() {
  //         setLoading(true)
  //     }
  //     function handleStop() {
  //         setLoading(false)
  //     }
  //     Router.events.on('routeChangeStart', handleStart)
  //     Router.events.on('routeChangeComplete', handleStop)
  //     Router.events.on('routeChangeError', handleStop)
  //     return () => {
  //         Router.events.off('routeChangeStart', handleStart)
  //         Router.events.off('routeChangeComplete', handleStop)
  //         Router.events.off('routeChangeError', handleStop)
  //     }
  // }, [Router])

  return /*#__PURE__*/jsx_runtime_.jsx(client_.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/jsx_runtime_.jsx(store/* StoreContextProvider */.U, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(formContext/* FormContextProvider */.o, {
        children: [loading && /*#__PURE__*/jsx_runtime_.jsx(FetchLoading/* FetchLoading */.B, {}), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
          strategy: "afterInteractive",
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
        }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
          id: "gtag-init",
          strategy: "afterInteractive",
          dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1631:
/***/ (() => {



/***/ }),

/***/ 8104:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 311:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2189,4730], () => (__webpack_exec__(8797)));
module.exports = __webpack_exports__;

})();