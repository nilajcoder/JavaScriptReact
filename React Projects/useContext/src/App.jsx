
/*
What is UseContext?
UseContext is a React hook that allows you to access the context value from a Context Provider
 without having to pass it down through props.
  It simplifies the process of consuming context in functional components.

*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './context/Profile'
import Footer from './context/Footer'

function App() {
 

  return (
    <>
    <Profile/>
    <Footer/>
      
    </>
  )
}

export default App
