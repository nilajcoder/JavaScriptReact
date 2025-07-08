import React, { useState } from 'react'
import '../css/Count.css'

const Count = () => {

     const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
       <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
       <button onClick={() => setCount(0)}>Reset</button>
    </div>
      
    
  )
}

export default Count
