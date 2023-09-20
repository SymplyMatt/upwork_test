"use strict";
exports.id = 5462;
exports.ids = [5462];
exports.modules = {

/***/ 5462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AutorentPage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./store/formContext.js
var store_formContext = __webpack_require__(2189);
// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(4730);
// EXTERNAL MODULE: ./components/Constants.js
var Constants = __webpack_require__(9376);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Content/en/Autorent/AutorendiCarCard.js






const AutorendiCarCard = () => {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    catalog
  } = ctx.state;
  const formContext = (0,external_react_.useContext)(store_formContext/* FormContext */.q);
  const {
    auto
  } = formContext.state;
  const {
    0: car,
    1: setCar
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    // auto == '' && formContext.setForm("SET_AUTO", catalog[0])
    catalog && catalog.forEach(el => {
      if (el.model == auto) {
        setCar(el);
      }
    });
  }, [auto]); // useEffect(() => {
  //     auto == '' && formContext.setForm('SET_AUTO', catalog[0])
  // }, [catalog])

  if (!car) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "car__card",
      children: "Loading..."
    });
  }

  const image = JSON.parse(car.Images)[0];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "car__card",
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: image
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
            children: car['Fuel'] == 'Diesel' ? 'Diesel fuel' : `Petrol (unleaded ${car['Fuel']})`
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
        })]
      })]
    })]
  });
};
// EXTERNAL MODULE: ./components/Layouts/MainLayout.js + 6 modules
var MainLayout = __webpack_require__(795);
// EXTERNAL MODULE: ./components/ui/Calendar.js
var Calendar = __webpack_require__(9954);
// EXTERNAL MODULE: ./components/ui/Time.js
var Time = __webpack_require__(6501);
;// CONCATENATED MODULE: ./components/Content/en/Autorent/PopupBroner.js



const PopupBroner = ({
  close
}) => {
  (0,external_react_.useEffect)(() => {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    return () => body.classList.remove('overflow-hidden');
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "wrapper",
    onClick: e => e.target.id === 'wrapper' && close(),
    className: "popup-wrapper",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "popup-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: close,
        className: "icon icon__close popup-close"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "popup-content__message-title",
        children: "We have received your booking request"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "popup-content__message-message",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["Our customer service will contact you within ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "red",
            children: " 30 minutes "
          }), " to confirm your reservation."]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["If you have any questions, please call ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "red",
            children: [" ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "red",
              href: "tel:+3725535603",
              children: "+3725535603"
            }), " "]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: close,
        className: "button",
        children: "Got it, I'll wait"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Content/en/Autorent/AutoSelect.js







const AutoSelect = () => {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const ctxForm = (0,external_react_.useContext)(store_formContext/* FormContext */.q);
  const {
    auto
  } = ctxForm.state;
  const {
    catalog
  } = ctx.state;

  async function setCatalog() {
    const res = await fetch(Constants.BASE_URL + 'api/catalog');
    const json = await res.json();
    ctx.setCatalog(json);
  }

  (0,external_react_.useEffect)(() => {
    if (!catalog) {
      setCatalog();
    } else {
      if (!auto) {
        ctxForm.setForm('SET_AUTO', catalog[0]['model']);
      }
    }
  }, []);

  function hundlerChange(e) {
    const options = e.target.childNodes;

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        ctxForm.setForm('SET_AUTO', options[i].value);
      }
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: !catalog ? /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    }) : /*#__PURE__*/jsx_runtime_.jsx("select", {
      defaultValue: ctxForm.state.auto,
      onChange: hundlerChange,
      children: catalog.map(auto => {
        return /*#__PURE__*/jsx_runtime_.jsx("option", {
          "data-id": auto.id,
          value: auto.model,
          children: auto.model
        }, auto.model);
      })
    })
  });
};
// EXTERNAL MODULE: ./components/ui/FetchLoading.js
var FetchLoading = __webpack_require__(7287);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Content/en/Autorent/AutorentPage.js














function AutorentPage() {
  const router = (0,router_.useRouter)();
  const formContext = (0,external_react_.useContext)(store_formContext/* FormContext */.q);
  const formData = formContext.state;
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: popup,
    1: setPopup
  } = (0,external_react_.useState)(false);

  async function sendOrder(data) {
    const request = await fetch(Constants.BASE_URL + 'api/broner', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const response = await request.json();
    return response;
  }

  function formHundler() {
    if (formData['name'] && formData['phone']) {
      setLoading(true);
      sendOrder(formData).then(res => {
        if (res.status == 'ok') {
          setLoading(false);
          setPopup(!popup);
        } else {
          setLoading(false);
          setErrorMessage('An error has occurred on the server. Call by phone +3725535603, please.');
        }
      }).catch(console.error);
    } else {
      setErrorMessage('Name and Phone is required');
    }
  }

  function closePopup() {
    router.push('/kontakt');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainLayout/* MainLayout */.Z, {
    title: "Autorent - request",
    children: [popup && /*#__PURE__*/jsx_runtime_.jsx(PopupBroner, {
      close: closePopup
    }), errorMessage && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "red bold",
      children: errorMessage
    }), loading && /*#__PURE__*/jsx_runtime_.jsx(FetchLoading/* FetchLoading */.B, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "autorendi",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "breadcrumbs",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "breadcrumb-parent",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/autod",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Cars/"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "breadcrumb-current",
          children: "Rental Enquiry Form"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "red",
          children: "Rental"
        }), " Enquiry Form"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Fill out the application and our manager will contact you within ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "red",
          children: "30 minutes"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "autorendi-broner",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "form autorendi-form",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bold",
          children: "Contact information"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-person",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["First name:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "name",
              onChange: e => formContext.setForm('SET_NAME', e.target.value),
              defaultValue: formContext.name,
              placeholder: "Alex",
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Family name:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "surname",
              placeholder: "Petrov",
              onChange: e => formContext.setForm('SET_SURNAME', e.target.value),
              defaultValue: formContext.surname
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["E-mail address:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "email",
              placeholder: "petrov@gmail.com",
              onChange: e => formContext.setForm('SET_EMAIL', e.target.value),
              defaultValue: formContext.email
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Home address:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "address",
              placeholder: "Vilnus, Krony 44",
              onChange: e => formContext.setForm('SET_ADDRESS', e.target.value),
              defaultValue: formContext.address
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Phone number:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "phone",
              placeholder: "+ XXX-XX-XXX-XX-XX",
              onChange: e => formContext.setForm('SET_PHONE', e.target.value),
              defaultValue: formContext.phone,
              required: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Personal id number:", /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              name: "zip",
              placeholder: "\u0425\u0425\u0425",
              onChange: e => formContext.setForm('SET_PERSONALID', e.target.value),
              defaultValue: formContext.personalid
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "auto-select",
            children: ["Vehicle:", /*#__PURE__*/jsx_runtime_.jsx(AutoSelect, {
              type: 'SET_AUTO'
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bold",
          children: "Rental period"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-date",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Start date:", /*#__PURE__*/jsx_runtime_.jsx(Calendar/* default */.Z, {
              type: 'SET_STARTDATE',
              lang: 'en'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Start time:", /*#__PURE__*/jsx_runtime_.jsx(Time/* default */.Z, {
              type: 'SET_STARTTIME'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Return date:", /*#__PURE__*/jsx_runtime_.jsx(Calendar/* default */.Z, {
              type: 'SET_STOPDATE',
              lang: 'en'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["Return time:", /*#__PURE__*/jsx_runtime_.jsx(Time/* default */.Z, {
              type: 'SET_STOPTIME'
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "additional-information",
            children: ["Additional information:", /*#__PURE__*/jsx_runtime_.jsx("textarea", {
              name: "additional",
              placeholder: "Additional information",
              onChange: e => formContext.setForm('SET_ADDITIONAL', e.target.value),
              defaultValue: formContext.additional
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "autorendi-carcard",
        children: [/*#__PURE__*/jsx_runtime_.jsx(AutorendiCarCard, {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: formHundler,
          className: "button",
          children: "Broneeri"
        }), errorMessage && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "red bold",
          children: errorMessage
        })]
      })]
    })]
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