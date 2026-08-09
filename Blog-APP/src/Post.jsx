import React from 'react'
import { Link } from 'react-router-dom'

function Post({uid, id, title, featuredimage}) {
  return (
    <Link to={`/post/${uid}/${id}`}>
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