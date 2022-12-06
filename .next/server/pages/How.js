"use strict";
(() => {
var exports = {};
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ How)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/styles/theme.js
var theme = __webpack_require__(720);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(308);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(130);
;// CONCATENATED MODULE: ./src/components/HowItWorks/styles.js


const useStyles = (0,core_.makeStyles)(()=>({
        title: {
            color: theme/* default.palette.surface.black */.Z.palette.surface.black
        }
    }));
/* harmony default export */ const styles = (useStyles);

;// CONCATENATED MODULE: ./src/components/HowItWorks/index.jsx




function HowItWorks() {
    const s = styles();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
            className: s.title,
            children: "How it Works"
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/How.js





function How() {
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ jsx_runtime_.jsx(HowItWorks, {})
    });
}


/***/ }),

/***/ 130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [720], () => (__webpack_exec__(143)));
module.exports = __webpack_exports__;

})();