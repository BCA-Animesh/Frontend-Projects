import React from 'react'
import { useSelector } from 'react-redux'

function AddPost() {
 const authStatus=useSelector((state)=>state.Auth.status)
 const userData=useSelector((state)=>state.Auth.userData)
  console.log(userData);
  
  return authStatus ? (
    <p>Add post</p>
  ) : (
    <p>Please Login</p>
  )
}

export default AddPost