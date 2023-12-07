import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Profile from './component/userdetails/profile';
import Contact  from './component/contact';
import Login from './component/login/login';
import Register from './component/register/register';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
