import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllThreeProfile from "../AllThreeProfile/AllThreeProfile";
// import SearchContainerProfile from '../SearchContainerProfile/SearchContainerProfile';

export default function Profile({ user, setUser }) {

  useEffect(() => {
    console.log(user)
        fetch(`/users/${user.id}`)
          .then((response) => response.json())
          .then((user) => setUser(user));
  }, []);

  // function rerender(){
  //       fetch(`/users/${window.userId}`)
  //         .then((response) => response.json())
  //         .then((user) => setUser(user));
  // }
        
    return (
            <div>
                THIS IS THE PROFILE PAGE
                <NavBar
                  userInfo={user}
                  setUser={setUser}
                />
                {/* <SearchContainerProfile
                  userInfo={user} */}
                {/* // /> */}
                <AllThreeProfile
                  userInfo={user}
                  setUser={setUser}
                  // rerender={rerender}
                />
                <Footer
                  userInfo={user}
                  setUser={setUser}
                />
            </div>
        );
    }