import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../css/Action.css'

const Action = () => {


  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  console.log("count",count)


  return (
        <div style={{ textAlign: "center", marginTop: "50px" }} className='container'>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>


       <div className='button-group'>

         <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

       </div>
     
    </div>

  )
}

export default Action
