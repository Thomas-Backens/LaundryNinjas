import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="root">
      <Link to="/" className="link">
        <div className="name">
          <h1 id="title">Laundry Ninjas LLC</h1>
          <h4 id="sub">Family owned and operated</h4>
        </div>
      </Link>
      <div className="buttons">
        <Link to="/how">
          <div className="shell">
            <button className="button">How it Works</button>
          </div>
        </Link>
        <div className="shell">
          <button className="button">Login</button>
        </div>
        <div className="shell">
          <button className="button">New? Sign up</button>
        </div>
      </div>
    </div>
  );
}
