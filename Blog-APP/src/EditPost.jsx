import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import survice from './Config'
import Container from './Container'
import PostForm from './PostForm'

function EditPost() {
    const {uid,pid}=useParams()
    const [post,setPost]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        if (pid) {
            survice.getPost(uid,pid).then((post)=>{
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    },[uid,pid,navigate])
  return post? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default EditPost