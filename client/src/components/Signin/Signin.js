import React, { useState } from "react";
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
      <>
        <SignInForm onLogin={onLogin} />
        <hr className="hr" />
        <div className="accountquestion">
          <p>Don't have an account?</p>
        <Button onClick={() => setShowLogin(false)}>
          Signup
        </Button>
        </div> 
    </>
    ) : (
      <>
        <Signup onLogin={onLogin} />
        <hr className="hr" />
        <div className="accountquestion">
          <p>Already have an account?
        </p>
        <Button onClick={() => setShowLogin(true)}>
         Login
        </Button>
        </div>
      </>
     
    )}
    <Footer />
    </>
  )
}