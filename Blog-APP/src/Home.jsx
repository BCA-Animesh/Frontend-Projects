import React from 'react'
import {useSelector} from 'react-redux'

function Home() {
  const user=useSelector((state)=>state.Auth.status)
 
  return (
    <div>
      {
        user? "ok":'Please Login'
      }
    </div>
  )
}

export default Home