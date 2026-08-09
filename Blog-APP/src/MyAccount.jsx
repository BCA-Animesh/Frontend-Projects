import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import Profile from './Profile'
import authentication from "./Auth";

function MyAccount() {
  const [userData, setUserData] = useState()
  useEffect(() => {
    authentication.getUser().then((data)=>{
      setUserData(data)
    })
  }, [])
  return (
    <div>
       <Container>
        <div>
          <Profile {...userData}/>
        </div>
       </Container>
    </div>
  )
}

export default MyAccount