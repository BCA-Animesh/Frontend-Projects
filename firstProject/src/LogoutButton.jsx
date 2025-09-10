import React from 'react'
import authentication from './Auth'
import { useDispatch } from 'react-redux'
import { logout } from './AuthSlice'

function LogoutButton() {
    const dispatch=useDispatch()
    const logoutHandeler=()=>{
        authentication.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandeler}>Logout</button>
  )
}

export default LogoutButton