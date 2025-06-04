

import React, { useState } from 'react'

function Counter() {

    let [count, setcount]=useState(0)

    let addvalue=()=>{

        if(count<=20){

            setcount(count+1)
        }

    }

     let removevalue=()=>{

            if (count>0) {

                setcount(count-1)
                
            }
        }


        let resetvalue=()=>{

            setcount(0)
        }
  return (
    <div>

        <h1>Counter </h1>
        <h2>Counter Value : {count}</h2>
        <button onClick={addvalue}>Add Value</button>
        <button onClick={removevalue}>Minus Value </button>
        <button onClick={resetvalue}>Reset Value</button>
      
    </div>
  )
}

export default Counter
