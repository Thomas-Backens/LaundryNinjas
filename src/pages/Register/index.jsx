import { React, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      number,
      address,
      password,
    });
  };

  return (
    <div className="reglogRoot">
      <div className="container">
        <div className="top">
          <h1>SIGN UP</h1>
          <h5>You're just a few steps away from never doing laundry again!</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputsVert">
            <div className="inputsHoriz">
              <input
                placeholder="name..."
                name="name"
                type="text"
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="email..."
                name="email"
                type="email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputsHoriz">
              <input
                placeholder="phone number..."
                name="number"
                type="tel"
                autoComplete="off"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                placeholder="address..."
                name="address"
                type="text"
                autoComplete="off"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inputsHoriz">
              <input
                placeholder="password..."
                name="password"
                type="password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
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
