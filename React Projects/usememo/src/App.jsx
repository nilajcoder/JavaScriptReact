/*
what is usememo hook?
Ans:
The useMemo hook is a built-in React hook that allows you to memoize the result of 
a function so that it only recalculates when its dependencies change.
 This can help optimize performance by preventing unnecessary calculations on every render.
It is particularly useful for expensive calculations or when passing props
 to child components that rely on the result of the memoized function.
*/

import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  function cubeNum(num){
    console.log("Calculating cube")
    return num * num * num
  }

  const result = useMemo(() =>  cubeNum(number), [number])
  // The useMemo hook will only recalculate the cube of the number when 'number' changes.
  // If 'number' doesn't change, it will return the memoized value from the previous render.
  // This prevents unnecessary calculations and improves performance.
  



  return(
    <>
<input type='number'value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
<h1>Cube Of the number :{result}</h1>
<button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
<h1>Counter : {counter}</h1>



    </>
  )
  
}

export default App
