import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import survice from './Config'
import Container from './Container'
import Post from './Post'

function Home() {
  const authStatus=useSelector((state)=>state.Auth.status)
  const [Allposts,setAllPosts]=useState([])
  useEffect(()=>{
    survice.getAllPosts().then((posts)=>{
      if (posts) {
        const arr=[]
        posts.map((post)=>{
          Object.values(post.posts).forEach((value)=>{
            arr.push(value)           
          })
        })
        setAllPosts(arr)
      }
    })
  },[])
  return authStatus ? (
    <div>
      <Container>
        <div>
          {
            Allposts.map((post)=>(
              <div key={post.id}>
                <Post {...post}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  ) : (
    <p>Please Login</p>
  )
}

export default Home