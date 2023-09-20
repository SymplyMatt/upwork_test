"use strict";
exports.id = 2189;
exports.ids = [2189];
exports.modules = {

/***/ 2189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ FormContext),
/* harmony export */   "o": () => (/* binding */ FormContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return _objectSpread(_objectSpread({}, state), {}, {
        name: action.payload
      });

    case 'SET_SURNAME':
      return _objectSpread(_objectSpread({}, state), {}, {
        surname: action.payload
      });

    case 'SET_EMAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
      });

    case 'SET_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        address: action.payload
      });

    case 'SET_PHONE':
      return _objectSpread(_objectSpread({}, state), {}, {
        phone: action.payload
      });

    case 'SET_PERSONALID':
      return _objectSpread(_objectSpread({}, state), {}, {
        personalid: action.payload
      });

    case 'SET_AUTO':
      return _objectSpread(_objectSpread({}, state), {}, {
        auto: action.payload
      });

    case 'SET_STARTDATE':
      return _objectSpread(_objectSpread({}, state), {}, {
        startdate: action.payload
      });

    case 'SET_STARTTIME':
      return _objectSpread(_objectSpread({}, state), {}, {
        starttime: action.payload
      });

    case 'SET_STOPDATE':
      return _objectSpread(_objectSpread({}, state), {}, {
        stopdate: action.payload
      });

    case 'SET_STOPTIME':
      return _objectSpread(_objectSpread({}, state), {}, {
        stoptime: action.payload
      });

    case 'SET_ADDITIONAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        additional: action.payload
      });

    default:
      return state;
  }
};

const defaultState = {
  name: '',
  surname: '',
  email: '',
  address: '',
  phone: '',
  personalid: '',
  auto: false,
  startdate: '',
  starttime: '',
  stopdate: '',
  stoptime: '',
  additional: ''
};
const FormContextProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, defaultState);

  const setForm = (type, payload) => {
    dispatch({
      type: type,
      payload: payload
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FormContext.Provider, {
    value: {
      state,
      setForm
    },
    children: children
  });
};

/***/ })

};
;