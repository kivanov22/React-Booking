import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="logo">IvanovBooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
};
