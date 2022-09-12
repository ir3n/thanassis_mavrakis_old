exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 3752:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__YAaG6",
	"header__logo": "Header_header__logo__fWUpo",
	"header__cta": "Header_header__cta__L6lLA"
};


/***/ }),

/***/ 8455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./pages/components/Header/Header.module.scss
var Header_module = __webpack_require__(3752);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.4e625692.svg","height":97,"width":128});
;// CONCATENATED MODULE: ./pages/components/Header/Header.js






const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Header_module_default()).header__logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "Thanassis Mavrakis"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: router.pathname === "/" ? "/work" : "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Header_module_default()).header__cta,
                    children: router.pathname === "/" ? "My Work" : "Home"
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ })

};
;