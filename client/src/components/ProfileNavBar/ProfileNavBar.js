import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";

export default function ProfileNavBar() {

    return (
      <div className="NavBar">
        <div className="Logo">
          {/* <img src="/logo6.png" alt="logo" width="300" /> */}
        </div>
        <div className="SearchBar"></div>
        <div className="NavLinks">
          <Link to="/signup">
            Sign Up
          </Link>
          <br></br>
          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    );
  }