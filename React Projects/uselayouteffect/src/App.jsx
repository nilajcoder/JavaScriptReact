
/*

what is uselayout effect?

ans: uselayout effect is a hook in react that is used to perform side effects in a synchronous way. 
it is similar to useeffect but it runs synchronously after all DOM mutations.
 it is called before user interface gets mounted. uselayout called before printing the dom to the screen.

this means that it can be used to read layout from the DOM and synchronously re-render.
 it is useful for measuring the size of an element or for performing animations.

*/

import { useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  useEffect(() => {
    console.log('useEffect called')
  
  }
  , [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect called')
  }
  , [])


  return (
    <>
    <h1>Test Message</h1>
    {Array(4000).fill('').map((item,index) => (
      
      <li key={index}>{Math.pow(Math.random(),10)}</li>))}
    </>
  )
}

export default App
