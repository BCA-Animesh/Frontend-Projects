import './App.css'
import {Outlet} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authentication from './Auth'
import { login, logout } from './AuthSlice'
import Conf from './Conf'


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    authentication.getUser().then((data)=>{
      if (data) {
            dispatch(login({
              uid:data.uid,
              displayName:data.displayName,
              email:data.email,
              photoURL:data.photoURL
            }))
          }
    })
  },[])
  return(
    <>
    <Header/>
      <Outlet/>
    <Footer/> 
    </>
  )
}

export default App


// git init
// git add .
// git commit -m ""
// git push origin main