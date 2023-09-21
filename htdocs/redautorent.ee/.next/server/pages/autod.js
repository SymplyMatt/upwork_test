(() => {
var exports = {};
exports.id = 6062;
exports.ids = [6062];
exports.modules = {

/***/ 2717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/Autod/AutodPage": [
		6209,
		1664,
		4116,
		2189,
		4504,
		6209
	],
	"./et/Autod/AutodPage": [
		2237,
		1664,
		4116,
		2189,
		4504,
		2237
	],
	"./ru/Autod/AutodPage": [
		3462,
		1664,
		4116,
		2189,
		4504,
		3462
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 2717;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/Autod/AutodPage": 6209,
	"./et/Autod/AutodPage": 2237,
	"./ru/Autod/AutodPage": 3462
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 1871;
module.exports = webpackContext;

/***/ }),

/***/ 4660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9376);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4730);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Autod({
  data
}) {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_store__WEBPACK_IMPORTED_MODULE_2__/* .StoreContext */ .x);
  const {
    lang
  } = ctx.state;
  const {
    catalog
  } = ctx.state;
  const AutodPage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__(2717)(`./${lang}/Autod/AutodPage`), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(__webpack_require__(1871).resolve(`./${lang}/Autod/AutodPage`))],
      modules: ["autod.js -> " + `../components/Content/${lang}/Autod/AutodPage`]
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    if (data.status !== 200) {
      try {
        const res = await fetch(_components_Constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "api/catalog");
        console.log(_components_Constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL);
        const json = await res.json();
        ctx.setCatalog(json);
      } catch (e) {
        console.log(e);
      }
    } else {
      ctx.setCatalog(data.cars);
    }
  }, [data]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AutodPage, {});
}

Autod.getInitialProps = async ctx => {
  try {
    const res = await fetch(_components_Constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + "api/catalog");
    const json = await res.json();
    return {
      data: {
        cars: json,
        status: 200
      }
    };
  } catch (e) {
    return {
      data: {
        cars: null,
        status: 403
      }
    };
  }
};

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 9682:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1596:
/***/ ((module) => {

"use strict";
module.exports = require("swiper/core");

/***/ }),

/***/ 2156:
/***/ ((module) => {

"use strict";
module.exports = require("swiper/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,4730,9376], () => (__webpack_exec__(4660)));
module.exports = __webpack_exports__;

})();