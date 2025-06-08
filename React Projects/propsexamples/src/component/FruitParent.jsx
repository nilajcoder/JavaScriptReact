import React from 'react'
import Fruit from './Fruit'

function FruitParent() {


     const fruitname=["Apple","Banana","Lichi","Mango"]


  return (
    <div>


       { <Fruit fruitname={fruitname}/>}
      
    </div>
  )
}

export default FruitParent
