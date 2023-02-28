import { React, useState, useRef } from "react";
import emailjs from "emailjs-com";
import moment from "moment";
import "./styles.css";

export default function Register() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [servSpeed, setServSpeed] = useState("Regular");
  const [numOfBags, setNumOfBags] = useState("");
  const [detPref, setDetPref] = useState("None");
  const [bleach, setBleach] = useState("NOT use Bleach");
  const [cbleach, setCbleach] = useState("NOT use Colored Bleach");
  const [sInstructions, setSInstructions] = useState("NONE");
  const [fold, setFold] = useState("Do not Fold");
  const [hang, setHang] = useState("do not Hang");

  const rootForm = useRef(null);

  function openSection(sectionNumber) {
    if (rootForm.current.children[sectionNumber].dataset.open === "true")
      return;

    for (var i = 0; i < rootForm.current.children.length; i++) {
      rootForm.current.children[i].dataset.open = false;
    }
    rootForm.current.children[sectionNumber].dataset.open = true;
  }

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  function phoneNumberFormatter() {
    const inputField = document.getElementById("phone-number");
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;

    setNumber(inputField.value);
  }

  function moveServiceSelecter(dir) {
    const ServSel = document.getElementById("service-selecter");
    ServSel.dataset.servside = dir;
    const pricings = document.getElementsByClassName("pricing");
    const services = document.getElementsByClassName("service-text");
    for (const pricing of pricings) {
      pricing.classList.remove("checked");
    }
    for (const service of services) {
      service.classList.remove("selected");
    }
    document.querySelector(`.pricing#${dir}`).classList.add("checked");
    document
      .querySelector(`.service-text#${dir === "left" ? "reg" : "exp"}`)
      .classList.add("selected");

    setServSpeed(dir === "left" ? "Regular" : "Express");
  }

  function updateBagNumber(add) {
    const numberOfBags = document.getElementById("numOfBags");
    let newNum = parseFloat(numberOfBags.innerHTML) + 1;
    if (add) {
      if (newNum <= 5) {
        numberOfBags.innerHTML = newNum;
      }
    } else {
      if (newNum > 2) {
        numberOfBags.innerHTML -= 1;
      }
    }

    setNumOfBags(numberOfBags.innerHTML);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      number,
      address,
      servSpeed,
      numOfBags,
      detPref,
      bleach,
      cbleach,
      sInstructions,
      fold,
      hang,
    });

    const values = {
      fname,
      lname,
      email,
      number,
      address,
      servSpeed,
      numOfBags,
      detPref,
      bleach,
      cbleach,
      sInstructions,
      fold,
      hang,
    };

    // .sendForm(
    //   "service_15n8djy",
    //   "template_onxfe0i",
    //   e.target,
    //   "0cq2guiOpGiJj0sfY"
    // )

    emailjs
      .send("service_0bs9ewr", "template_onxfe0i", values, "0cq2guiOpGiJj0sfY")
      .then(
        (result) => {
          window.location.reload();
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(moment().isAfter(moment("15:00:00", "HH:mm:ss")));

  return (
    <div
      className="scheduleRoot"
      style={{
        backgroundImage: "url('/noise filled.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container">
        <div className="top">
          <h1>SIGN UP</h1>
          <h5>You're just a few steps away from never doing laundry again!</h5>
        </div>
        <form id="rootForm" ref={rootForm} onSubmit={handleSubmit}>
          <div
            className="section"
            data-open={true}
            data-size={1}
            onClick={() => openSection(0)}
          >
            <h2>Name</h2>
            <div className="input-horiz">
              <input
                placeholder="First Name"
                className="input-text"
                name="from_fname"
                required
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                placeholder="Last Name"
                className="input-text"
                name="from_lname"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div
            className="section"
            data-open={false}
            data-size={2}
            onClick={() => openSection(1)}
          >
            <h2>Info</h2>
            <div className="input-horiz">
              <input
                placeholder="Email"
                className="input-text"
                name="from_email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Address"
                className="input-text"
                name="from_address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input-horiz" style={{ marginTop: -10 }}>
              <input
                placeholder="Number"
                type="tel"
                className="input-text"
                id="phone-number"
                name="from_number"
                required
                onChange={() => phoneNumberFormatter()}
              />
            </div>
          </div>
          <div
            className="section"
            data-open={false}
            data-size={2}
            onClick={() => openSection(2)}
          >
            <h2>Service Speed</h2>
            <p id="mustOrder">
              {moment().isBefore(moment("12:00", "hh:mm"))
                ? `Order by ${
                    servSpeed === "Regular"
                      ? "3pm, and recieve laundry by 9pm  tomorrow"
                      : "12pm, and recieve laundry by 9pm today"
                  }`
                : moment().isBefore(moment("03:00", "hh:mm"))
                ? "Order by 3pm, and recieve laundry by 9pm tomorrow"
                : "Laundry will be picked up tomorrow, and dropped off by 9pm the day after"}
            </p>
            <div className="service-buttons">
              <button
                type="button"
                name="servSpeed"
                onClick={() => moveServiceSelecter("left")}
              >
                <span className="service-text selected" id="reg">
                  Regular
                </span>
                <span className="pricing checked" id="left">
                  ($1.50/pound)
                </span>
              </button>
              <span id="service-selecter" data-servside="left"></span>
              <button
                type="button"
                name="servSpeed"
                disabled={moment().isAfter(moment("12:00:00", "HH:mm:ss"))}
                onClick={() => moveServiceSelecter("right")}
              >
                <span className="service-text" id="exp">
                  Express
                </span>
                <span
                  className="pricing"
                  id={
                    moment().isAfter(moment("12:00:00", "HH:mm:ss"))
                      ? "toolate"
                      : "right"
                  }
                >
                  {moment().isAfter(moment("12:00:00", "HH:mm:ss"))
                    ? "Too late"
                    : "($2.50/pound)"}
                </span>
              </button>
            </div>
            <div id="bags">
              <p># of bags</p>
              <div id="bagButtons">
                <button
                  type="button"
                  name="numOfBags"
                  onClick={() => updateBagNumber(false)}
                >
                  -
                </button>
                <p id="numOfBags">1</p>
                <button
                  type="button"
                  name="numOfBags"
                  onClick={() => updateBagNumber(true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div
            className="section"
            data-open={false}
            data-size={2}
            onClick={() => openSection(3)}
          >
            <h2>Detergent Preferences</h2>
            <div className="input-checks">
              <div>
                <input
                  name="detergent"
                  type="radio"
                  className="input-checkbox"
                  id="gain"
                  onChange={() => setDetPref("Gain")}
                />
                <label for="gain">Gain</label>
              </div>
              <div>
                <input
                  name="detergent"
                  type="radio"
                  className="input-checkbox"
                  id="tide"
                  onChange={() => setDetPref("Tide")}
                />
                <label for="tide">Tide</label>
              </div>
              <div>
                <input
                  name="detergent"
                  type="radio"
                  className="input-checkbox"
                  id="hypo"
                  onChange={() => setDetPref("Hypoallergenic")}
                />
                <label for="hypo">
                  Hypoallergenic (Dye/Perfume/Scent-Free)
                </label>
              </div>
              <div>
                <input
                  name="detergent"
                  type="radio"
                  className="input-checkbox"
                  id="prov"
                  onChange={(e) => setDetPref("I will provide")}
                />
                <label for="prov">
                  I will provide (Include detergent with your laundry and we'll
                  use it.)
                </label>
              </div>
            </div>
          </div>
          <div
            className="section"
            data-open={false}
            data-size={2}
            onClick={() => openSection(4)}
          >
            <h2>Extras</h2>
            <div className="input-checks">
              <div>
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="ble"
                  name="bleach"
                  onChange={() => setBleach("Use Bleach")}
                />
                <label for="ble">Bleach (for whites only)</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="clr"
                  name="cbleach"
                  onChange={() => setCbleach("Use Colored Bleach")}
                />
                <label for="clr">Color Bleach</label>
              </div>
            </div>
            <p style={{ marginTop: 20 }}>Any special instructions?</p>
            <textarea
              className="input-textbox"
              name="sinstructions"
              onChange={(e) => setSInstructions(e.target.value)}
            ></textarea>
          </div>
          <div
            className="section"
            data-open={false}
            data-size={2}
            onClick={() => openSection(5)}
          >
            <h2>Finishing Preferences</h2>
            <div className="input-checks">
              <div>
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="fold"
                  name="fold"
                  onChange={() => setFold("Fold")}
                />
                <label for="fold">Fold</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="hang"
                  name="hang"
                  onChange={() => setHang("Hang")}
                />
                <label for="hang">Hang (Provide your own hangers)</label>
              </div>
              <div id="submitButton">
                <button type="submit" className="fillBtn" id="headerBtn">
                  Send Email
                  <img
                    className="btnArrow"
                    src="/right-arrow.png"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
