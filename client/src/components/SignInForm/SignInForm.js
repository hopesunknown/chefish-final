import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function SignInForm({ onLogin }) {

const [firstName, setFirstName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
    method: 'POST',
    headers: { 
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        email: email, 
        password: password }),
    })
    .then ((r) => {
        setIsLoading(false);
    if (r.ok){
        r.json().then((user) => onLogin(user));
    } else {
        r.json().then((err) => setErrors(err.errors));
    }
    });
}

return (
    <>
    <div className="Signin">

      <Card style={{ width: '30rem' }} className="login_card">
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
</>
)
        }