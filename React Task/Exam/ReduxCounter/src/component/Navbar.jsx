import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div>

         <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <ul className="nav-links">
        <li><Link to="/">Counter</Link></li>
      
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar
