import {useDispatch, useSelector} from 'react-redux'

function Home() {
  const authStatus=useSelector((state)=>state.Auth.status)
  return authStatus ? (
    <p>Home</p>
  ) : (
    <p>Please Login</p>
  )
}

export default Home