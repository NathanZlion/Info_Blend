import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'login',
        element: <p>login page</p>,
      },
      {
        path: 'signup',
        element: <p>sign up page</p>,
      },
      {
        path:'',
        element: <p>default</p>
      }
    ],
  },
  {
    path:'/login/abebe',
    element: <p>i am me, strong independent woman</p>
  }
])

export default router
