import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import HowItWorks from "./pages/HowItWorks";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  // const location = useLocation();
  return (
    <>
      {/* {location.pathname !== "/register" && location.pathname !== "/login" ? (
        <Topbar />
      ) : (
        ""
      )} */}
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="how" element={<HowItWorks />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
