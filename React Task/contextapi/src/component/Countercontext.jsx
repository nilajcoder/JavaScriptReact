
import React, { createContext, useContext, useState } from 'react'

const CounterContext=createContext();

const CounterProvider = ({children}) => {

    const [count ,setcount]=useState(0)


    const Increment=()=>{
        setcount(prev=>prev+1)
    }


  return (

    <CounterContext.Provider value={{count,Increment}} >
        {children}


    </CounterContext.Provider>
    
  )
}

export const useCounter=()=>useContext(CounterContext)
export default CounterProvider
