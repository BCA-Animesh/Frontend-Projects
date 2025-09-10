import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Storte.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

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
        element:(
          <Layout authentication={false}>
            <Login/>
          </Layout>
        )
      },
      {
        path:'/signup',
        element:(
          <Layout authentication={false}>
            <Signup/>
          </Layout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <Layout authentication>
            {""}
            <AllPosts/>
          </Layout>
        )
      },
      {
        path:'/add-post',
        element:(
          <Layout authentication>
            {""}
            <AddPost/>
          </Layout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <Layout authentication>
            {""}
            <EditPost/>
          </Layout>
        )
      },
      {
        path:'/post/:slug',
        element:<Post/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
