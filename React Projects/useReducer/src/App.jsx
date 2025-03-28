
/*
What is UseReducer?
Ans :
useReducer is a React hook that is used for state management in functional components.
It Provedes state and a dispatch function to update the state.
It accepts a reducer function 
and an initial state as arguments.
and returns the current state and a dispatch function.

 It is an alternative to useState and is particularly useful when managing complex state logic or when the next 
 state depends on the previous one.
It allows you to manage state in a more predictable way by using a reducer function, similar to Redux.

*/


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'
import React from 'react'

function App() {

  const initialState = { count: 0 };
  
  const reducer = (state, action) => {

    switch (action.type) {
      case 'increase':
        return { count: state.count + 1 };
      case 'decrease':
        return { count: state.count - 1 };

      case 'input':
        return { count: action.payload };
      default:
        return state;
    }
   


  }

 const [state , dispatch]= useReducer(reducer,initialState)
  


  return (
    <>
     <h1>Count : {state.count}</h1>
     <button onClick={() => dispatch({type :'increase'})}>Increase</button>
      <button onClick={() => dispatch({type :'decrease'})}>Decrease</button>

      <br/>
      <input value={state.count}
       onChange={(e)=>dispatch({type :'input',payload : Number(e.target.value)})}
      type='number'></input>

    </>
  )
}

export default App
