import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Header() {
    const authStatus=useSelector((state)=>state.Auth.status)
    const nevigate=useNavigate()
    const nevitems=[
        {
            name:"Home",
            slug:'/'
        },
        {
            name:'Login',
            slug:'/Login'
        },
        {
            name:'Signup',
            slug:'/Signup'
        },
        {
            name:'Add Post',
            slug:'/AddPost'
        }
    ]
  return (
    <header>
        <ul>
        {
            nevitems.map((item)=>(
            <li key={item.name}>
                <button onClick={()=>nevigate(item.slug)}>
                    {item.name}
                </button>
            </li>
                
            ))
        }
        {
            authStatus && (<li>
                <Logout/>
            </li>)
        }
        </ul>
    </header>
  )
}

export default Header