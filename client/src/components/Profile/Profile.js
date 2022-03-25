import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllThreeProfile from "../AllThreeProfile/AllThreeProfile";

export default function Profile({ user, setUser, meetups, setMeetups }) {

  // useEffect(() => {
  //   console.log(user)
  //       fetch(`/users/${user.id}`)
  //         .then((response) => response.json())
  //         .then((user) => setUser(user));
  // }, []);
        
    return (
            <div>
                <NavBar
                  userInfo={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
                <AllThreeProfile
                  userInfo={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
                <Footer
                  userInfo={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
            </div>
        );
    }