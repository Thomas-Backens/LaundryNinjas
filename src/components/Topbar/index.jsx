import React from "react";
import "./styles.css";
import { useLocation, Link } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();
  return (
    <div className="root">
      <div className="fixed">
        <div id="logoSection">
          <img
            className="logo"
            src="/Laundry Ninjas White No Text No Name.png"
            alt="a ninja on top of a laundry basket, the company logo"
          />
          <div className="name">
            <h1 id="title">Laundry Ninjas</h1>
            <h4 id="sub">LLC</h4>
          </div>
        </div>
        <div className="navButtons">
          <Link to="/">
            <button
              className={`nofillBtn ${
                location.pathname === "/" && "btnActive"
              }`}
            >
              Home
            </button>
          </Link>
          <Link to="/how">
            <button
              className={`nofillBtn ${
                location.pathname === "/how" && "btnActive"
              }`}
            >
              How it works
            </button>
          </Link>
          <Link to="/schedule">
            <button className="fillBtn">
              Schedule pickup
              <img className="btnArrow" src="/right-arrow.png" alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
