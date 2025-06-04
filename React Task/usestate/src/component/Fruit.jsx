
import React from 'react'

function Fruit() {

    let fruit ="Apple"
   let handleFruit=()=>{

    fruit="Banana"
    console.log(fruit)
   }

    

  return (
    <div>

        <h1>State in React Js </h1>
        <h1>{fruit}</h1>
        <button onClick={handleFruit}>Change Fruit Name</button>
      
    </div>
  )
}

export default Fruit
