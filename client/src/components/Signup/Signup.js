import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import Checkboxes from "../Checkboxes/Checkboxes";

export default function Signup({ user, setUser }) {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [topicArray, setTopicArray] = useState([]);

  // function handleNameChange(event) {
  //   setFirstName(event.target.value);
  // };

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // };

  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    setErrors([]);
    setLoggedIn(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        email: email,
        password: password
      })
  //   })
  //     .then((resp) => resp.json())
  //     .then((user) => {
  //       if (user.id === undefined || user.id === 0) {
  //         console.log("Not logged in");
  //       } else {
  //         setLoggedIn(true);
  //         window.userId = user.id;
  //       }
  //     });
  // };
}).then((r) => {
  setLoggedIn(false);
  if (r.ok) {
      r.json().then((user) => setUser(user));
  } else {
      r.json().then((err) => setErrors(err.errors));
  }
})
}

  function handleTopicClick(topic) {
    setTopicArray([...topicArray, topic])
  };

    return (
      loggedIn ? (
        <Navigate to="/main" 
        user={user}
        setUser={setUser}
        firstName={firstName} 
        email={email} 
        password={password} 
        loggedIn={loggedIn} 
        />
    ) : (
      <div>
        <div className="NavBar">
          <ProfileNavBar />
          <div className="Logo">
            chefish
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
                onChange={(event) => setFirstName(event.target.value)}
              />
              <br />
              <label>Email:</label>
              <input
               className="SignUpInput"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <label>Password:</label>
              <input
               className="SignUpInput"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <br />

              <input type="submit" className="SignInBtn" />
            </form>
          </div>
        </div>


        <h1>stuff</h1>
        <div className="Checkboxes">
          <Checkboxes handleTopicClick={handleTopicClick} />
        </div>
        <Footer />
      </div>
    )
    )}