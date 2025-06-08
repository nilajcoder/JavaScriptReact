import React from 'react'

function Fruit({fruitname}) {
  return (
    <div>


        <h1>Fruit Name </h1>

         <ul>
        {fruitname?.map((item)=>(
            <>
            <li >{item}</li>
            </>
        ))}
     </ul>
      
    </div>
  )
}

export default Fruit
