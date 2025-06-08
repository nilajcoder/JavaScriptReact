import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import { Navigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
const App = () => {
  return (
    <div>

      <BrowserRouter>

       <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashbord' element={<Dashboard/>}/>
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
