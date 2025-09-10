import React, { useEffect, useState } from 'react'
import survice from '../Config'
import Container from '../Container'
import Post from '../Post'

function AllPosts() {
    const [posts, setposts]=useState([])
    useEffect(()=>{
        survice.getPosts([]).then((posts)=>{
            if (posts) {
                setposts(posts.documents)
            }
        })
    },[])
  return (
    <div  className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
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