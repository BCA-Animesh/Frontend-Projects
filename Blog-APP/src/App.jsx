import './App.css'
import {data, Outlet} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authentication from './Auth'
import { login, logout } from './AuthSlice'
import Conf from './Conf'


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    authentication.getUser().then((data)=>{
      if (data) { 
            dispatch(login({...data}))
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