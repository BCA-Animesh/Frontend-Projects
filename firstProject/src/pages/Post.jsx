import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import survice from '../Config'
import Container from '../Container'
import parse from "html-react-parser";
import Button from '../Button'

function Post() {
    const [post, setpost]=useState()
    const nevigate=useNavigate()
    const {slug}=useParams()
    const userData=useSelector((state)=>state.Auth.userData)
    const isAuthor=post && userData ? post.userid===userData.$id : false
    useEffect(()=>{
        if (slug) {
            survice.getPost(slug).then((post)=>{
                if (post) {
                    setpost(post)
                } else {
                    nevigate('/')
                }
            })
        } else {
            nevigate('/')
        }
    },[slug, nevigate])
    const deletePost=()=>{
        survice.deletePost(post.$id).then((status)=>{
            if (status) {
                survice.deleteFile(post.featuredimage)
                nevigate('/')
            }
        })
    }
  return post?(
    <div className="py-8">
        <Container>
            <img src={survice.getFile(post.featuredimage)} alt={post.title}  className="rounded-xl"/>
            {
                isAuthor && (
                    <div className="absolute right-6 top-6"> 
                        <Link to={`./edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-green-500" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )
            }
            <div className="w-full mb-6">
                <h2 className="text-2xl font-bold">{post.title}</h2>
            </div>
            <div className="browser-css">{parse(post.content)}</div>
        </Container>
    </div>
  ):null
}

export default Post