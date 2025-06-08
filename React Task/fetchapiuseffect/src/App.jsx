
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './component/Userlist';
import UserDetails from './component/UserDetails';



function App() {
  return (
    <div>

      

      <BrowserRouter>

      <Routes>
      <Route path='/'element={<Userlist/>}/>
      <Route path='/user/:id' element={<UserDetails/>}/>

      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
