import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "../src/components/Signup/Signup";
import Signin from "../src/components/Signin/Signin";
import Profile from "../src/components/Profile/Profile";
import MainPage from "../src/components/MainPage/MainPage";
import Inspo from "../src/components/Inspo/Inspo"

function App() {
  const [user, setUser] = useState(null);
  const [meetups, setMeetups] = useState([]);
  const [removeRequest, setRemoveRequest] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/meetups")
      .then((response) => response.json())
      .then((meetups) => setMeetups(meetups));
  }, []);

  function handleRemoveMeetup(id) {
    fetch(`/meetups/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setRemoveRequest(!removeRequest))
  }

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
    <Signin onLogin={setUser}/>
  )

  return (
    <>
      <div className="App">
        
        <Routes>
          <Route exact path="/signin" element={<Signin 
          user={user}
          onLogin={setUser} />} />

          <Route exact path="/profile" element={<Profile 
          user={user} 
          setUser={setUser} 
          meetups={meetups} 
          setMeetups={setMeetups} />} />

          {/* <Route exact path="/main" element={<MainPage 
          user={user} 
          setUser={setUser} 
          meetups={meetups} 
          setMeetups={setMeetups}
          handleLogOutClick={handleLogOutClick} />} /> */}

          <Route exact path="/signup" element={<Signup 
          user={user} 
          onLogin={setUser} />} />

          <Route exact path="/recipes" element={<Inspo 
          user={user}
          onLogin={setUser} />} />

          <Route exact path="/" element={<MainPage 
          user={user} 
          onLogin={setUser}
          meetups={meetups} 
          setMeetups={setMeetups}
          handleLogOutClick={handleLogOutClick}
          handleRemoveMeetup={handleRemoveMeetup} />} />    
        </Routes>

      </div>
    </>
  );
}

export default App;