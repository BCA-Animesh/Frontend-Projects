import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Post({id, title, featuredimage}) {
    const userData=useSelector((state)=>state.Auth.userData)
  return (
    <Link to={`./post/${id}`}>
        <div>
            <div>
                <img src={featuredimage} alt={title} />
            </div>
            <h1>
                {title}
            </h1>
        </div>
    </Link>
  )
}

export default Post