/*
What is Usecallback?

Ans:
Usecallback is a hook that lets you cache a function definition between renders.
 It is useful when you want to prevent a function from being recreated on every render,
  which can help with performance optimization in certain scenarios.

When to use Usecallback?
Ans:
1. When you have a function that is passed as a prop to a child component and you want to prevent unnecessary
 re-renders of that child component.
2. When you have a function that is used in a dependency array of another hook (like useEffect) and you want to
  prevent that hook from running unnecessarily.
3. When you have a function that is expensive to create and you want to avoid recreating it on every render.
4. When you have a function that is used in an event handler and you want to prevent the event handler from being
  recreated on every render.
5. When you want to memoize a function to improve performance in a functional component.

*/

import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  const newFn= useCallback((count) => {
    console.log("newFn called")
  }
  ,[count])


  return (
    <>
   <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={() => setCount(prev=>prev+1)}>Click Here </button>


    
    </>
  )
}

export default App
