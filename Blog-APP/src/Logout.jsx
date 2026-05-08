import React from 'react'
import { useDispatch } from 'react-redux'
import authentication from './Auth'
import { logout } from './AuthSlice'
import Button from './Button'

function Logout() {
    const dispatch=useDispatch()
    const logoutHandeler=()=>{
        authentication.signout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <Button onClick={logoutHandeler}>Logout</Button>
  )
}

export default Logout