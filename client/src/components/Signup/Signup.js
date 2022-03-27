import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import Checkboxes from "../Checkboxes/Checkboxes";
import { Card } from 'react-bootstrap';
import Button from "../Styles/Button";
import Error from "../Styles/Error";
import Input from "../Styles/Input";
import FormField from "../Styles/FormField";
import Label from "../Styles/Label";

export default function Signup({ onLogin }) {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleTopicClick(topic) {
    setTopicArray([...topicArray, topic])
  };

    return (
        // <div className="Signup">
        //   <div className="Signin">
        //     <h1>Create account:</h1>

        //     <form onSubmit={handleSubmit}>
        //       <label>First Name:</label>
        //       <input
        //       className="SignUpInput"
        //         type="text"
        //         value={firstName}
        //         onChange={(event) => setFirstName(event.target.value)}
        //       />
        //       <br />
        //       <label>Email:</label>
        //       <input
        //        className="SignUpInput"
        //         type="text"
        //         value={email}
        //         onChange={(event) => setEmail(event.target.value)}
        //       />
        //       <br />
        //       <label>Password:</label>
        //       <input
        //        className="SignUpInput"
        //         type="text"
        //         value={password}
        //         onChange={(event) => setPassword(event.target.value)}
        //       />
        //       <br />
        //       <br />

        //       <input type="submit" className="SignInBtn" />
        //     </form>
        //   </div>
        // </div>
        <>
        <div className="Signin">
    
          <Card style={{ width: '30rem' }} className="login_card">
            <Card.Body>
            <Card.Title><h2>Sign up a new account</h2></Card.Title>
            <Card.Text>
            Sign up to access cooking groups near you.
            </Card.Text>
    
            <form onSubmit={handleSubmit}>
            <FormField>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormField>
        <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          
            <Button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Signup"}
            </Button>
          
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
        <div className="Checkboxes">
          <Checkboxes handleTopicClick={handleTopicClick} />
        </div>
          </Card.Body>
    </Card>
    </div>

        <Footer />
    </>
    )}