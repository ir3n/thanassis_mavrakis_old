exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 5461:
/***/ ((module) => {

// Exports
module.exports = {
	"halfComponent": "HalfImageHalfText_halfComponent__tb3M7",
	"imageWrapper": "HalfImageHalfText_imageWrapper__GfKPq"
};


/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HalfImageHalfText_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5461);
/* harmony import */ var _HalfImageHalfText_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HalfImageHalfText_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const HalfImageHalfText = ({ img , imgRed , text , reverse , red  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_HalfImageHalfText_module_scss__WEBPACK_IMPORTED_MODULE_1___default().halfComponent)} ${reverse ? "reverse" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text half",
                children: text
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_HalfImageHalfText_module_scss__WEBPACK_IMPORTED_MODULE_1___default().imageWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: img,
                        alt: "Thanassis Mavrakis",
                        style: {
                            opacity: red ? "0" : "1"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: imgRed,
                            alt: "Thanassis Mavrakis",
                            style: {
                                opacity: red ? "1" : "0"
                            }
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HalfImageHalfText);


/***/ })

};
;