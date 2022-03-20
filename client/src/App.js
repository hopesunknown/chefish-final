// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import Login from "../src/components/Login/Login";
import Profile from "../src/components/Profile/Profile";
import MainPage from "../src/components/MainPage/MainPage";

function App() {
  return (
    <>
      <div className="App">
        {/* <MainPage /> */}
        <Routes>
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/main" element={<MainPage/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/" element={<Login/>} />    
        </Routes>
      </div>
    </>
  );
}

export default App;
