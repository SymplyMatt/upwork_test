(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{9376:function(e,t,n){"use strict";n.d(t,{_n:function(){return r},BA:function(){return a}});var r="https://autorent-f693e3f890eb.herokuapp.com/",a={mapAddress:"https://goo.gl/maps/GpNUmh4JMXHcN32w8",phone:"tel:+3725535603",email:"mailto:redautorent@gmail.com",facebook:"https://www.facebook.com/www.redautorent.ee",instagram:"https://www.instagram.com/redautorent/"}},795:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(9008),a=n(9376),o=n(5893);function i(){return(0,o.jsxs)("div",{className:"header-contacts",children:[(0,o.jsxs)("a",{href:a.BA.phone,className:"header-phone",children:[(0,o.jsx)("div",{className:"icon icon__phone-red"}),(0,o.jsx)("div",{className:"phone-number",children:"+372 5535603"})]}),(0,o.jsxs)("a",{target:"_blank",href:a.BA.mapAddress,className:"header-address",children:[(0,o.jsx)("div",{className:"icon icon__marker"}),(0,o.jsx)("div",{className:"address",children:"Akadeemia tee 6, Tallinn"})]}),(0,o.jsx)("a",{href:a.BA.email,className:"header-email",children:(0,o.jsx)("div",{className:"email",children:"redautorent@gmail.com"})})]})}function c(){return(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("a",{href:a.BA.facebook,target:"_blank",children:(0,o.jsx)("div",{className:"icon icon__facebook-red"})}),(0,o.jsx)("a",{href:a.BA.instagram,target:"_blank",children:(0,o.jsx)("div",{className:"icon icon__instagram-red"})})]})}var s=n(1664),u=function(e){var t=e.items;function n(e){document.querySelector("#menu__toggle").checked=!1}return(0,o.jsxs)("div",{className:"hamburger-menu",children:[(0,o.jsx)("input",{id:"menu__toggle",type:"checkbox"}),(0,o.jsx)("label",{className:"menu__btn",htmlFor:"menu__toggle",children:(0,o.jsx)("span",{})}),(0,o.jsx)("div",{onClick:function(e){return n()},className:"shadow-bg"}),(0,o.jsxs)("ul",{onClick:function(e){return n()},className:"menu__box",children:[t.map((function(e){return(0,o.jsx)("li",{className:e.active?"menu__item menu__item-active":"menu__item",children:(0,o.jsx)(s.default,{href:e.href,children:(0,o.jsx)("a",{htmlFor:"menu__toggle",children:e.title})})},e.title+e.href)})),(0,o.jsx)(i,{}),(0,o.jsx)(c,{})]})]})},l=n(7294),f=n(944);function d(){var e=(0,l.useContext)(f.x),t=e.state.lang,n=e.setLang;return(0,o.jsxs)("div",{className:"locale-switcher",children:[(0,o.jsx)("button",{onClick:function(){return n("et")},className:"locale ".concat("et"==t&&"locale-active"),children:"Es"}),(0,o.jsx)("button",{onClick:function(){return n("en")},className:"locale ".concat("en"==t&&"locale-active"),children:"En"}),(0,o.jsx)("button",{onClick:function(){return n("ru")},className:"locale ".concat("ru"==t&&"locale-active"),children:"Ru"})]})}var p=n(1852),m=n(1163);function h(){var e=(0,l.useContext)(f.x).state.lang,t=[{href:"/",title:"et"==e?"ettev\xf5tte":"en"==e?"enterprise":"ru"==e&&"\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435",active:0},{href:"/autod",title:"et"==e?"autod":"en"==e?"vehicles":"ru"==e&&"\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438",active:0},{href:"/renditingimused",title:"et"==e?"renditingimused":"en"==e?"Rental conditions":"ru"==e&&"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0430\u0440\u0435\u043d\u0434\u044b",active:0},{href:"/kontakt",title:"et"==e?"kontakt":"en"==e?"contact":"ru"==e&&"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",active:0}],n=(0,l.useState)(t),r=n[0],a=n[1],c=(0,m.useRouter)(),h=(0,p.useMediaQuery)({query:"(max-width: 992px)"});return(0,l.useEffect)((function(){a(t.map((function(e){return c.pathname==e.href?e.active=1:e.active=0,e})))}),[]),(0,o.jsxs)("section",{className:"header",children:[(0,o.jsx)("div",{className:"header-logo",children:(0,o.jsx)(s.default,{href:"/",children:(0,o.jsx)("a",{children:(0,o.jsx)("img",{className:"logo",src:"/images/logo.svg"})})})}),h?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsx)(u,{items:r})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"header-nav",children:(0,o.jsx)("ul",{className:"topnav",children:r.map((function(e){return(0,o.jsx)("li",{className:e.active?"topnav__item-active":"",children:(0,o.jsx)(s.default,{href:e.href,children:(0,o.jsx)("a",{children:e.title})})},e.title+e.href)}))})}),(0,o.jsx)(d,{})]}),!h&&(0,o.jsx)(i,{})]})}function v(){var e=(0,l.useContext)(f.x).state.lang,t=(new Date).getFullYear(),n=[{href:"/",title:"et"==e?"ettev\xf5tte":"en"==e?"enterprise":"ru"==e&&"\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435",active:0},{href:"/autod",title:"et"==e?"autod":"en"==e?"cars":"ru"==e&&"\u0430\u0432\u0442\u043e",active:0},{href:"/renditingimused",title:"et"==e?"renditingimused":"en"==e?"Rental conditions":"ru"==e&&"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0430\u0440\u0435\u043d\u0434\u044b",active:0},{href:"/kontakt",title:"et"==e?"kontakt":"en"==e?"contact":"ru"==e&&"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",active:0}];return(0,o.jsx)("footer",{children:(0,o.jsxs)("section",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-elements",children:[(0,o.jsx)("div",{className:"footer-logo",children:(0,o.jsx)("img",{className:"logo",src:"/images/logo-white.svg"})}),(0,o.jsx)("div",{className:"footer-menu",children:(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(s.default,{href:e.href,children:(0,o.jsx)("a",{children:e.title})})},e.href)}))})}),(0,o.jsxs)("ul",{className:"footer-address",children:[(0,o.jsx)("h4",{children:"Red Autorent O\xdc"}),(0,o.jsx)("li",{children:"Reg.nr: 14576442"}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:a.BA.mapAddress,target:"_blank",children:"Akadeemia tee 6, Tallinn Estonia, 12611"})})]}),(0,o.jsxs)("ul",{className:"footer-bank",children:[(0,o.jsx)("h4",{children:"Swedbank"}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"bold",children:"IBAN"})," EE812200221070224653"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"bold",children:"SWIFT"})," HABAEE2X"]})]}),(0,o.jsxs)("ul",{className:"footer-contacts",children:[(0,o.jsx)("li",{className:"footer__email",children:(0,o.jsx)("a",{href:a.BA.email,children:(0,o.jsx)("div",{className:"email",children:"redautorent@gmail.com"})})}),(0,o.jsx)("li",{className:"footer__phone",children:(0,o.jsxs)("a",{href:a.BA.phone,children:[(0,o.jsx)("div",{className:"icon icon__phone"}),(0,o.jsx)("div",{className:"phone-number",children:"+372 5535603"})]})}),(0,o.jsxs)("li",{className:"footer__social",children:[(0,o.jsx)("a",{href:a.BA.facebook,target:"_blank",children:(0,o.jsx)("div",{className:"icon icon__facebook"})}),(0,o.jsx)("a",{href:a.BA.instagram,target:"_blank",children:(0,o.jsx)("div",{className:"icon icon__instagram"})})]})]})]}),(0,o.jsxs)("div",{className:"copyright",children:["\xa9 Red Autorent O\xdc, ",t]})]})})}var y=function(e){var t=e.children,n=e.title,a=e.admin,i=(0,l.useState)(!1),c=(i[0],i[1]);return(0,l.useEffect)((function(){a&&c(!0)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:n}),(0,o.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"favicon.svg"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1.0"}),(0,o.jsx)("meta",{content:"true",name:"HandheldFriendly"}),(0,o.jsx)("meta",{content:"width",name:"MobileOptimized"}),(0,o.jsx)("meta",{content:"yes",name:"apple-mobile-web-app- capable"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,o.jsx)(h,{}),t,(0,o.jsx)(v,{})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),c=n(4651),s=n(7426);var u={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var x=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,g=s.useIntersection({rootMargin:"200px"}),j=r(g,2),w=j[0],O=j[1],k=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);o.default.useEffect((function(){var e=O&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:a&&a.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(a,d,p,{locale:t})}),[p,d,O,b,n,a]);var _={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,a,d,p,h,v,y,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:a&&a.locale,N=a&&a.isLocaleDomain&&i.getDomainLocale(p,S,a&&a.locales,a&&a.domainLocales);_.href=N||i.addBasePath(i.addLocale(p,S,a&&a.defaultLocale))}return o.default.cloneElement(t,_)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),u=a.useState(!1),l=r(u,2),f=l[0],d=l[1],p=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1852:function(e,t,n){!function(t,r){var a;e.exports=(a=n(7294),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){return s(e)||c(e,t)||o(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}function s(e){if(Array.isArray(e))return e}var u=n(1),l=n.n(u),f=n(8),d=n.n(f),p=n(2),m=n(10),h=n.n(m),v=n(3),y=n(6),b=function(e){return e.query||Object(v.a)(e)},x=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(p.a)(n)]=e[n],t}),{})},g=function(){var e=l.a.useRef(!1);return l.a.useEffect((function(){e.current=!0}),[]),e.current},j=function(e){var t=l.a.useContext(y.a),n=function(){return x(e)||x(t)},a=r(l.a.useState(n),2),o=a[0],i=a[1];return l.a.useEffect((function(){var e=n();h()(o,e)||i(e)}),[e,t]),o},w=function(e){var t=function(){return b(e)},n=r(l.a.useState(t),2),a=n[0],o=n[1];return l.a.useEffect((function(){var e=t();a!==e&&o(e)}),[e]),a},O=function(e,t){var n=function(){return d()(e,t||{},!!t)},a=r(l.a.useState(n),2),o=a[0],i=a[1],c=g();return l.a.useEffect((function(){return c&&i(n()),function(){o.dispose()}}),[e,t]),o},k=function(e){var t=r(l.a.useState(e.matches),2),n=t[0],a=t[1];return l.a.useEffect((function(){var t=function(){a(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n},_=function(e,t,n){var r=j(t),a=w(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var o=O(a,r),i=k(o),c=g();return l.a.useEffect((function(){c&&n&&n(i)}),[i]),i};t.a=_},function(e,t){e.exports=a},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}function a(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(o,r);return c[e]=i.test(t)?"-"+t:t}var o=/[A-Z]/g,i=/^ms-/,c={};t.a=a},function(e,t,n){"use strict";var r=n(2),a=n(11),o=function(e){return"not ".concat(e)},i=function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?o(n):"(".concat(n,": ").concat(t,")")},c=function(e){return e.join(" and ")},s=function(e){var t=[];return Object.keys(a.a.all).forEach((function(n){var r=e[n];null!=r&&t.push(i(n,r))})),c(t)};t.a=s},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(17),o=n(3),i=n(6);n.d(t,"default",(function(){return a.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"toQuery",(function(){return o.a})),n.d(t,"Context",(function(){return i.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){l&&l.addListener(e)}function a(e){l&&l.removeListener(e)}function c(e){u.matches=e.matches,u.media=e.media}function s(){l&&l.removeListener(c)}var u=this;if(i&&!n){var l=i.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(c)}else this.matches=o(e,t),this.media=e;this.addListener=r,this.removeListener=a,this.dispose=s}function a(e,t,n){return new r(e,t,n)}var o=n(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=a},function(e,t,n){"use strict";function r(e,t){return a(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),s=c(s);break;case"resolution":a=i(a),s=i(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=o(a),s=o(s);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=a;case"max":return s<=a;default:return s===a}}));return a&&!n||!a&&n}))}function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(s),n=t[1],r=t[2],a=t[3]||"",o={};return o.inverse=!!n&&"not"===n.toLowerCase(),o.type=r?r.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],o.expressions=a.map((function(e){var t=e.match(u),n=t[1].toLowerCase().match(l);return{modifier:n[1],feature:n[2],value:t[2]}})),o}))}function o(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function i(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=a;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,u=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,d=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var i=n[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}e.exports=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),s=c.a.oneOfType([c.a.string,c.a.number]),u={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:s},l=a({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:s,maxResolution:s},u),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},d=a(a({},f),l);u.type=Object.keys(f),t.a={all:d,types:f,matchers:u,features:l}},function(e,t,n){var r=n(4);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===x||e===_||e===j||e===g||e===N||e===E||"object"==typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===C||e.$$typeof===w||e.$$typeof===O||e.$$typeof===S||e.$$typeof===P||e.$$typeof===R||e.$$typeof===M||e.$$typeof===I)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:var n=e.type;switch(n){case k:case _:case x:case j:case g:case N:return n;default:var r=n&&n.$$typeof;switch(r){case O:case S:case A:case C:case w:return r;default:return t}}case b:return t}}}function r(e){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),a(e)||n(e)===k}function a(e){return n(e)===_}function o(e){return n(e)===O}function i(e){return n(e)===w}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===y}function s(e){return n(e)===S}function u(e){return n(e)===x}function l(e){return n(e)===A}function f(e){return n(e)===C}function d(e){return n(e)===b}function p(e){return n(e)===j}function m(e){return n(e)===g}function h(e){return n(e)===N}var v="function"==typeof Symbol&&Symbol.for,y=v?Symbol.for("react.element"):60103,b=v?Symbol.for("react.portal"):60106,x=v?Symbol.for("react.fragment"):60107,g=v?Symbol.for("react.strict_mode"):60108,j=v?Symbol.for("react.profiler"):60114,w=v?Symbol.for("react.provider"):60109,O=v?Symbol.for("react.context"):60110,k=v?Symbol.for("react.async_mode"):60111,_=v?Symbol.for("react.concurrent_mode"):60111,S=v?Symbol.for("react.forward_ref"):60112,N=v?Symbol.for("react.suspense"):60113,E=v?Symbol.for("react.suspense_list"):60120,C=v?Symbol.for("react.memo"):60115,A=v?Symbol.for("react.lazy"):60116,I=v?Symbol.for("react.block"):60121,P=v?Symbol.for("react.fundamental"):60117,R=v?Symbol.for("react.responder"):60118,M=v?Symbol.for("react.scope"):60119,T=k,L=_,$=O,F=w,D=y,B=S,H=x,W=A,q=C,z=b,U=j,V=g,Y=N,J=!1;t.AsyncMode=T,t.ConcurrentMode=L,t.ContextConsumer=$,t.ContextProvider=F,t.Element=D,t.ForwardRef=B,t.Fragment=H,t.Lazy=W,t.Memo=q,t.Portal=z,t.Profiler=U,t.StrictMode=V,t.Suspense=Y,t.isAsyncMode=r,t.isConcurrentMode=a,t.isContextConsumer=o,t.isContextProvider=i,t.isElement=c,t.isForwardRef=s,t.isFragment=u,t.isLazy=l,t.isMemo=f,t.isPortal=d,t.isProfiler=p,t.isStrictMode=m,t.isSuspense=h,t.isValidElementType=e,t.typeOf=n}()},function(e,t,n){"use strict";function r(){return null}var a=n(4),o=n(15),i=n(5),c=n(16),s=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e){var t=e&&(N&&e[N]||e[E]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function d(e){function n(n,o,c,s,l,d,p){if(s=s||C,d=d||c,p!==i){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=s+":"+c;!r[h]&&a<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,a++)}}return null==o[c]?n?new f(null===o[c]?"The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(o,c,s,l,d)}var r={},a=0,o=n.bind(null,!1);return o.isRequired=n.bind(null,!0),o}function p(e){function t(t,n,r,a,o,i){var c=t[n];return O(c)!==e?new f("Invalid "+a+" `"+o+"` of type `"+k(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return d(t)}function m(e){function t(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new f("Invalid "+a+" `"+o+"` of type `"+O(c)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,r,a,o+"["+s+"]",i);if(u instanceof Error)return u}return null}return d(t)}function h(e){function t(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||C;return new f("Invalid "+a+" `"+o+"` of type `"+S(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return d(t)}function v(e){function t(t,n,r,a,o){for(var i=t[n],c=0;c<e.length;c++)if(l(i,e[c]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===k(t)?String(t):t}));return new f("Invalid "+a+" `"+o+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+s+".")}return Array.isArray(e)?d(t):(u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function y(e){function t(t,n,r,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=O(c);if("object"!==u)return new f("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(s(c,l)){var d=e(c,l,r,a,o+"."+l,i);if(d instanceof Error)return d}return null}return d(t)}function b(e){function t(t,n,r,a,o){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,n,r,a,o,i))return null;return new f("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var n=0;n<e.length;n++){var a=e[n];if("function"!=typeof a)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+_(a)+" at index "+n+"."),r}return d(t)}function x(e){function t(t,n,r,a,o){var c=t[n],s=O(c);if("object"!==s)return new f("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var d=l(c,u,r,a,o+"."+u,i);if(d)return d}}return null}return d(t)}function g(e){function t(t,n,r,a,c){var s=t[n],u=O(s);if("object"!==u)return new f("Invalid "+a+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var d in l){var p=e[d];if(!p)return new f("Invalid "+a+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(s,d,r,a,c+"."+d,i);if(m)return m}return null}return d(t)}function j(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(j);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!j(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!j(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function k(e){if(void 0===e||null===e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=k(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function S(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var N="function"==typeof Symbol&&Symbol.iterator,E="@@iterator",C="<<anonymous>>",A={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(r),arrayOf:m,element:function(){function t(t,n,r,a,o){var i=t[n];return e(i)?null:new f("Invalid "+a+" `"+o+"` of type `"+O(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return d(t)}(),elementType:function(){function e(e,t,n,r,o){var i=e[t];return a.isValidElementType(i)?null:new f("Invalid "+r+" `"+o+"` of type `"+O(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return d(e)}(),instanceOf:h,node:function(){function e(e,t,n,r,a){return j(e[t])?null:new f("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:y,oneOf:v,oneOfType:b,shape:x,exact:g};return f.prototype=Error.prototype,A.checkPropTypes=c,A.resetWarningCache=c.resetWarningCache,A.PropTypes=A,A}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,s=r(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))o.call(n,l)&&(s[l]=n[l]);if(a){c=a(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(s[c[f]]=n[c[f]])}}return s}},function(e,t,n){"use strict";function r(e,t,n,r,s){for(var u in e)if(c(e,u)){var l;try{if("function"!=typeof e[u]){var f=Error((r||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw f.name="Invariant Violation",f}l=e[u](t,u,r,n,null,o)}catch(p){l=p}if(!l||l instanceof Error||a((r||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=s?s():"";a("Failed "+n+" type: "+l.message+(null!=d?d:""))}}}var a=function(){},o=n(5),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function o(e){var t=e.children,n=e.device,a=e.onChange,o=r(e,["children","device","onChange"]),c=Object(i.a)(o,n,a);return"function"==typeof t?t(c):c?t:null}t.a=o;var i=n(0)}]))}("undefined"!=typeof self&&self)}}]);