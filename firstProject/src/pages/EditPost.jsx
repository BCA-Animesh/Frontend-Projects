import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import survice from '../Config'
import Container from '../Container'
import PostForm from '../PostForm'

function EditPost() {
    const nevigate=useNavigate()
    const [post, setpost]=useState(null)
    const {slug}=useParams
    useEffect(()=>{
      if (slug) {
        survice.getPost(slug).then((post)=>{
          if (post) {
          setpost(post)
          }})
      } else {
        nevigate('/')
      }
    },[slug, nevigate])
  return post?(
    <div className='py-8'>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost