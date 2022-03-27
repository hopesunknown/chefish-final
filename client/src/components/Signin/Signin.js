import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";


export default function Signin({ user, setUser, handleLogin }) {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setLoggedIn(true);
    fetch("/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email: email, password: password })
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
        </div>
        <div className="Signin">

      <Card style={{ width: '30rem' }} className="login_card">
{/* <Card.Img variant="top" src={umbrella} alt="umbrella" /> */}
        <Card.Body>
        <Card.Title><h2>Login to your account</h2></Card.Title>
        <Card.Text>
        Enter your info to access cooking groups near you.
        </Card.Text>

          <form onSubmit={handleSubmit}>
            {/* <label>First Name:</label>
            <input
              className="SignInForm"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <br /> */}
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

        Don't have an account? <Link to="/signup">Create Account</Link>
  

      </Card.Body>
</Card>
</div>
<Footer />
</div>



    )
  
  )
}


// <div>
// <Card style={{ width: '30rem' }} className="login_card">
// <Card.Img variant="top" src={umbrella} alt="umbrella" />
//     <Card.Body>
//         <Card.Title><h2>Welcome back</h2></Card.Title>
//         <Card.Text>
//         Login to your account
//         </Card.Text>
//         <form onSubmit={manageLogin}>
//             <label htmlFor="login" value="Email"></label><br/>
//             <input
//                 type="text"
//                 name="login"
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"  /><br></br>
//             <input
//                 type="password"
//                 name="login"
//                 onChange={handlePassword}
//                 placeholder="Password"  /><br></br>
//             <input type="submit" value="Login" className="loginbutton"/>
//         </form>
//         <p className="newhere">New Here?</p>
//             <Link to='/create' className="createaccount">Create Account</Link>
//     </Card.Body>
// </Card>