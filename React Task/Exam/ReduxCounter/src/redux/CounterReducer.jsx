
import React from 'react'

/*

3.	Reducers – Handle actions and update the state
*/
const initialState = {
  count: 0,
};


const CounterReducer = (state = initialState, action) => {
 
      if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else {
    return state; // always return the current state by default
  }
};




export default CounterReducer
