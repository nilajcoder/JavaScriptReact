import React from 'react'
import Count from './component/Count'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
       <BrowserRouter>
         <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
       
       </BrowserRouter>
    
      
    </div>
  )
}

export default App
