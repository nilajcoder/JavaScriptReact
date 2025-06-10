import React from 'react'
import { useCounter } from './Countercontext'

const Counter = () => {

    const {count,Increment}=useCounter();

  return (
    <div>
      

      <h2>{count}</h2>

      <button onClick={Increment}>Add +1</button>

    </div>
  )
}

export default Counter
