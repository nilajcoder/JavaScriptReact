
import React from 'react'
import Greet from './Greet'

function GreetParent() {
  return (
    <div>



     
        {/* We Pass the Object to Child Class through props */}
        <Greet name="Nilaj"/>

      
    </div>
  )
}

export default GreetParent
