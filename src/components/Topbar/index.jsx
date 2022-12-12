import React from "react";
import "./styles.css";

export default function Topbar() {
  return (
    <div className="root">
      <div className="name">
        <h1 id="title">Laundry Ninjas LLC</h1>
        <h4 id="sub">Family owned and operated</h4>
      </div>
      <div className="buttons">
        <div className="shell">
          <button className="button">How it Works</button>
        </div>
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
