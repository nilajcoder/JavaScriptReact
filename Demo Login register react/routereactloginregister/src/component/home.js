import React from 'react';
import { Link } from 'react-router-dom';
function Home(){
    return (
    <>
    <h1>Home Page</h1>
    <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>

        <li>
        <Link to="/login">Login</Link>
        </li>

        <li>
        <Link to="/register">Resgister</Link>
        </li>
    </ul>
  
   
  
    
     </>
    );
}
export default Home;
