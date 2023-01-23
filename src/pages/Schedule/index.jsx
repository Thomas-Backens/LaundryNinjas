import { React, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./styles.css";

export default function Register() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      number,
      address,
    });

    const values = {
      fname,
      lname,
      email,
      number,
      address,
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

  return (
    <div className="scheduleRoot">
      <div className="container">
        <div className="top">
          <h1>SIGN UP</h1>
          <h5>You're just a few steps away from never doing laundry again!</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputsVert">
            <div className="inputsHoriz">
              <input
                placeholder="first name..."
                name="from_fname"
                type="text"
                autoComplete="off"
                required
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                placeholder="last name..."
                name="from_lname"
                type="text"
                autoComplete="off"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="inputsHoriz">
              <input
                placeholder="email..."
                name="from_email"
                type="email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="phone number..."
                name="from_number"
                type="tel"
                autoComplete="off"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="inputsHoriz">
              <input
                placeholder="address..."
                name="from_address"
                type="text"
                autoComplete="off"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="inputButtons">
            <Link to="/">
              <div className="inputButton">
                <button>Cancel</button>
              </div>
            </Link>
            <div className="inputButton">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
