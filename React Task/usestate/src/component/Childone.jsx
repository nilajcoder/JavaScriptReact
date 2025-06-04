
import React, { useState } from 'react'

function Childone({product}) {

    const [hide ,sethide]=useState(false);

  return (
    <div>

        
       <p>{product.price}</p>
       <p>{product. Productname}</p>

        {hide && <p>{product.description}</p>}
        <button onClick={()=>sethide(!hide)}>
            {hide ? "Hide" : "Show"} 
        </button>
      
    </div>
  )
}

export default Childone
