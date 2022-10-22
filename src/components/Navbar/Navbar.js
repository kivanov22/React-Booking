import React from 'react'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">IvanovBooking</span>
            <div className="navItems">
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
            </div>
        </div>
    </div>
  )
}
