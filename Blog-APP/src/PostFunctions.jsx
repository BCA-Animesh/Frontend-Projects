import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import survice, { Survice } from './Config'
import { useSelector } from 'react-redux'
import authentication from './Auth'
import Container from './Container'
import Button from './Button'
import parse from 'html-react-parser'

function PostFunctions() {
    const {uid,pid}=useParams()
    const [post,setPost]=useState()
    const userData=useSelector((state)=>state.Auth.userData)
    const isAuthor=uid && userData ? uid===userData : false
    const navigate=useNavigate()
    useEffect(()=>{
      if (pid) {
        survice.getPost(uid, pid).then((post)=>{
          if (post) {
            setPost(post)
          }else{
            navigate('/')
          }
        })
      }else{
        navigate('/')
      }
    },[uid,pid,navigate])
    const deletePost=()=>{
      survice.deletePost(post.uid,post.id).then((response)=>{
        if (response) {
        navigate('/')
        }
      })
    }
  return post?(
    <div>
      <Container>
        <img src={post.featuredimage} alt={post.title} />
        {
          isAuthor && (
            <div>
              <Link to={`/editPost/${post.uid}/${post.id}`}>
              <Button>
                Edit
              </Button>
              </Link>
              <Button onClick={deletePost}>
                Delete
              </Button>
            </div>
          )
        }
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>{parse(post.content)}</div>
      </Container>
    </div>
  ):null
}

export default PostFunctions