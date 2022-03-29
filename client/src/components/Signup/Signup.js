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
        password: password,
        // topic: topicArray
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

console.log(topicArray)

  function handleTopicClick(topic) {
    setTopicArray([...topicArray, topic])
  };

    return (
        <>
        <div className="Signin">
    
          <Card style={{ width: '30rem' }} className="login_card">
            <Card.Body>
            <Card.Title><h2>Sign up a new account</h2></Card.Title>
            <Card.Text>
            Sign up to join cooking meetups near you.
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
            {errors && errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
 
          <Checkboxes handleTopicClick={handleTopicClick} />
          </Card.Body>
    </Card>
    </div>

        <Footer />
    </>
    )}