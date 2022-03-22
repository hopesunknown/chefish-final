// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import Signin from "../src/components/Signin/Signin";
import Profile from "../src/components/Profile/Profile";
import MainPage from "../src/components/MainPage/MainPage";

function App() {
  const [user, setUser] = useState(null);
  const [meetups, setMeetups] = useState([]);
  // const [currentUser, setCurrentUser] = useState({})

  // useEffect(() => {
  //   fetch("/users")
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json()
  //   .then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  useEffect(() => {
    fetch("/meetups")
      .then((response) => response.json())
      .then((meetups) => setMeetups(meetups));
  }, []);

  // function handleLogin(value){
  //   setCurrentUser(value)
  //   localStorage.setItem('id', value.id)
  // }
  return (
    <>
      <div className="App">
        {/* <MainPage /> */}
        
        <Routes>
          <Route exact path="/signin" element={<Signin user={user} setUser={setUser} />} />
          <Route exact path="/profile" element={<Profile user={user} setUser={setUser} meetups={meetups} setMeetups={setMeetups} />} />
          <Route exact path="/main" element={<MainPage user={user} setUser={setUser} meetups={meetups} setMeetups={setMeetups} />} />
          <Route exact path="/signup" element={<Signup user={user} setUser={setUser} />} />
          <Route exact path="/" element={<Signin user={user} setUser={setUser} />} />    
        </Routes>
      </div>
    </>
  );
}

export default App;