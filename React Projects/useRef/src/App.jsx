
/*
What is useRef?
useRef is a React hook that returns a mutable ref object whose .
current property is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component.
It can be used to store a reference to a DOM element . It access the DOM element directly without causing re-renders.
or a mutable value that does not cause re-renders when updated.

*/

import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import React from 'react'
import './App.css'

function App() {
  const[value, setValue] = useState(0)
  const count = useRef(0)

  const inputelement = useRef(0)
  const btnclick =() => {
    console.log(inputelement)
    inputelement.current.style.background="red"
  }

  useEffect(() => {
    count.current = count.current + 1
  });



  return (
    <>
    <input type="text" ref={inputelement}/>
    <button onClick={btnclick}> Click Me </button>

    <button onClick={() =>{ setValue(value + 1)}}>Count +1: </button>
    <h1> {value}</h1>

    <button onClick={() =>{ setValue(value - 1)}}>Count -1: </button>

    <h1> Render Count :{count.current}</h1>

      
    </>
  )
}

export default App
