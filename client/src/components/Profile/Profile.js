import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllThreeProfile from "../AllThreeProfile/AllThreeProfile";

export default function Profile({ user, setUser, meetups, setMeetups }) {
        
    return (
            <div>
                <NavBar
                  user={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
                <AllThreeProfile
                  user={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
                <Footer
                  user={user}
                  setUser={setUser}
                  meetups={meetups}
                  setMeetups={setMeetups}
                />
            </div>
        );
    }