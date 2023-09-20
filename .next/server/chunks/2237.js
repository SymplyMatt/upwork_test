"use strict";
exports.id = 2237;
exports.ids = [2237];
exports.modules = {

/***/ 2237:
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
;// CONCATENATED MODULE: ./components/Content/et/Autod/CarCard.js






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
            children: "Auto"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold parametr-value",
            children: car['model']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Aasta"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Year']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Mootor"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Engine']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "K\xFCtus"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Fuel'] == 'Diesel' ? 'Diisel' : car['Fuel'] == 'Gas' ? 'LPG (Gaas) + Bensiin' : `Bensiin ${car['Fuel']}`
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "K\xE4igukast"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Transmission'] == 'Manual' ? 'Manuaal' : 'Auto'
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Uste arv"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Doors']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "K\xFCtusekulu"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "bold parametr-value",
            children: [car['Consumption'], car['Fuel'] !== 'Gas' ? ' l' : ' €', "/100 km"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "parameters rent-parameters",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 P\xE4ev"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Day'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1-6 P\xE4eva"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Sixday'], " \u20AC /p\xE4ev"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 N\xE4dal"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Week'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 Kuu"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Month'], " \u20AC (", (car['Month'] / 30).toFixed(2), " \u20AC /p\xE4ev)"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: hundlerBroner,
          className: "button",
          children: "Broneeri"
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
;// CONCATENATED MODULE: ./components/Content/et/Autod/AutodPage.js








function AutodPage() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    catalog
  } = ctx.state;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainLayout/* MainLayout */.Z, {
    title: "Autod",
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "autod-head",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "auto-head__title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Autod"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: "RED"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold",
            children: "Autorenti"
          }), "  pakub autosid Tallinna madalaimate hindadega, hinnad algavad ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: "6.66 eurost \xF6\xF6p\xE4evas v\xF5i 200 eurost kuus."
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