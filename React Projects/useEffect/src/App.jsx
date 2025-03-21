import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  /*
  What is useEffect?
  useEffect is a hook that allows you to perform side effects in your function components.
  It is called after the component has rendered and can be used to perform tasks such as data fetching,
  subscriptions, or manually changing the DOM.
  It takes two arguments:
  1. A function that contains the side effect code.Callback function
  This function will be called after the component has rendered.
  
  2. An array of dependencies that determines when the effect should run.
  If the array is empty, the effect will only run once after the initial render.
  If the array contains variables, the effect will run whenever those variables change.
  
  */
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    },2000)

  },[])

  return (
    <>
     
      <h1>I have {count} times rendred  </h1>
    </>
  )
}

export default App
