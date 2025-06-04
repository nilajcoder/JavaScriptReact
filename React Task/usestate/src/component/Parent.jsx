

import React from 'react'
import Child from './Child'

function Parent() {

    // const user={
    //     name :"Nilaj",
    //     age:20,
    //     email:"nilaj@gmail.com"

    // }

   const fruitname=["Apple","Banana","Lichi","Mango"]
  return (
    <div>
        <h1>Parent </h1>
        {/* <Child user={user}/> */}
        
       { <Child fruitname={fruitname}/>}


      
    </div>
  )
}

export default Parent
