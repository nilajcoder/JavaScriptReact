import React from 'react'
import Product from './Product'

function ProductParent() {


    const product ={
        name:"Laptop",
        company:"HP",
        price: 5000
    }
  return (
    <div>
       

        {/* We Pass the Object to Child Class through props */}
        <Product product={product}/> 
      
    </div>
  )
}

export default ProductParent
