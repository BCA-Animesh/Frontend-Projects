import React from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import { Link } from 'react-router-dom'
import Button from './Button'

function Profile({displayName, photoURL}) {
  return (
    <div>
        <Container>
            <img src={photoURL} alt="No Profile Photo" />
            <div>
                <h2>{displayName}</h2>
            </div>
            <div>
                <Link to={'/editProfile'}>
                    <Button>
                        Edit
                    </Button>
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default Profile