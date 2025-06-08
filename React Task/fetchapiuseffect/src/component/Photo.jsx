import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Photo() {

    const[photo,setPhoto]=useState();
    console.log(photo)
    
   useEffect(()=>{
      handlephoto();
   },[])


   const handlephoto=async()=>{
     
    try {

        const res=await axios.get("https://jsonplaceholder.typicode.com/photos")
        setPhoto(res.data)
        
    } catch (error) {
        console.log(error)
        
    }


   }

  return (
    <div>
      
    </div>
  )
}

export default Photo
