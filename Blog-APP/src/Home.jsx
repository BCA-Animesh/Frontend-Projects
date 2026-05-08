import {useDispatch, useSelector} from 'react-redux'

function Home() {
  const authStatus=useSelector((state)=>state.Auth.status)
  return (
    <div>
      {
        authStatus? "ok":'Please Login'
      }
    </div>
  )
}

export default Home