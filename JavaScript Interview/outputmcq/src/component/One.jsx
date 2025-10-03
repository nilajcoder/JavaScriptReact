import React, { useEffect, useState } from 'react'

const One = () => {

   const [count, setCount] = useState(0);
   const [countone, setCountone] = useState(0);
   const[counttwo,setCounttwo]=useState(0)



   {/* If we click handleClickTwo increment by infinite */}
   useEffect(()=>{
     setCounttwo((counttwo)=>counttwo+1)
   } ,[counttwo])


     {/* If we click handleClickTwo increment by infinite */}
   const handleClickTwo=()=>{
            
    setCounttwo(counttwo+1)  


   }

  const handleClick = () => {  
    setCount(count + 1);           {/* If we click handleClick increment by 1 */}
    setCount(count + 1);
    setCount(count + 1);
  
  };


  const handle =()=>{
     setCountone(prev => prev + 1);  {/* If we click handle increment by 2 */}
    setCountone(prev => prev + 1);
    
  }

  return (
    <div>
    

    <p>{counttwo}</p>
    <button onClick={handleClickTwo}>Increment by infine</button>

      

       <p>{count}</p>
      <button onClick={handleClick}>Increment+1</button>   {/* If we click handleClick increment by 1 */}
    

    <p>{countone}</p>
      <button onClick={handle}>Increment+2</button>    {/* If we click handle increment by 2 */}


        <h1>{true && 'Hello'}</h1> {/* Hello */}
            <h1>{false && 'World'}</h1>  {/* Nothing will be printed*/}

    
        
         
         
    </div>
  )
}

export default One
