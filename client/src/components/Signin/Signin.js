import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import SignInForm from '../SignInForm/SignInForm';
import Signup from '../Signup/Signup';
import Button from '../Styles/Button';


export default function Signin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
  <>
    <ProfileNavBar />
    {showLogin ? (
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
        <hr className="hr" />
        <p className="accountquestion">
          Don't have an account?</p>
        <Button onClick={() => setShowLogin(false)}>
          Signup
        </Button> 
    </>
    ) : (
      <>
        <Signup onLogin={onLogin} />
        <hr className="hr" />
        <p className="accountquestion">
          Already have an account?
        </p>
        <Button onClick={() => setShowLogin(true)}>
         Login
        </Button>
      </>
     
    )}
    </>
  )
}