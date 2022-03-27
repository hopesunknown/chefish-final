import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Button from "../Styles/Button";
import Error from "../Styles/Error";
import Input from "../Styles/Input";
import FormField from "../Styles/FormField";
import Label from "../Styles/Label";

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
    <FormField>
        <Label htmlFor="username">Email</Label>
        <Input
          type="text"
          id="username"
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
          {isLoading ? "Loading..." : "Login"}
        </Button>
      
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
      </Card.Body>
</Card>
</div>
<Footer />
</>
)
        }