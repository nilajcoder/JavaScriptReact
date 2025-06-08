
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


function UserDetails() {

    const {id} = useParams();
    const location=useLocation();
    const user=location.state.data 
    console.log("User",user)
  return (
    <div>
        <h1>User Details</h1>
        <p>Id : {id}</p>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <p>Company:{user.company.name}</p>
      
    </div>
  )
}

export default UserDetails
