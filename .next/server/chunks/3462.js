"use strict";
exports.id = 3462;
exports.ids = [3462];
exports.modules = {

/***/ 3462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AutodPage)
});

// EXTERNAL MODULE: ./components/ui/CarSlider.js
var CarSlider = __webpack_require__(2596);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./store/formContext.js
var store_formContext = __webpack_require__(2189);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Content/ru/Autod/CarCard.js






const CarCard = ({
  car
}) => {
  const formContext = (0,external_react_.useContext)(store_formContext/* FormContext */.q);
  const router = (0,router_.useRouter)();

  function hundlerBroner() {
    formContext.setForm('SET_AUTO', car['model']);
    router.push('/autorent');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "car__card",
    children: [/*#__PURE__*/jsx_runtime_.jsx(CarSlider/* CarSlider */.W, {
      images: car.Images
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "car__card-parameters",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "parameters car-parameters",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold parametr-value",
            children: car['model']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Year']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Engine']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u0422\u043E\u043F\u043B\u0438\u0432\u043E"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Fuel'] == 'Diesel' ? 'Дизель' : car['Fuel'] == 'Gas' ? 'LPG (Газ) + Бензин' : `Бензин ${car['Fuel']}`
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Transmission'] == 'Manual' ? 'Механика' : 'Автомат'
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u041A\u043E\u043B-\u0432\u043E \u0434\u0432\u0435\u0440\u0435\u0439"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Doors']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "\u0420\u0430\u0441\u0445\u043E\u0434 \u0442\u043E\u043F\u043B\u0438\u0432\u0430"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "bold parametr-value",
            children: [car['Consumption'], car['Fuel'] !== 'Gas' ? ' л' : ' €', "/100 \u043A\u043C"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "parameters rent-parameters",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 \u0434\u0435\u043D\u044C"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Day'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1-6 \u0434\u043D\u0435\u0439"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Sixday'], " \u20AC /\u0441\u0443\u0442\u043A\u0438"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 \u043D\u0435\u0434\u0435\u043B\u044F"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Week'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 \u043C\u0435\u0441\u044F\u0446"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Month'], " \u20AC (", (car['Month'] / 30).toFixed(2), " \u20AC /\u0441\u0443\u0442\u043A\u0438)"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: hundlerBroner,
          className: "button",
          children: "\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        })]
      })]
    })]
  });
};
// EXTERNAL MODULE: ./components/Layouts/MainLayout.js + 6 modules
var MainLayout = __webpack_require__(795);
// EXTERNAL MODULE: ./components/ui/FetchLoading.js
var FetchLoading = __webpack_require__(7287);
// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(4730);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Content/ru/Autod/AutodPage.js








function AutodPage() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    catalog
  } = ctx.state;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainLayout/* MainLayout */.Z, {
    title: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438",
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "autod-head",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "auto-head__title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: "RED"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold",
            children: "Autorent"
          }), " - \u042D\u0442\u043E \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432 \u0422\u0430\u043B\u043B\u0438\u043D\u043D\u0435 \u043F\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0446\u0435\u043D\u0430\u043C, \u043D\u0430\u0447\u0438\u043D\u0430\u044F ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: " \u043E\u0442 6.66 \u0435\u0432\u0440\u043E \u0432 \u0441\u0443\u0442\u043A\u0438."
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "autod-cars",
      children: catalog === false ? /*#__PURE__*/jsx_runtime_.jsx(FetchLoading/* FetchLoading */.B, {}) : catalog.map(car => {
        return /*#__PURE__*/jsx_runtime_.jsx(CarCard, {
          car: car
        }, car.id.toString());
      })
    })]
  });
}

/***/ })

};
;