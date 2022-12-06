(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__(729);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(308);
;// CONCATENATED MODULE: external "@material-ui/core/CssBaseline"
const CssBaseline_namespaceObject = require("@material-ui/core/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: ./src/styles/theme.js
var theme = __webpack_require__(720);
;// CONCATENATED MODULE: ./src/pages/_app.jsx
// import logo from "../../public/logo.svg";
// import "./App.css";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;








function MyApp(props) {
    const { Component , pageProps  } = props;
    external_react_default().useEffect(()=>{
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Laundry Ninjas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 729:
/***/ (() => {



/***/ }),

/***/ 308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [720], () => (__webpack_exec__(914)));
module.exports = __webpack_exports__;

})();