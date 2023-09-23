"use strict";
(() => {
var exports = {};
exports.id = 3909;
exports.ids = [3909,9376];
exports.modules = {

/***/ 9376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "EXTERNAL_API": () => (/* binding */ EXTERNAL_API),
/* harmony export */   "LINKS": () => (/* binding */ LINKS),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL)
/* harmony export */ });
// development server constants
const BASE_URL = "http://localhost:3000/";
const EXTERNAL_API = "https://backend-autorent-c39b3d74adff.herokuapp.com/car"; // test server constants
// export const BASE_URL = process.env.BASE_URL
// export const BASE_URL = "http://81.177.48.218:9995/"

const LINKS = {
  mapAddress: 'https://goo.gl/maps/GpNUmh4JMXHcN32w8',
  phone: 'tel:+3725535603',
  email: 'mailto:redautorent@gmail.com',
  facebook: 'https://www.facebook.com/www.redautorent.ee',
  instagram: 'https://www.instagram.com/redautorent/'
};
const EMAIL = 'redautorent@gmail.com'; // export const EMAIL = 'redautorentestonia@gmail.com'

/***/ }),

/***/ 6739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  EMAIL
} = __webpack_require__(9376);

const fs = __webpack_require__(5747);

const nodemailer = __webpack_require__(8123);

const smtp = {
  host: process.env.GMAIL_HOST,
  port: parseInt(process.env.GMAIL_PORT)
};
const user = {
  username: process.env.GMAIL_USERNAME,
  password: process.env.GMAIL_PASSWORD
};

async function main(mail) {
  let transporter = nodemailer.createTransport({
    // true for 465, false for other ports
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user.username,
      pass: user.password
    } // tls : {
    //     rejectUnauthorized : false
    // }

  });
  transporter.sendMail({
    from: 'info@redautorent.ee',
    to: EMAIL,
    subject: "RED Autorent | " + mail.subject,
    text: mail.text,
    html: mail.html
  }, (err, info) => {
    console.log('error sending email: ', err);
    console.log('info: ', info);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const body = JSON.parse(req.body);
  const subject = `Broner Car - ${body.auto}`;
  const text = `
    ${subject} \n\n
    Name: ${body.name} \n
    Phone: ${body.phone} \n\n
    ${Object.keys(body).map(key => body[key] ? key + ': ' + body[key] + '\n' : key + ': null' + '\n')}
    `;
  const html = `

  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>HTML Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
      body {
          width: 100% !important;
          max-width: 600px;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
          line-height: 100%;
      }
  
      [style*="Open Sans"] {font-family: 'Open Sans', arial, sans-serif !important;}
  
      table td {
          border-collapse: collapse;
      }
  
      table {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
      }
  
  </style>
  </head>
  
  <body style="margin: 0; padding: 0;">
      <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff">
          <tr>
              <td colspan="2" style="background-color:#B5190F;text-align: center;">
                  <p style="color:#ffffff">
                      <b>REDAutorent</b>
                  </p>
                  <p style="color:#ffffff;font-size: 24px;">
                      <b>Новая заявка - ${body['auto']}</b>
                  </p>
                  <p style="color:#ffffff">
                      <b>${body['name']} - <a style="color:#ffffff" href="tel:${body['phone']}">${body['phone']}</a></b>
                  </p>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Name:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['name']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Surname:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['surname']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Email:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['email']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Address:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['address']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Phone:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['phone']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>PesonalID:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>${body['personalid']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Auto:</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span><b>${body['auto']}</b></span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 25px; padding-left: 5px" colspan="2">
                  <b>Start</b>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Date:</span><br /><span>${body['startdate']}</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Time:</span><br /><span>${body['starttime']}</span>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 25px; padding-left: 5px" colspan="2">
                  <b>Stop</b>
              </td>
          </tr>
          <tr>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Date:</span><br /><span>${body['stopdate']}</span>
              </td>
              <td style="padding-top: 5px; padding-left: 5px">
                  <span>Time:</span><br /><span>${body['stoptime']}</span>
              </td>
          </tr>
          <tr>
              <td colspan="2" style="padding-top: 25px; padding-left: 5px">
                  <span><b>Additionl information:</b></span>
              </td>
          </tr>
          <tr>
              <td colspan="2" style="padding-top: 5px; padding-left: 5px">
                  <span>${body['additional']}</span>
              </td>
          </tr>
      </table>
  </body>
  
  </html>
    `;
  const mail = {
    text,
    html,
    subject
  }; // await main(mail)

  console.log('Start mail' + new Date());
  console.log(user);
  await main(mail).then(() => {
    return res.status(200).json({
      status: 'ok'
    });
  }).catch(e => {
    console.error(e);
    res.status(400).json({
      status: 'error'
    });
  });
});

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6739));
module.exports = __webpack_exports__;

})();