import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authentication from './Auth'
import { login, logout} from './AuthSlice'
import Hedar from './Hedar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loding, setloding]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authentication.getAccount()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setloding(false))
  },[])
  return loding ? null : (
  <>
  <Hedar/>
  <main>
    <Outlet />
  </main>
  <Footer/>
  </>)
}

export default App
