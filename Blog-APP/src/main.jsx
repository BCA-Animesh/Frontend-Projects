import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import Signup from './Signup.jsx'
import AddPost from './AddPost.jsx'
import AllPosts from './AllPosts.jsx'
// import Post from './Post.jsx'
import PostFunctions from './PostFunctions.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/login/Signup',
        element:<Signup/>
      },
      {
        path:'/Signup',
        element:<Signup/>
      },
      {
        path:'/AddPost',
        element:<AddPost/>
      },
      {
        path:'/AllPosts',
        element:<AllPosts/>
      },
      {
        path:'/post/:uid/:pid',
        element:<PostFunctions/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
