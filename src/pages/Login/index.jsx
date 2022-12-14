import { React, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  return (
    <div className="reglogRoot">
      <div className="container">
        <div className="top">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputsLogin">
            <input
              placeholder="email..."
              name="email"
              type="email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password..."
              name="password"
              type="password"
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputButtons">
            <Link to="/">
              <div className="inputButton">
                <button>Cancel</button>
              </div>
            </Link>
            <div className="inputButton">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
