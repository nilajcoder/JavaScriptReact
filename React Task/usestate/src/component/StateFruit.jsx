
import React from 'react'
import { useState } from 'react'

const StateFruit = () => {


    const [fruit,setfruit]=useState("Apple")
    const handleFruit=()=>{

        setfruit("Banana")

    }
  return (
    <div>

        <h1>UseState in React </h1>
        <h1>{fruit}</h1>
        <button onClick={handleFruit}>Change Fruit </button>
        
      
    </div>
  )
}

export default StateFruit
