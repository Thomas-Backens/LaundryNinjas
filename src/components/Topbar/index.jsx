import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();
  return (
    <div className="root">
      <Link to="/" className="link">
        <div className="name">
          <h1 id="title">Laundry Ninjas LLC</h1>
          <h4 id="sub">Family owned and operated</h4>
        </div>
      </Link>
      <div className="buttons">
        {location.pathname !== "/register" && location.pathname !== "/login" ? (
          <>
            {location.pathname !== "/how" ? (
              <Link to="/how">
                <div className="shell">
                  <button className="button">How it Works</button>
                </div>
              </Link>
            ) : (
              <div className="empty" />
            )}
            <Link to="/login">
              <div className="shell">
                <button className="button">Login</button>
              </div>
            </Link>
            <Link to="/register">
              <div className="shell">
                <button className="button">New? Sign up</button>
              </div>
            </Link>
          </>
        ) : (
          <>
            {/* <div className="empty" /> */}
            <div className="empty" />
            <div className="empty" />
            <img
              className="logo"
              src="/Laundry Ninjas Black No Text.png"
              alt="a ninja on top of a laundry basket, the company logo"
            />
          </>
        )}
      </div>
    </div>
  );
}
