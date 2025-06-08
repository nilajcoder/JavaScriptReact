import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Post() {

     const [user,setUser]=useState([]);
    console.log(user)



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setUser(res.data)
        }).catch((err)=>{
            console.log("Error",err)
        })
    },[] )
  return (
    <div>
        <h1>Post Description </h1>
        <ul>
            {user.map((data)=>(
                <>
                <h5>Body </h5>
                
                <li key={data.id}>{data.body}</li>
                <h5>Title </h5>
                <li key={data.id}>{data.title}</li>
                
                </>
            ))}
        </ul>
       
      
    </div>
  )
}

export default Post
