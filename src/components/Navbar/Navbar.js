import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./Navbar.scss";

export const Navbar = () => {
  const { user} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="logo">IvanovBooking</span>
        </Link>
      {user ? user.username : (<div className="navItems">
        <button className="navButton">Login</button>
        <button className="navButton">Register</button>
      </div>)}
      </div>
    </div>
  );
};
