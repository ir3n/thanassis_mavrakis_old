exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 6581:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__5Ak4P",
	"footer__bg": "Footer_footer__bg__xotQ5",
	"footer__info": "Footer_footer__info__CQUqo",
	"social": "Footer_social__rHpHg",
	"social__icon": "Footer_social__icon__SYMIZ",
	"scroll": "Footer_scroll__zLcNo",
	"copyright": "Footer_copyright__Wo89a"
};


/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6581);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Footer = ({ red , executeScroll , scrollRef  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),
        style: {
            backgroundColor: red ? "#5F0200" : "#000930"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer__bg),
                src: "/images/footer/footer-blue.svg",
                alt: "Let's create together",
                style: {
                    opacity: red ? "0" : "1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer__bg),
                    src: "/images/footer/footer-red.svg",
                    alt: "Let's create together",
                    style: {
                        opacity: red ? "1" : "0"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer__info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "title",
                        style: {
                            textAlign: "center",
                            color: "#FFFFFF"
                        },
                        children: "Let's create together"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().social),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().social__icon),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.instagram.com/thanassis.mavrakis/",
                                    target: "_blank",
                                    children: [
                                        "Instagram",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/footer/instagram.svg",
                                            alt: "Instagram"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().social__icon),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.linkedin.com/in/thanassis-mavrakis-231b3a244",
                                    target: "_blank",
                                    children: [
                                        "Linkedin",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/footer/linkedin.svg",
                                            alt: "Linkedin"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().social__icon),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "mailto:thanassis.mavrakis@gmail.com",
                                    children: [
                                        "Email",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/footer/email.svg",
                                            alt: "Email"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().social__icon),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.shutterstock.com/g/Thanassis",
                                    target: "_blank",
                                    children: [
                                        "Shutterstock",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/footer/shutterstock.svg",
                                            alt: "Shutterstock"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copyright),
                        children: [
                            `© ${new Date().getFullYear()} All rights reserved.`,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " ",
                            `Designed by Thanassis
          Mavrakis. Coded by Irene Borada.`
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().scroll),
                onClick: ()=>{
                    scrollRef ? executeScroll() : window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/footer/top-arrow.svg",
                    alt: "Scroll to top"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;