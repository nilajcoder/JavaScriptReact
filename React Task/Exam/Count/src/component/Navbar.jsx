import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
      <h2>My React App</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
      
    </div>
  )
}

export default Navbar
