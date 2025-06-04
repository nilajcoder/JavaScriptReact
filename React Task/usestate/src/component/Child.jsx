

import React from 'react'

function Child({fruitname}) {
  return (
    <div>

      {/* <h1>Child </h1>
        <p>Name: {user.name}</p>
        <p>Age :{user.age}</p>
        <p>Email : {user.email}</p> */}

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

export default Child
