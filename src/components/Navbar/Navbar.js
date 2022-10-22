import React from 'react'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">IvanovBooking</span>
            <div className="navItems">
                <div className="navButton">Login</div>
                <div className="navButton">Register</div>
            </div>
        </div>
    </div>
  )
}
