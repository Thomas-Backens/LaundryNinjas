import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div
      id="footer"
      style={{
        backgroundImage: "url('/noise filled.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div id="footerLine" />
      <div id="footerText">
        <p>Copyright © 2022 Laundry Ninjas LLC - All Rights Reserved.</p>
        <p>Made by Thomas Backens</p>
      </div>
    </div>
  );
}
