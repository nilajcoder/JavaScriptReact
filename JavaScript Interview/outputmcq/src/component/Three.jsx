import React, { useState } from 'react'

const Three = () => {

      const [text, setText] = useState("Hi");
      const[textone,settextone]=useState("Hi")

  const handleClick = () => {
    setText(prev => prev + "!");
    setText(prev => prev + "?");      {/* If we click Handle click  Hi!?*/}

  };

  const handle=()=>{
    settextone(textone+"!")
    settextone(textone+"?")     

  }

   {/* If we click Handle output Hi?*/}
  return (
    <div>

         <p>{text}</p>
      <button onClick={handleClick}>Change text </button>

        <p>{textone}</p>
      <button onClick={handle}>Change textone </button>
      
    </div>
  )
}

export default Three
