import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const nevigate=useNavigate()
    const nevitems=[
        {
            name:"Home",
            slug:'/'
        },
        {
            name:'Login',
            slug:'/Login'
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
        </ul>
    </header>
  )
}

export default Header