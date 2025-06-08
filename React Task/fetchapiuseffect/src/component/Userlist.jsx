import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Userlist() {

    const [user,setUser]=useState([]);
    console.log(user)



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUser(res.data)
        }).catch((err)=>{
            console.log("Error",err)
        })
    },[] )
  return (
    <div>
    

     <h1>USER LIST</h1>
         {user.map((data) => (
                <>
                    <div>

                        <Link to={`/user/${data.id}`} state={{data}}>
                            {data.name}( {data.email})
                        </Link>
                    </div>

                </>
            ))}
       
      
    </div>
  )
}

export default Userlist
