import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";


export default function Login() {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

  // function handleNameChange(event) {
  //   setFirstName(event)
  // };

  // function handleEmailChange(event) {
  //   setEmail(event);
  // };

  // function handlePasswordChange(event) {
  //   setPassword(event);
  // };

  function handleSubmit(event) {
    event.preventDefault();

    // const body = this.state;

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify({ 
        first_name: firstName, 
        email: email, 
        password: password }),
    };

    fetch(`http://localhost:3000/users/login`, configObj)
      .then((resp) => resp.json())
      .then((user) => {
        if (user.id === undefined || user.id === 0) {
          console.log("Not logged in");
        } else {
          setLoggedIn(true);
          window.userId = user.id;
        }
      });
  };

  return (
    loggedIn ? (
      <Link to="/main" />
    ) : (
      <div>
        THIS IS THE LOGIN PAGE
        <div className="NavBar">
          <ProfileNavBar />
          <SearchContainer />
          <div className="Logo">
            {/* <img src="/logo1.png" alt="logo" width="100" /> */}
          </div>
        </div>
        <div className="Signin">
          <h1>Log in:</h1>

          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              className="SignInForm"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              className="SignInForm"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              className="SignInForm"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <input type="submit" className="SignInBtn" />
          </form>
        </div>
        <Footer />
      </div>
    )
  )
}