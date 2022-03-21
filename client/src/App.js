// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import Signin from "../src/components/Signin/Signin";
import Profile from "../src/components/Profile/Profile";
import MainPage from "../src/components/MainPage/MainPage";

function App() {
  

  // useEffect(() => {
  //   fetch("/users")
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json()
  //   .then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  return (
    <>
      <div className="App">
        {/* <MainPage /> */}
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Signin />} />    
        </Routes>
      </div>
    </>
  );
}

export default App;
