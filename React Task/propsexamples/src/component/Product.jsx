import React from 'react'

function Product({product}) {
  return (
    <div>

        <h1>Product Details</h1>

        <p>Name :{product.name}</p>
        <p>Company :{product.company}</p>
        <p>Price :{product.price}</p>
      
    </div>
  )
}

export default Product
