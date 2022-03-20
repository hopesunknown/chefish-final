import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import Checkboxes from "../Checkboxes/Checkboxes";

export default function Signup() {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [topicArray, setTopicArray] = useState([]);

  function handleNameChange(event) {
    setFirstName(event.target.value);
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        email: email,
        password: password
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.id === undefined || user.id === 0) {
          console.log("Not logged in");
        } else {
          console.log("login");
          setLoggedIn(true);
          window.userId = user.id;
        }
      });
  };

  function handleTopicClick(topic) {
    setTopicArray([...topicArray, topic])
  };

    return (
      loggedIn ? (
      <Link to="/main" />
    ) : (
      <div>
        THIS IS THE SIGN UP PAGE
        <div className="NavBar">
          <ProfileNavBar />
          <SearchContainer />
          <div className="Logo">
            {/* <img src="/logo1.png" alt="logo" width="100" /> */}
          </div>
        </div>
        <div className="Signup">
          <div className="Signin">
            <h1>Create account:</h1>

            <form onSubmit={handleSubmit}>
              <label>First Name:</label>
              <input
              className="SignUpInput"
                type="text"
                value={firstName}
                onChange={handleNameChange}
              />
              <br />
              <label>Email:</label>
              <input
               className="SignUpInput"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <label>Password:</label>
              <input
               className="SignUpInput"
                type="text"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <br />

              <input type="submit" className="SignInBtn" />
            </form>
          </div>
        </div>
        <div className="Checkboxes">
          <Checkboxes handleTopicClick={handleTopicClick} />
        </div>
        <Footer />
      </div>
    )
    )}