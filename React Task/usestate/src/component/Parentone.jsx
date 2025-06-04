

import React from 'react'
import Childone from './Childone'

function Parentone() {

    const product={

             Productname: "Laptop",
            price:5000,
         description:"Good in Service "
        }


  return (
    <div>
   

   <Childone product={product} />
        
      
    </div>
  )
}

export default Parentone
