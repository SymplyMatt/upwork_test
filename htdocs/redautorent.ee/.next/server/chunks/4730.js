"use strict";
exports.id = 4730;
exports.ids = [4730];
exports.modules = {

/***/ 4730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ StoreContext),
/* harmony export */   "U": () => (/* binding */ StoreContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(311);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const StoreContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATALOG":
      return _objectSpread(_objectSpread({}, state), {}, {
        catalog: action.payload
      });

    case "CHANGE_LANG":
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: action.payload
      });

    default:
      return {
        state
      };
  }
};

const StoreContextProvider = ({
  children
}) => {
  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)(['lang']);
  const defaultContext = {
    lang: cookies.lang || 'et',
    catalog: false
  };
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(reducer, defaultContext);

  const setLang = lang => {
    setCookie('lang', lang, {
      path: '/',
      secure: true,
      sameSite: 'Lax'
    });
    dispatch({
      type: 'CHANGE_LANG',
      payload: lang
    });
  };

  const setCatalog = cars => dispatch({
    type: 'SET_CATALOG',
    payload: cars
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StoreContext.Provider, {
    value: {
      state,
      setLang,
      setCatalog
    },
    children: children
  });
};

/***/ })

};
;