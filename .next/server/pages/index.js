"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(130);
// EXTERNAL MODULE: ./src/styles/theme.js
var theme = __webpack_require__(720);
;// CONCATENATED MODULE: ./src/components/Homepage/styles.js


const useStyles = (0,core_.makeStyles)(()=>({
        title: {
            color: theme/* default.palette.surface.black */.Z.palette.surface.black
        }
    }));
/* harmony default export */ const styles = (useStyles);

;// CONCATENATED MODULE: ./src/components/Homepage/index.jsx




function Homepage() {
    const s = styles();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
            className: s.title,
            children: "HOME"
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/index.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "../reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import theme from "../styles/theme";
// import { ThemeProvider } from "@material-ui/core/styles";

function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Homepage, {});
} // import ReactDOM from "react-dom";
 // import { BrowserRouter, Routes, Route } from "react-router-dom";
 // import Layout from "./Layout";
 // import Home from "./Home";
 // export default function App() {
 //   return (
 //     <BrowserRouter>
 //       <Routes>
 //         <Route path="/" element={<Layout />}>
 //           <Route index element={<Home />} />
 //         </Route>
 //       </Routes>
 //     </BrowserRouter>
 //   );
 // }
 // const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(<App />);


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
var __webpack_exports__ = __webpack_require__.X(0, [720], () => (__webpack_exec__(293)));
module.exports = __webpack_exports__;

})();