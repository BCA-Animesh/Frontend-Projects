import React from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import ProfileForm from './ProfileForm'

function EditProfile() {
    const userData=useSelector((state)=>state.Auth.userData)
  return userData?(
    <div>
        <Container>
            <ProfileForm userData={userData}/>
        </Container>
    </div>
  ):null
}

export default EditProfile