
import React from 'react'
import Action from './component/Action'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Todo from './component/Todo'


const App = () => {
  return (
    <div>

       <BrowserRouter>

        <Navbar />
      <Routes>
        <Route path="/" element={<Action />} />
      
        <Route path="/todo" element={<Todo />} />
      </Routes>
       
       </BrowserRouter>
     
    
      
    </div>
  )
}

export default App
