(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7f01b434.svg","height":595,"width":842});
// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__(729);
;// CONCATENATED MODULE: ./src/pages/_app.jsx



function App() {
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "App",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("header", {
            className: "App-header",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                    src: logo,
                    className: "App-logo",
                    alt: "logo"
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("p", {
                    children: [
                        "Edit ",
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("code", {
                            children: "src/App.js"
                        }),
                        " and save to reload."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("a", {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Learn React"
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (App); /* HERE ---------------------------------------------------------------------*/  // import React from "react";
 // import PropTypes from "prop-types";
 // import "../styles/index.css";
 // import Head from "next/head";
 // import { ThemeProvider } from "@material-ui/core/styles";
 // import CssBaseline from "@material-ui/core/CssBaseline";
 // import theme from "../styles/theme";
 // import Topbar from "../components/Topbar";
 // export default function MyApp(props) {
 //   const { Component, pageProps } = props;
 //   React.useEffect(() => {
 //     const jssStyles = document.querySelector("#jss-server-side");
 //     if (jssStyles) {
 //       jssStyles.parentElement.removeChild(jssStyles);
 //     }
 //   }, []);
 //   return (
 //     <>
 //       <Head>
 //         <title>Laundry Ninjas</title>
 //         <meta
 //           name="viewport"
 //           content="minimum-scale=1, initial-scale=1, width=device-width"
 //         />
 //       </Head>
 //       <ThemeProvider theme={theme}>
 //         <CssBaseline />
 //         <Topbar />
 //         <Component {...pageProps} />
 //       </ThemeProvider>
 //     </>
 //   );
 // }
 // MyApp.propTypes = {
 //   Component: PropTypes.elementType.isRequired,
 //   pageProps: PropTypes.object.isRequired,
 // };
 /* HERE ---------------------------------------------------------------------*/  // import ReactDOM from "react-dom/client";
 // import { BrowserRouter, Routes, Route } from "react-router-dom";
 // import Home from "./index";
 // export default function App() {
 //   return (
 //     <BrowserRouter>
 //       <Routes>
 //         <Route path="/" element={<Home />}>
 //           {/* <Route index element={<Home />} />
 //           <Route path="blogs" element={<Blogs />} />
 //           <Route path="contact" element={<Contact />} />
 //           <Route path="*" element={<NoPage />} /> */}
 //         </Route>
 //       </Routes>
 //     </BrowserRouter>
 //   );
 // }
 // const root = ReactDOM.createRoot(document.getElementById('root'));
 // root.render(<App />);


/***/ }),

/***/ 729:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(309));
module.exports = __webpack_exports__;

})();