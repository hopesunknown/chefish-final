import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import Signin from "../src/components/Signin/Signin";
import Profile from "../src/components/Profile/Profile";
import MainPage from "../src/components/MainPage/MainPage";

function App() {
  const [user, setUser] = useState(null);
  const [meetups, setMeetups] = useState([]);

  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch("/me")
  //     .then((response) => response.json())
  //     .then((user) => setUser(user));
  // }, []);

  useEffect(() => {
    fetch("/meetups")
      .then((response) => response.json())
      .then((meetups) => setMeetups(meetups));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}

  if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    <Signin setUser={setUser}/>
    </>
  )

  return (
    <>
      <div className="App">
        
        <Routes>
          <Route exact path="/signin" element={<Signin 
          user={user} 
          setUser={setUser} />} />

          <Route exact path="/profile" element={<Profile 
          user={user} 
          setUser={setUser} 
          meetups={meetups} 
          setMeetups={setMeetups} />} />

          <Route exact path="/main" element={<MainPage 
          user={user} 
          setUser={setUser} 
          meetups={meetups} 
          setMeetups={setMeetups} />} />

          <Route exact path="/signup" element={<Signup 
          user={user} 
          setUser={setUser} />} />

          <Route exact path="/" element={<Signin 
          user={user} 
          setUser={setUser} />} />    
        </Routes>
        
      </div>
    </>
  );
}

export default App;