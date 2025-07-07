import React, { useState } from 'react'
import  '../css/Counter.css'

const About = () => {

     const [count, setCount] = useState(0);
  return (
    <div className='about-container'>

        <h2> Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}

export default About
