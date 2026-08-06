import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import survice from './Config'
import Container from './Container'
import Post from './Post'

function AllPosts() {
     const userData=useSelector((state)=>state.Auth.userData)
     const [posts, setPosts]=useState([])
     useEffect(()=>{
        survice.getPosts(userData).then((posts)=>{
            if (posts) {
                setPosts(posts)
                console.log(posts);
                
            }
        })
     },[userData])
  return (
    <div>
        <Container>
            <div>
                {
                    posts.map((post)=>(
                        <div key={post.id}>
                            <Post {...post}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts