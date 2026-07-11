import React from 'react'
import { useSelector } from 'react-redux'
import Container from './Container';
import PostForm from './PostForm'

function AddPost() {
 const userData=useSelector((state)=>state.Auth.userData)
  console.log(userData);
  return (
    <div>
      <Container>
        <PostForm/>
      </Container>
    </div>
  )
}

export default AddPost