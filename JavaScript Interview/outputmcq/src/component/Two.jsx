import React, { useEffect, useState } from 'react'

const Two = () => {

     const [value, setValue] =useState('A');

      const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount(count + 1);
    }
  }, [count]);

  const handleClick = () => {
    setValue('B');
    console.log(value); {/* A setValue('B') is asynchronous.That means the state doesn't update immediately*/}
  };



  return (
    <div>

        <h1>{count}</h1>{/* 3 */ }

       <p>{value}</p>{/* If We Click B will be Print */}
        <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default Two
