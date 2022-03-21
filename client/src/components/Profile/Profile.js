import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllThreeProfile from "../AllThreeProfile/AllThreeProfile";
import SearchContainerProfile from '../SearchContainerProfile/SearchContainerProfile';

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
        fetch(`/users/${window.userId}`)
          .then((response) => response.json())
          .then((user) => setUser(user));
  }, []);

  function rerender(){
        fetch(`/users/${window.userId}`)
          .then((response) => response.json())
          .then((user) => setUser(user));
  }
        
    return (
            <div>
                THIS IS THE PROFILE PAGE
                <NavBar
                  userInfo={user}
                />
                <SearchContainerProfile
                  userInfo={user}
                />
                <AllThreeProfile
                  userInfo={user}
                  rerender={rerender}
                />
                <Footer
                  userInfo={user}
                />
            </div>
        );
    }