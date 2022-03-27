import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Navbar, Nav } from 'react-bootstrap';

export default function ProfileNavBar() {

    return (
      <div className="NavBar">
        <div className="Logo">
          chefish
        </div>
        <div className="SearchBar"></div>
        <div className="NavLinks">
          <Link to="/signup">
            Sign Up
          </Link>
          <br></br>
          <Link to="/signin">
            Login
          </Link>
        </div>
      </div>


    );
  }