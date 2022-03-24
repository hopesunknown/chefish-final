import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Navbar, Nav } from 'react-bootstrap';

export default function ProfileNavBar() {

    return (
      // <div className="NavBar">
      //   <div className="Logo">
      //     {/* <img src="/logo6.png" alt="logo" width="300" /> */}
      //   </div>
      //   <div className="SearchBar"></div>
      //   <div className="NavLinks">
      //     <Link to="/signup">
      //       Sign Up
      //     </Link>
      //     <br></br>
      //     <Link to="/signin">
      //       Login
      //     </Link>
      //   </div>
      // </div>

<Navbar fixed="top" bg="light" variant="light" className="nav-bar" style={{ minWidth: 700 }}>
{/* <img id="umbrella" src={umbrella} alt="umbrella"/> */}
    <Navbar.Brand className="Logo">chefish</Navbar.Brand>
        <Nav
        className="navlinks"
        style={{ paddingRight: 10 }}
        >
            <Nav.Link href="/signup">Signup</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;

            <Nav.Link href="/signin">Login</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </Nav>
</Navbar>
    );
  }