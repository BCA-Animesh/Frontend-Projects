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
            slug:'/',
            active:true
        },
        {
            name:'Login',
            slug:'/Login',
            active:!authStatus
        },
        {
            name:'Signup',
            slug:'/Signup',
            active:!authStatus
        },
        {
            name:'Add Post',
            slug:'/AddPost',
            active:authStatus
        },
        {
            name:'All Posts',
            slug:'/AllPosts',
            active:authStatus
        },
        {
            name:'My Account',
            slug:'/MyAccount',
            active:authStatus
        }
    ]
  return (
    <header>
        <ul>
        {
            nevitems.map((item)=>(
            item.active ? <li key={item.name}>
                <button onClick={()=>nevigate(item.slug)}>
                    {item.name}
                </button>
            </li> : null
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