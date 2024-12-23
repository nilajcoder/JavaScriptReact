/*

Definition of useState:
In React, useState is a Hook that lets you add and manage state in functional components.
 It is used to declare state variables and provides a way to update them.

Key Points:
useState allows functional components to have state, which was traditionally only available in class components.


It returns an array with two elements:
The current state value.
A function to update the state.
The initial state value is passed as an argument to useState.

Differences Between Props and State:
Feature	Props                                            	State
Definition	Data passed from a parent component.	    Data managed within a component.
Mutability	Immutable (read-only).	                Mutable (can be updated).
Usage	Used to pass data to child components.	       Used for managing component data.
Ownership	Controlled by the parent component.     	Controlled by the component itself.
Summary:
State is a fundamental concept in React for building dynamic and interactive UIs. 
It allows components to remember and update information during their lifecycle. 
For functional components, useState is the go-to hook for managing state effectively.
*/
import { useState } from "react"
import './App.css'
function App() {

  let [counter,setCounter]=useState(0)
  
 // let counter=5

  const addValue=()=>{
     if(counter<20){

      setCounter(counter+1)
     }
    
  }


  const removeValue=()=>{

    if(counter>0){

      setCounter(counter-1)
    }
    
    

  }

  const resetValue=()=>{

    setCounter(0)
  }

  return (
    <>

     <h1>Counter App </h1>
     <h2>Counter value : {counter}</h2>

     <button  onClick={addValue}>Add value </button>
     <br/>
     <button  onClick={removeValue} >Remove value  </button>
     <br/>

     <button onClick={resetValue}> Reset value </button>


    </>
  )
}

export default App
