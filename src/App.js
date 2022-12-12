import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="how" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/* HERE ---------------------------------------------------------------------*/

// import React from "react";
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

/* HERE ---------------------------------------------------------------------*/
