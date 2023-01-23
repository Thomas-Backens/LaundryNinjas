import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

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
          {/* <Link to="/" className="link"> */}
          <div className="name">
            <h1 id="title">Laundry Ninjas</h1>
            <h4 id="sub">LLC</h4>
          </div>
          {/* </Link> */}
        </div>
        <div className="navButtons">
          {/* <Link to="/"> */}
          <button
            class={`nofillBtn ${location.pathname === "/" && "btnActive"}`}
          >
            Home
          </button>
          {/* </Link> */}
          {/* <Link to="/how"> */}
          <button
            class={`nofillBtn ${location.pathname === "/how" && "btnActive"}`}
          >
            How it works
          </button>
          {/* </Link> */}
          {/* <Link to="/schedule"> */}
          <button class="fillBtn">
            Schedule pickup
            <img className="btnArrow" src="/right-arrow.png" alt="arrow" />
          </button>
          {/* </Link> */}
          {/* {location.pathname !== "/register" &&
          location.pathname !== "/login" ? (
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
              <div className="empty" />
              <div className="empty" />
              <div className="empty" />
            </>
          )} */}
          {/* {location.pathname == "/schedule" && <div className="empty" />}
          {location.pathname !== "/how" ? (
            <Link to="/how">
              <div className="shell">
                <button className="button">How it Works</button>
              </div>
            </Link>
          ) : (
            <div className="empty" />
          )}
          {location.pathname !== "/schedule" && (
            <Link to="/schedule">
              <div className="shell">
                <button className="button">Schedule</button>
              </div>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
}
