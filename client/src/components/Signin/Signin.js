import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import SignInForm from '../SignInForm/SignInForm';
import Signup from '../Signup/Signup';


export default function Signin({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

//     const [firstName, setFirstName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState([]);
//     const [loggedIn, setLoggedIn] = useState(false);

//   function handleSubmit(e){
//     e.preventDefault();
//     setLoggedIn(true);
//     fetch("/login", {
//         method: 'POST',
//         headers: { "Content-Type": "application/json"},
//         body: JSON.stringify({ email: email, password: password })
//     }).then ((r) => {
//         setLoggedIn(false);
//         if (r.ok){
//             r.json().then((user) => setUser(user));
//         } else {
//             r.json().then((err) => setErrors(err.errors));
//         }
//     });
// }

  return (
  
    showLogin ? (
      // <Navigate to="/main" 
      //   user={user}
      //   setUser={setUser}
      //   firstName={firstName} 
      //   email={email} 
      //   password={password} 
      //   loggedIn={loggedIn} 
      //   />
      <>
      <SignInForm onLogin={onLogin} />
      <hr />
      <p className="accountquestion">
        Don't have an account?</p> &nbsp;
        <button onClick={() => setShowLogin(false)}>
          Sign Up
        </button> 
    </>
    ) : (
      <>
      <Signup onLogin={onLogin} />
          <hr />
          <p className="accountquestion">
            Already have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
      </>
     
    )
  
  )
}