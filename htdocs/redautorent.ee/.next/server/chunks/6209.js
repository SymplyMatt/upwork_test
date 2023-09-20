"use strict";
exports.id = 6209;
exports.ids = [6209];
exports.modules = {

/***/ 6209:
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
;// CONCATENATED MODULE: ./components/Content/en/Autod/CarCard.js






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
            children: "Vehicle"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold parametr-value",
            children: car['model']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Year"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Year']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Engine"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Engine']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Fuel type"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Fuel'] == 'Diesel' ? 'Diesel fuel' : car['Fuel'] == 'Gas' ? 'LPG (Gas) + Petrol' : `Petrol (unleaded ${car['Fuel']})`
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Gearbox"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Transmission']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Doors"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold parametr-value",
            children: car['Doors']
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "Fuel consumption"
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
            children: "1 Day"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Day'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1-6 Days"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Sixday'], " \u20AC /day"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 Week"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Week'], " \u20AC"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "parametr-name",
            children: "1 Month"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: `bold parametr-value`,
            children: [car['Month'], " \u20AC (", (car['Month'] / 30).toFixed(2), " \u20AC /day)"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: hundlerBroner,
          className: "button",
          children: "Booking"
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
;// CONCATENATED MODULE: ./components/Content/en/Autod/AutodPage.js








function AutodPage() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    catalog
  } = ctx.state;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainLayout/* MainLayout */.Z, {
    title: "Vehicles",
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "autod-head",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "auto-head__title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Vehicles"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: "RED"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold",
            children: "Autorent"
          }), " offers some of the most competitive rates in Tallinn, with our prices starting at  ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red bold",
            children: "\u20AC6.66 per day or \u20AC200 per month."
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