import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mutate } from "swr";
// import fetcher from "../../utils/fetcher";
import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((user_data) => setUsers(user_data.users));
    // var responseClone;
    // fetch("/")
    //   .then(function (response) {
    //     responseClone = response.clone();
    //     return response.json();
    //   })
    //   .then(
    //     function (data) {
    //       setUsers(data.users);
    //     },
    //     function (rejectionReason) {
    //       console.log(
    //         "Error parsing JSON from response:",
    //         rejectionReason,
    //         responseClone
    //       );
    //       responseClone
    //         .text()
    //         .then(function (bodyText) {
    //           console.log(
    //             "Received the following instead of valid JSON:",
    //             bodyText
    //           );
    //         });
    //     }
    //   );
  }, []);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      number,
      address,
      password,
    });

    // fetch("http://localhost:3000/register", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     number,
    //     address,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userRegister");
    //   });

    mutate("/api/user", async () => {
      const registeredUser = fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          number,
          address,
          password,
        }),
      });

      console.log(registeredUser);
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
