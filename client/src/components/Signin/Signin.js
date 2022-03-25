import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
// import SearchContainer from "../SearchContainer/SearchContainer";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";


export default function Signin({ user, setUser, handleLogin }) {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   fetch("/users/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ 
  //       first_name: firstName, 
  //       email: email, 
  //       password: password
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.id === undefined || data.id === 0) {
  //         console.log("Not logged in");
  //       } else {
  //         console.log("logged in");
  //         setLoggedIn(true);
  //         setUser(data)
  //       }
  //     });
  // };

  function handleSubmit(e){
    e.preventDefault();
    setLoggedIn(true);
    fetch("/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ first_name: firstName, email: email, password: password })
    }).then ((r) => {
        setLoggedIn(false);
        if (r.ok){
            r.json().then((user) => setUser(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
}

  return (
  
    loggedIn ? (
      <Navigate to="/main" 
        firstName={firstName} 
        email={email} 
        password={password} 
        loggedIn={loggedIn} 
        />
    ) : (
      <div>
        <div className="NavBar">
          <ProfileNavBar />
          {/* <SearchContainer /> */}
          <div className="Logo">
            {/* <img src="/logo1.png" alt="logo" width="100" /> */}
          </div>
        </div>
        <div className="Signin">
          <h1>Login to your account</h1>
          <h4>Enter your info to access cooking groups near you.</h4>

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
            <input type="submit" className="SignInBtn"/>
              {/* {loggedIn ? "Loading..." : "Login"}</input> */}
          </form>
        </div>

        Don't have an account? <Link to="/Signup">Create Account</Link>
        <Footer />
      </div>
    )
  
  )
}