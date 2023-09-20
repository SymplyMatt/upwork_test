exports.id = 4116;
exports.ids = [4116];
exports.modules = {

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Constants.js
var Constants = __webpack_require__(9376);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Content/Contacts.js



function Contacts() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "header-contacts",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: Constants.LINKS.phone,
      className: "header-phone",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "icon icon__phone-red"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "phone-number",
        children: "+372 5535603"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      target: "_blank",
      href: Constants.LINKS.mapAddress,
      className: "header-address",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "icon icon__marker"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "address",
        children: "Akadeemia tee 6, Tallinn"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: Constants.LINKS.email,
      className: "header-email",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "email",
        children: "redautorent@gmail.com"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Content/Social.js



function Social() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "social",
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      href: Constants.LINKS.facebook,
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "icon icon__facebook-red"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: Constants.LINKS.instagram,
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "icon icon__instagram-red"
      })
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/ui/Menu.js






const Menu = ({
  items
}) => {
  function menuHundler(e) {
    document.querySelector("#menu__toggle").checked = false;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hamburger-menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      id: "menu__toggle",
      type: "checkbox"
    }), /*#__PURE__*/jsx_runtime_.jsx("label", {
      className: "menu__btn",
      htmlFor: "menu__toggle",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: e => menuHundler(e),
      className: "shadow-bg"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      onClick: e => menuHundler(e),
      className: "menu__box",
      children: [items.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: item.active ? "menu__item menu__item-active" : 'menu__item',
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: item.href,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              htmlFor: "menu__toggle",
              children: item.title
            })
          })
        }, item.title + item.href);
      }), /*#__PURE__*/jsx_runtime_.jsx(Contacts, {}), /*#__PURE__*/jsx_runtime_.jsx(Social, {})]
    })]
  });
};

/* harmony default export */ const ui_Menu = (Menu);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(4730);
;// CONCATENATED MODULE: ./components/ui/LocaleSwitcher.js




function LocaleSwitcher() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    lang
  } = ctx.state;
  const {
    setLang
  } = ctx;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "locale-switcher",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => setLang('et'),
      className: `locale ${lang == 'et' && 'locale-active'}`,
      children: "Es"
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => setLang('en'),
      className: `locale ${lang == 'en' && 'locale-active'}`,
      children: "En"
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => setLang('ru'),
      className: `locale ${lang == 'ru' && 'locale-active'}`,
      children: "Ru"
    })]
  });
}
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(9682);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Header.js











function Header() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    lang
  } = ctx.state;
  const menuItems = [{
    href: "/",
    title: lang == 'et' ? "ettevõtte" : lang == 'en' ? 'enterprise' : lang == 'ru' && 'предприятие',
    active: 0
  }, {
    href: "/autod",
    title: lang == 'et' ? "autod" : lang == 'en' ? 'vehicles' : lang == 'ru' && 'автомобили',
    active: 0
  }, {
    href: "/renditingimused",
    title: lang == 'et' ? "renditingimused" : lang == 'en' ? 'Rental conditions' : lang == 'ru' && 'Условия аренды',
    active: 0
  }, {
    href: "/kontakt",
    title: lang == 'et' ? "kontakt" : lang == 'en' ? 'contact' : lang == 'ru' && 'контакты',
    active: 0
  }];
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(menuItems);
  const router = (0,router_.useRouter)();
  const isTabletOrMobile = (0,external_react_responsive_.useMediaQuery)({
    query: '(max-width: 992px)'
  });
  (0,external_react_.useEffect)(() => {
    setMenu(menuItems.map(item => {
      let currentPage = router.pathname;

      if (currentPage == item.href) {
        item.active = 1;
      } else {
        item.active = 0;
      }

      return item;
    }));
  }, []);
  return (
    /*#__PURE__*/
    // <div className="header">
    (0,jsx_runtime_.jsxs)("section", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-logo",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "logo",
              src: "/images/logo.svg"
            })
          })
        })
      }), isTabletOrMobile ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LocaleSwitcher, {}), /*#__PURE__*/jsx_runtime_.jsx(ui_Menu, {
          items: menu
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-nav",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "topnav",
            children: menu.map(item => {
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: item.active ? "topnav__item-active" : '',
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: item.href,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: item.title
                  })
                })
              }, item.title + item.href);
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(LocaleSwitcher, {})]
      }), !isTabletOrMobile && /*#__PURE__*/jsx_runtime_.jsx(Contacts, {})]
    }) // </div>

  );
}
;// CONCATENATED MODULE: ./components/Footer.js






function Footer() {
  const ctx = (0,external_react_.useContext)(store/* StoreContext */.x);
  const {
    lang
  } = ctx.state;
  const currentYear = new Date().getFullYear();
  const menuItems = [{
    href: "/",
    title: lang == 'et' ? "ettevõtte" : lang == 'en' ? 'enterprise' : lang == 'ru' && 'предприятие',
    active: 0
  }, {
    href: "/autod",
    title: lang == 'et' ? "autod" : lang == 'en' ? 'cars' : lang == 'ru' && 'авто',
    active: 0
  }, {
    href: "/renditingimused",
    title: lang == 'et' ? "renditingimused" : lang == 'en' ? 'Rental conditions' : lang == 'ru' && 'Условия аренды',
    active: 0
  }, {
    href: "/kontakt",
    title: lang == 'et' ? "kontakt" : lang == 'en' ? 'contact' : lang == 'ru' && 'контакты',
    active: 0
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "footer",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer-elements",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo",
            src: "/images/logo-white.svg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-menu",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: menuItems.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: item.href,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: item.title
                })
              })
            }, item.href))
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "footer-address",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Red Autorent O\xDC"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: "Reg.nr: 14576442"
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: Constants.LINKS.mapAddress,
              target: "_blank",
              children: "Akadeemia tee 6, Tallinn Estonia, 12611"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "footer-bank",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Swedbank"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "bold",
              children: "IBAN"
            }), " EE812200221070224653"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "bold",
              children: "SWIFT"
            }), " HABAEE2X"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "footer-contacts",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "footer__email",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: Constants.LINKS.email,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "email",
                children: "redautorent@gmail.com"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "footer__phone",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: Constants.LINKS.phone,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon icon__phone"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "phone-number",
                children: "+372 5535603"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "footer__social",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: Constants.LINKS.facebook,
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon icon__facebook"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: Constants.LINKS.instagram,
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon icon__instagram"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "copyright",
        children: ["\xA9 Red Autorent O\xDC, ", currentYear]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Layouts/MainLayout.js







const MainLayout = ({
  children,
  title,
  admin
}) => {
  const {
    0: isAdmin,
    1: setAdmin
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    admin && setAdmin(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/svg+xml",
        href: "favicon.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1,maximum-scale=1.0`
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "true",
        name: "HandheldFriendly"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "width",
        name: "MobileOptimized"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "yes",
        name: "apple-mobile-web-app- capable"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;