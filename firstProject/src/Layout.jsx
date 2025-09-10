import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Layout({children, authentication=true}) {
    const [lodar, setlodar]=useState(true)
    const authstatus=useSelector(state=>state.Auth.status)
    const nevigate=useNavigate()
    useEffect(()=>{
        if(authentication && authstatus !==authentication){
            nevigate('./login')
        }else if(!authentication && authstatus !==authentication){
            nevigate('/')
        }
        setlodar(false)
    },[authentication, authstatus, nevigate])
  return lodar ? <h1>loding...</h1> : <>{children}</>
}