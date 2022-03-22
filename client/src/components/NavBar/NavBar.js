import React from 'react';
import { Link } from "react-router-dom";
// import "../src/App.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar({ searchWord, handleChange, userInfo, user, setUser, meetups, setMeetups }) {
  
    return (
    <>
      <div className="NavBar">
        <div className="Logo">
        {/* <img src="/logo6.png" alt="logo" width="300" /> */}
        </div>
        <div className="SearchBar">
          <SearchBar
            searchWord={searchWord}
            handleChange={handleChange}
            meetups={meetups}
            setMeetups={setMeetups}
          />
        </div>
        <div className="NavLinks">
          <Link to="/main">Home</Link>
          <br></br>
          <Link to="/profile">Profile</Link>
          <br></br>
          <Link to="/signin">Log Out</Link>
        </div>
      </div>
    </>
    );
  }